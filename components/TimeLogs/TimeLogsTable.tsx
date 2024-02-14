import React from "react";
import { TimeLog } from "@/types/time_tracker_types";
import { Project } from "@/types/project-types";
import { getTimeLogs } from "@/lib/actions/time_tracker_actions";
import moment from "moment";
import { formatDate } from "date-fns";
import { timeLogsColumns } from "@/components/TimeLogs/TimeLogsColumns";
import { TimeLogsDataTable } from "@/components/TimeLogs/TimeLogsDataTable";

const TimeLogsTable = async () => {
  let timeLogs: TimeLog[] = [];

  try {
    const response = await getTimeLogs();
    const logs = JSON.parse(response);

    //format startTime and EndTime with moment
    timeLogs = logs.map((log: TimeLog) => {
      return {
        ...log,
        startTime: moment(log.startTime).format("HH:mm A"),
        endTime: moment(log.endTime).format("HH:mm A"),
        date: formatDate(new Date(log.date), "PPP"),
      };
    });
  } catch (error) {
    console.error(error);
  }
  return (
    <TimeLogsDataTable
      columns={timeLogsColumns}
      data={timeLogs}
    ></TimeLogsDataTable>
  );
};

export default TimeLogsTable;
