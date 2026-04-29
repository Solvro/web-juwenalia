"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export function OneSignalInit() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;

    if (appId === undefined) {
      console.error("OneSignal app ID is not defined, skipping initialization");
      return;
    }

    OneSignal.init({
      appId,
    }).catch((error: unknown) => {
      console.error("OneSignal initialization failed:", error);
    });
  }, []);

  return null;
}
