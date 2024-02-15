"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AlarmClockCheck, Briefcase, Settings } from "lucide-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathName = usePathname();

  return (
    <div className={cn(" overflow-hidden pb-12 z-10 h-full  ", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Time Tracker
          </h2>
          <div className="gap-2 space-y-1 ">
            <Link href={"/"}>
              <Button
                variant={pathName === "/" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <AlarmClockCheck size={16} strokeWidth={2} />
                Clock-it
              </Button>
            </Link>
            <Link href={"/projects"}>
              <Button
                variant={pathName === "/projects" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <Briefcase size={16} strokeWidth={2} />
                Projects
              </Button>
            </Link>
            <Link href={"/settings"}>
              <Button
                variant={pathName === "/settings" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <Settings size={16} strokeWidth={2} /> Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
