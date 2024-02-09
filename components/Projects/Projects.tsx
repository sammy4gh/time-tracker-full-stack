"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/actions/project-actions";
import { Project } from "@/types/project-types";
import { findProject } from "@/lib/helpers";

type ProjectsProps = {
  projects: Project[];
  selectedProjectFunc: (project: Project) => void;
  projectId: number;
};

const Projects = ({
  projects,
  selectedProjectFunc,
  projectId,
}: ProjectsProps) => {
  const [project, setProject] = useState<Project | null>(null);

  const handleProjectChange = (project: Project) => {
    setProject(project);
    selectedProjectFunc(project);
  };

  useEffect(() => {
    setProject(findProject(projects, projectId));
  }, [projects, projectId]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{project?.name || "Projects"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Projects</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {projects
            ? projects.map((project) => (
                <DropdownMenuItem
                  key={project.id}
                  className="cursor-pointer"
                  onClick={() => handleProjectChange(project)}
                >
                  {project.name}
                </DropdownMenuItem>
              ))
            : "No project"}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Projects;

const ProjectList = [
  {
    id: 1,
    name: "Icon Management",
  },
  {
    id: 2,
    name: "ARMS ERP",
  },
  {},
];
