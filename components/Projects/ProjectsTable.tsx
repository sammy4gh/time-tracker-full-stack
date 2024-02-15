import React from "react";
import { Project } from "@/types/project_types";
import { getProjects } from "@/lib/actions/project_actions";
import { DataTable } from "@/components/ui/data-table";
import { projectColumns } from "@/components/Projects/ProjectColumns";

const ProjectsTable = async () => {
  let projects: Project[] = [];

  try {
    const response = await getProjects();
    projects = JSON.parse(response);
  } catch (error) {
    console.error(error);
  }

  return <DataTable columns={projectColumns} data={projects}></DataTable>;
};

export default ProjectsTable;
