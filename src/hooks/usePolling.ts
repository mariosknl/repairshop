"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function usePolling(searchParams: string | null, ms: number = 60000) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval running");
      if (!searchParams) {
        console.log("refreshing data");
        router.refresh();
      }
    }, ms);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, ms]);
}
