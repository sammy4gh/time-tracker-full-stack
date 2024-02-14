import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AlarmClockCheck, Briefcase, Settings } from "lucide-react";
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("fixed overflow-auto pb-12  z-10 ", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Time Tracker
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <AlarmClockCheck size={16} strokeWidth={2} />
              Clock-it
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Briefcase size={16} strokeWidth={2} />
              Projects
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings size={16} strokeWidth={2} /> Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
