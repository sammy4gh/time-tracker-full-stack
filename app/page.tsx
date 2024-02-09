import TimeLogForm from "@/components/TimeLogForm/TimeLogForm";

import TimeLogsTable from "@/components/TimeLogs/TimeLogsTable";
import { Suspense } from "react";
import TableSkeleton from "@/components/TimeLogs/TableSkeleton";
import { Toaster } from "@/components/ui/toaster";

const Home = async () => {
  return (
    <main className="flex flex-col gap-8 py-8 px-20">
      <Toaster />
      <h1 className="text-4xl font-bold">Clock-it</h1>
      <TimeLogForm />
      <Suspense fallback={<TableSkeleton />}>
        <TimeLogsTable />
      </Suspense>
    </main>
  );
};

export default Home;
