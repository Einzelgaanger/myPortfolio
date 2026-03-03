import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/myprofile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background: grid + gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-background bg-grid-pattern" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] opacity-60" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] opacity-40" />
      {/* Subtle axis lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-primary/10 z-0 hidden lg:block" />
      <div className="absolute right-[12%] top-0 bottom-0 w-px bg-primary/10 z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-foreground/90">Available for projects</span>
              <span className="text-primary/70">·</span>
              <span className="text-primary">σ² → 0</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
              Hi, I'm <span className="text-gradient-primary">Alfred Mulinge Maweu</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 font-mono tracking-tight">
              Data Analyst <span className="text-primary/70">|</span> AI & Innovation Consultant <span className="text-primary/70">|</span> Full-Stack Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Innovative data analyst, AI consultant, and full-stack developer with extensive experience building enterprise-grade applications and delivering data-driven strategic insights. Specialized in productivity analytics, AI-powered platforms, blockchain solutions, and quantitative research across fintech, blockchain, and development sectors. Proven track record architecting scalable systems, conducting advanced statistical modeling, and translating complex data into actionable business intelligence. Combines technical excellence in React, TypeScript, Python, and R with strategic thinking to drive measurable business impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 text-foreground rounded-full px-8 h-12 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Profile Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Data-viz rings */}
              <div className="absolute inset-0 border border-primary/25 rounded-full animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-6 border border-dashed border-primary/15 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-primary/10 rounded-full" />
              
              {/* Profile Image Container - REPLACE SRC WITH YOUR IMAGE */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20 group">
                <img 
                  src={portraitImg} 
                  alt="Alfred Mulinge Maweu" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating data-science pills */}
              <FloatingCard icon={<Database className="text-primary" />} label="Data Science" className="top-0 left-0 -translate-x-1/4 translate-y-1/2" delay={0.4} />
              <FloatingCard icon={<Code className="text-accent" />} label="Full Stack" className="bottom-10 right-8 translate-x-0" delay={0.5} />
              <FloatingCard icon={<BarChart3 className="text-violet-400" />} label="AI & Stats" className="top-1/4 right-[-20px]" delay={0.6} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, label, className, delay }: { icon: React.ReactNode, label: string, className?: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute bg-card/90 backdrop-blur-xl border border-primary/20 px-4 py-3 rounded-xl shadow-xl shadow-primary/5 flex items-center gap-3 ${className}`}
    >
      <div className="p-2 bg-background/60 rounded-lg [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </div>
      <span className="font-mono font-semibold text-sm tracking-tight">{label}</span>
    </motion.div>
  );
}
