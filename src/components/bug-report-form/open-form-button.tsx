"use client";

import { useBugReport } from "@/hooks/use-bug-report";

import { Button } from "../button";

export function OpenBugReportFormButton() {
  const { openDialog } = useBugReport();
  return <Button onClick={openDialog}>Zgłoś błąd</Button>;
}
