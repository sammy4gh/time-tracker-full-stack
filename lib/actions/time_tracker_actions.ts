"use server";
import prisma from "@/lib/prisma";

import { TimeLog } from "@/types/time_tracker_types";
import { revalidatePath } from "next/cache";
import { updateStatus } from "@/lib/store/features/time_tracker/timeLogSlice";

export async function createTimeLog(data: TimeLog) {
  try {
    const timeLog = await prisma.task.create({
      data: {
        name: data.name,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        projectId: data.projectId,
      },
      include: {
        project: true,
      },
    });
    revalidatePath("/");
    return {
      status: 200,
      title: "Clock-it ⏰",
      message: "Time is logged successfully! 🎉",
      data: timeLog,
    };
  } catch (error: any) {
    return {
      status: 500,
      title: "Failed to log time 😔",
      message: error.message,
      data,
    };
  }
}

export async function updateTimeLog(data: TimeLog) {
  try {
    const timeLog = await prisma.task.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        projectId: data.projectId,
      },
      include: {
        project: true,
      },
    });
    revalidatePath("/");
    updateStatus("creating");
    return {
      status: 200,
      title: "Time log updated",
      message: "Time log updated successfully! 🎉",
      data: timeLog,
    };
  } catch (error: any) {
    return {
      status: 500,
      title: "Failed to update time log 😔",
      message: error.message,
      data,
    };
  }
}

export const getTimeLogs = async () => {
  const timeLogs = await prisma.task.findMany({
    include: {
      project: true,
    },
  });

  return JSON.stringify(timeLogs);
};

export const deleteTimeLog = async (id: number) => {
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  return {
    title: "Time log",
    message: "Successfully deleted time log 💥",
    data: id,
  };
};
