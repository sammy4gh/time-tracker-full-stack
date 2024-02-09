import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function TableSkeleton() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-6" />
      </div>
      <div className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 p-4">
                <Skeleton className="w-20 h-6" />
              </th>
              <th className="w-1/4 p-4">
                <Skeleton className="w-20 h-6" />
              </th>
              <th className="w-1/4 p-4">
                <Skeleton className="w-20 h-6" />
              </th>
              <th className="w-1/4 p-4">
                <Skeleton className="w-20 h-6" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={4} className="h-24 text-center">
                <Skeleton className="w-20 h-6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSkeleton;
