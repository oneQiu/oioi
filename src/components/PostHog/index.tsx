'use client';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

export const PostHogContent: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Desc</DrawerDescription>
          </DrawerHeader>
          <div>This is shadcn/ui drawer...</div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
