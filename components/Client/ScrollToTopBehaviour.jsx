"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollTopBehaviour() {
  const { pathname } = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This makes it instant
    });
  }, [pathname]);

  return <></>;
}
