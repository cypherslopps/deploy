"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root

const TabsList = (({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn(
      "flex items-center justify-center gap-x-2 it",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = (({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      "font-sans whitespace-nowrap px-2 sm:text-md md:text-base font-light text-app-text-dark-9 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-[2px] data-[state=active]:border-[#333] -mb-[1px] data-[state=active]:z-20",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = (({ className, ...props }) => (
  <TabsPrimitive.Content
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }