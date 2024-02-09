import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import React from "react";
import { Button } from "@/components/ui/button";

type DuplicateLogDrawerProps = {};

function DuplicateLogDrawer({}: DuplicateLogDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>Duplicate</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        {/*<DrawerFooter>*/}
        {/*  <Button>Submit</Button>*/}
        {/*  <DrawerClose>*/}
        {/*    <Button variant="outline">Cancel</Button>*/}
        {/*  </DrawerClose>*/}
        {/*</DrawerFooter>*/}
      </DrawerContent>
    </Drawer>
  );
}

export default DuplicateLogDrawer;
