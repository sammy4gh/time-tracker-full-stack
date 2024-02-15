"use server";
import prisma from "@/lib/prisma";
import { Project } from "@/types/project_types";

export const getProjects = async () => {
  const projects = await prisma.project.findMany();

  return JSON.stringify(projects);
};

export const createProject = (project: Project) => {
  const newProject = prisma.project.create({
    data: {
      name: project.name,
      description: project.description,
    },
  });

  try {
    return {
      status: 200,
      title: "Project created",
      message: "Project created successfully",
      data: newProject,
    };
  } catch (error: any) {
    return {
      status: 500,
      title: "Failed to create project",
      message: error.message,
      data: project,
    };
  }
};
