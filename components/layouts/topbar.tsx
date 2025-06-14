"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Sun, Moon } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useTheme } from "next-themes";

export const Topbar = () => {
  const { toggleMobileSidebar } = useSidebarStore();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-b flex justify-between items-center w-full py-2 px-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileSidebar}
        >
          <Menu size={24} />
        </Button>
        <h1 className="text-base lg:text-2xl font-semibold">Harmonizer Solutions</h1>
      </div>

      <div className="flex items-center gap-4">
      <Select>
  <SelectTrigger className="w-fit max-w-32 lg:max-w-[220px]">
    <SelectValue placeholder="Select an organization" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Organizations</SelectLabel>
      <SelectItem value="greenTechSteel">GreenTech Steel Industries</SelectItem>
      <SelectItem value="novaPharma">NovaPharma Labs</SelectItem>
      <SelectItem value="quantumMotors">Quantum Motors Pvt. Ltd.</SelectItem>
      <SelectItem value="zenithFoods">Zenith Processed Foods</SelectItem>
      <SelectItem value="elevateTextiles">Elevate Textiles Manufacturing</SelectItem>
      <SelectItem value="corePowerSolutions">CorePower Energy Solutions</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>


        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 p-1 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarImage
                  src="https://ui.shadcn.com/avatars/shadcn.jpg"
                  alt="user"
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              {/* <div className="hidden lg:grid text-left text-sm leading-tight">
                <span className="truncate font-medium">User</span>
                <span className="text-muted-foreground truncate text-xs">
                  user@sample.com
                </span>
              </div> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage
                    src="https://ui.shadcn.com/avatars/shadcn.jpg"
                    alt="user"
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">User</span>
                  <span className="text-muted-foreground truncate text-xs">
                    user@sample.com
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};