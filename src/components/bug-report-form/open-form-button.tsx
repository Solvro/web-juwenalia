"use client";

import { useBugReport } from "@/hooks/use-bug-report";

import { Button } from "../button";

export function OpenBugReportFormButton() {
  const { openDialog } = useBugReport();
  return (
    <Button
      variant="link"
      className="!-mx-2 !px-2 font-light"
      onClick={openDialog}
      normalCase
    >
      Zgłoś błąd
    </Button>
  );
}
