"use client";

import { useState } from "react";
import Popover from "@/components/shared/popover";
import { LayoutDashboard, Menu, Mails } from 'lucide-react';
import Link from "next/link";

export default function UserDropdown() {
  const [openPopover, setOpenPopover] = useState(false);


  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <Link
              href="/dashboard"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </Link>
            <Link
              href="/contact-us"
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
            >
              <Mails className="h-4 w-4" />
              <p className="text-sm">Contact us</p>
            </Link>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <Menu
          onClick={() => setOpenPopover(!openPopover)}
          className="cursor-pointer flex h-8 w-8 p-1 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        />
      </Popover>
    </div>
  );
}
