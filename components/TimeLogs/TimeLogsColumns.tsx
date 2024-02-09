"use client";

import { ColumnDef } from "@tanstack/table-core";
import { TimeLog } from "@/types/time_tracker_types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTimeLog } from "@/lib/actions/time_tracker_actions";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { updateTimeLogState } from "@/lib/store/features/time_tracker/timeLogSlice";
import { formatDate, parse } from "date-fns";
import moment from "moment/moment";

export const timeLogsColumns: ColumnDef<TimeLog>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Project",
    accessorKey: "project.name",
  },
  {
    header: "Start Time ",
    accessorKey: "startTime",
  },
  {
    header: "End Time",
    accessorKey: "endTime",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Actions",
    id: "actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const timeLog = row.original;
      const { toast } = useToast();
      const dispatch = useAppDispatch();

      const handleDelete = (id: number) => {
        deleteTimeLog(id).then((res) => {
          toast({
            title: res.title,
            description: res.message,
          });
        });
      };

      const handleDuplicate = (timeLog: TimeLog) => {
        console.log(timeLog);
        const newTimeLog = {
          ...timeLog,
          date: parse(
            timeLog.date.toString(),
            "MMMM do, yyyy",
            new Date(),
          ).toISOString(),
          startTime: moment(timeLog.startTime?.toString(), "HH:mm")
            .toDate()
            .toISOString(),
          endTime: moment(timeLog.endTime?.toString(), "HH:mm")
            .toDate()
            .toISOString(),
        };
        dispatch(updateTimeLogState(newTimeLog));
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleDelete(timeLog.id || 0)}>
              Delete
              <DropdownMenuShortcut>💣 </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDuplicate(timeLog)}>
              Duplicate
              <DropdownMenuShortcut>©️</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
