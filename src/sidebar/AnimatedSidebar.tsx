"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedSidebarProps {
  children: ReactNode;
}

const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSidebar;
