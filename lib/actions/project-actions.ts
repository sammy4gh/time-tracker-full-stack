"use server";
import prisma from "@/lib/prisma";

export const getProjects = async () => {
  const projects = await prisma.project.findMany();

  return JSON.stringify(projects);
};
