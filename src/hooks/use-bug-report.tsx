"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

import { BugReportForm } from "@/components/bug-report-form";
import { Toaster } from "@/components/ui/sonner";

const BugReportContext = createContext<{
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  openDialog: () => void;
  closeDialog: () => void;
} | null>(null);

export function useBugReport() {
  const context = useContext(BugReportContext);
  if (context == null) {
    throw new Error(
      "useBugReportContext must be used within a BugReportContextProvider",
    );
  }
  return context;
}

export function BugReportProvider({ children }: { children: ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(true); // TODO: Change to false

  return (
    <BugReportContext.Provider
      value={{
        isDialogOpen,
        setIsDialogOpen,
        openDialog: () => {
          setIsDialogOpen(true);
        },
        closeDialog: () => {
          setIsDialogOpen(false);
        },
      }}
    >
      {children}
      <Toaster />
      <BugReportForm />
    </BugReportContext.Provider>
  );
}
