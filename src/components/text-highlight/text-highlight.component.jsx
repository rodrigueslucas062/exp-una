"use client";
import { cn } from "@/utils/ui/cn";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-purple-300/[0.6] to-purple-500/[0.5]`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};