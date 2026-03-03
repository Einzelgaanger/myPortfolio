import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-100
  index: number;
}

export default function SkillBadge({ name, icon, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="relative group"
    >
      <div className="flex items-center gap-3 bg-secondary/40 border border-border/60 hover:border-primary/50 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-secondary/60 hover:shadow-md hover:shadow-primary/5 cursor-default font-mono text-sm">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="font-medium text-foreground tracking-tight">{name}</span>
      </div>
    </motion.div>
  );
}
