"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import type { ReactNode } from "react";

interface AnimatedSidebarProps {
  children: ReactNode;
}

export function AnimatedSidebar({ children }: AnimatedSidebarProps) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY + 25 && latest > 150) {
      setIsVisible(false);
    } else if (latest < lastScrollY - 50) {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
      style={{
        position: "fixed",
        right: 0,
        top: "33%",
        transform: "translateY(-50%)",
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
