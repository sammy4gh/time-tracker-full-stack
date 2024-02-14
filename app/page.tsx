import TimeLogForm from "@/components/TimeLogForm/TimeLogForm";

import TimeLogsTable from "@/components/TimeLogs/TimeLogsTable";
import { Suspense } from "react";
import TableSkeleton from "@/components/TimeLogs/TableSkeleton";
import { Toaster } from "@/components/ui/toaster";

const Home = async () => {
  return (
    <main className="flex flex-col gap-8 px-20">
      <Toaster />
      <div
        className={
          "sticky top-0 z-50 bg-white flex flex-col gap-8 border-b pb-8"
        }
      >
        <h1 className="text-4xl font-bold">Clock-it</h1>
        <TimeLogForm />
      </div>
      <section className="">
        <Suspense fallback={<TableSkeleton />}>
          <TimeLogsTable />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
