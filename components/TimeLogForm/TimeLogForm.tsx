"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Categories from "@/components/Categories/Categories";
import ProjectsDropdown from "@/components/Projects/ProjectsDropdown";
import { Calendar } from "@/components/ui/calendar";
import { PopoverContent } from "@/components/ui/popover";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createTimeLog,
  getTimeLogs,
  updateTimeLog,
} from "@/lib/actions/time_tracker_actions";
import { Project } from "@/types/project_types";
import { getProjects } from "@/lib/actions/project_actions";
import { TimeLog } from "@/types/time_tracker_types";
import { formatDate } from "date-fns";
import moment from "moment/moment";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";
import { useAppSelector, useAppStore } from "@/lib/store/hooks";
import { findProject, taskLogValidationSchema } from "@/lib/helpers";
import { useFormStatus } from "react-dom";

const today = new Date();
type buttonName = "✍️ Update" | "🚀 Clock-it";
const TimeLogForm = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [date, setDate] = useState<Date>(today);
  const { toast } = useToast();
  const timeLog = useAppSelector((state) => state.timeLog.timeLog);
  const status = useAppSelector((state) => state.timeLog.status);
  const [timeLogState, setTimeLogState] = useState(timeLog);
  const [project, setProject] = useState<Project | null>();
  const { pending } = useFormStatus();
  const [isValid, setIsValid] = useState<Boolean>();
  const [buttonName, setButtonName] = useState<buttonName>("🚀 Clock-it");

  const getFormData = (event: FormEvent<HTMLFormElement>): TimeLog => {
    const formData = new FormData(event.currentTarget);
    return {
      id: timeLog.id,
      name: formData.get("name")?.toString() || "",
      startTime: moment(
        formData.get("startTime")?.toString(),
        "HH:mm",
      ).toDate(),
      endTime: moment(formData.get("endTime")?.toString(), "HH:mm").toDate(),
      date: date,
      projectId: project?.id || 0,
    };
  };

  const validateForm = async (data: TimeLog) => {
    try {
      console.log("data v", data);
      return await taskLogValidationSchema.validate(data);
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error 😞",
        description: err.message,
      });
      throw err;
    }
  };

  const submitForm = async (data: TimeLog) => {
    console.log("submitform", data);
    let response = null;
    try {
      switch (status) {
        case "editing":
          console.log("data", data);
          response = await updateTimeLog(data);
          break;
        case "duplicating":
          delete data.id;
          response = await createTimeLog(data);
          break;
        default:
          response = await createTimeLog(data);
          break;
      }
      toast({
        title: response.title,
        description: response.message,
      });
      revalidatePath("/");
      return response;
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = getFormData(event);
    console.log("formdata", formData);
    try {
      const validatedData = await validateForm(formData);
      await submitForm(validatedData);
    } catch (err) {
      throw err;
    }
  };

  const fetchProjects = async () => {
    const response = await getProjects();
    const projects = JSON.parse(response);
    setProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    setProject(findProject(projects, timeLog.projectId));
  }, [projects, timeLog.projectId]);

  useEffect(() => {
    setTimeLogState({ ...timeLog });
    switch (status) {
      case "editing":
        setButtonName("✍️ Update");
        break;
      case "duplicating":
        setButtonName("🚀 Clock-it");
        break;
      default:
        setButtonName("🚀 Clock-it");
        break;
    }
  }, [timeLog]);

  return (
    <div>
      <form className="flex gap-4" onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="What have you worked on?"
          defaultValue={timeLog.name}
        />

        <ProjectsDropdown
          projects={projects}
          selectedProjectFunc={setProject}
          projectId={timeLogState.projectId}
        />
        <div>
          <Input
            type="time"
            name="startTime"
            defaultValue={formatDate(timeLogState.startTime, "HH:mm")}
          />
        </div>
        <div>
          <Input
            type="time"
            name="endTime"
            defaultValue={formatDate(timeLogState.endTime, "HH:mm")}
          />
        </div>
        <DatePicker setDateFunc={setDate} />
        <Button>{buttonName}</Button>
      </form>
    </div>
  );
};

export default TimeLogForm;
