import { Project } from "@/types/project-types";
import * as Yup from "yup";

export const findProject = (
  projects: Project[],
  id: number,
): Project | null => {
  return projects.find((project: Project) => project.id === id) || null;
};

export const taskLogValidationSchema = Yup.object().shape({
  id: Yup.number(),
  name: Yup.string().required("Name is required"),
  date: Yup.date().required("Date is required"),
  startTime: Yup.date().required("Start time is required"),
  endTime: Yup.date().required("End time is required"),
  projectId: Yup.number().required("Project is required"),
});
