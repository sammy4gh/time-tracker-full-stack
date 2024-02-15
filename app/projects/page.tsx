import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import TimeLogForm from "@/components/TimeLogForm/TimeLogForm";
import TableSkeleton from "@/components/TimeLogs/TableSkeleton";
import TimeLogsTable from "@/components/TimeLogs/TimeLogsTable";
import { Heading } from "lucide-react";
import ProjectsTable from "@/components/Projects/ProjectsTable";

function Page() {
  return (
    <main className="flex flex-col gap-8 px-20 w-full">
      <Toaster />
      <div className="sticky top-0 z-50 bg-white flex flex-col gap-8 border-b pb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <ProjectsTable />
      </Suspense>
    </main>
  );
}

export default Page;
