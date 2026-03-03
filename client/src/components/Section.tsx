import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "subtle";
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  className, 
  children,
  background = "default" 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 relative overflow-hidden",
        background === "subtle" ? "bg-secondary/20 bg-grid-pattern" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-6 relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
                {title}
                <span className="block bar-gradient w-24 md:w-32 mx-auto mt-4 rounded-full" />
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground font-mono tracking-tight">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
