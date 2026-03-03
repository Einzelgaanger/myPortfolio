import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, link, github, imageUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card/80 border border-border hover:border-primary/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full backdrop-blur-sm"
    >
      {/* Trend-line accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      {/* Project Image Header */}
      <div className="h-48 w-full relative overflow-hidden bg-secondary/30">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
            <Folder className="w-12 h-12 text-primary/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-white hover:bg-primary transition-colors shadow-lg">
              <Github className="w-4 h-4" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-white hover:bg-primary transition-colors shadow-lg">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow h-full">
        <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-1 tracking-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-4 font-sans">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 4).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors text-xs font-mono"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="secondary" className="bg-secondary/30 text-xs font-mono">+{tags.length - 4}</Badge>
          )}
        </div>
      </div>
      
      {/* Bottom bar-chart style line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
    </motion.div>
  );
}
