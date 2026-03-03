import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import {
  GraduationCap,
  Brain,
  Trophy,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/contactLinks";

// Import generated images for projects
import secureAidImg from '@assets/generated_images/secureaid_ngo_transparency_platform.png';
import transparentTrackImg from '@assets/generated_images/transparenttrack_blockchain_visualization.png';
import aiCommercializationImg from '@assets/generated_images/ai_commercialization_analytics_dashboard.png';
import gpt2Img from '@assets/generated_images/gpt2xlut_ai_architecture.png';
import foodPriceImg from '@assets/generated_images/food_price_econometrics_graph.png';
import studentPlatformImg from '@assets/generated_images/student_education_platform_ui.png';
import smeAppImg from '@assets/generated_images/sme_business_management_mobile_app.png';
import walletImg from '@assets/generated_images/mobile_money_wallet_concept.png';

export default function Home() {
  const skills = [
    "React", "TypeScript", "JavaScript", "Vite", "Python", "R", "Django", "React Native",
    "Machine Learning", "GPT-2", "AI/ML", "Supabase", "PostgreSQL", "SQL", "Firebase", "MongoDB",
    "Power BI", "Tableau", "Recharts", "D3.js", "Plotly", "Matplotlib",
    "Tailwind CSS", "shadcn/ui", "Blockchain", "Hyperledger", "Tokenomics",
    "REST APIs", "Render", "Vercel", "LaTeX", "Excel", "Pandas", "NumPy"
  ];

  const projects = [
    {
      title: "Bank of Ghana FX & Remittance Transparency Dashboard",
      description: "Regulatory supervisory demo for central-bank visibility into FX and remittance flows (post-trade, anonymized, aggregated). Delivers Governor-level stability cockpit, price-discovery and transparency layers, NAFEM-style market intelligence, corridor/channel mapping with commingling overlay, FX flows by segment, settlements & reconciliation tracking, and PDF regulatory reports. Built with React, TypeScript, Vite, shadcn/ui, Tailwind, Recharts, jsPDF; full working demo with structured mock data.",
      tags: ["React", "TypeScript", "Vite", "Recharts", "shadcn/ui", "jsPDF"],
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "RSO — Receivables Securitisation Origination",
      description: "TReDS-inspired trade receivables discounting system for Kenya's KES 500B+ pending bills. Full-stack multi-portal app: Supplier, SPV, MDA, Treasury, Admin. Bill-to-certification workflow, blockchain settlement layer, concept note PDF generator. Idea from SPV; brought to life as a working demo. Supabase + React/TypeScript.",
      tags: ["React", "TypeScript", "Supabase", "Blockchain", "TReDS"],
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "VGG Holdings Portal",
      description: "Enterprise multi-company management platform with AI-powered assistant providing role-specific insights through natural language queries. Features unified dashboard, granular role-based permissions, real-time performance analytics, API integration hub (SeamlessHR, etc.), and workflow automation. Built with React, TypeScript, Vite, Supabase, Tailwind CSS, and shadcn/ui. Live and optimizing operations.",
      tags: ["React", "TypeScript", "Supabase", "AI Assistant", "shadcn/ui"],
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Fund Manager Portal",
      description: "Comprehensive ESCP Network platform managing 260+ fund managers across 4-year survey history. Features automated application workflow, multi-year survey system with version control, real-time WhatsApp-style analytics, searchable member profiles with advanced filtering, secure role-based access, and community blog system. Full-stack: React + TypeScript + Supabase (PostgreSQL + Realtime).",
      tags: ["React", "TypeScript", "Supabase", "Realtime", "PostgreSQL"],
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "GPT2xLUT — Continuous Learning AI",
      description: "Innovative language model combining GPT-2 with dynamic Lookup Table augmentation enabling real-time learning without full retraining. Features persistent knowledge storage via Supabase, user-specific personalization, multi-tenant architecture, and production-ready infrastructure. Leading business development and VC fundraising.",
      tags: ["Python", "GPT-2", "Machine Learning", "Supabase"],
      link: "#",
      imageUrl: gpt2Img
    },
    {
      title: "AI Research Commercialization Assessment Tool",
      description: "Intelligent platform evaluating research commercialization potential using configurable metrics framework. Default and custom scoring criteria with user-defined weightages; generates analytics reports identifying strengths, weaknesses, and market readiness scores for technology transfer and research institutions.",
      tags: ["Python", "Machine Learning", "React", "Analytics"],
      link: "#",
      imageUrl: aiCommercializationImg
    },
    {
      title: "Bunifu Student Platform",
      description: "Comprehensive student platform consolidating study materials, job opportunities, event management, and career development tools. Features gamification and collaborative learning spaces. Ongoing—seeking funding.",
      tags: ["React", "Node.js", "MongoDB", "Gamification"],
      link: "#",
      imageUrl: studentPlatformImg
    },
    {
      title: "TengaPesa Platform",
      description: "Proposed M-PESA enhancement enabling purpose-specific mini-wallets with configurable lock mechanisms and withdrawal conditions for disciplined financial planning and savings goals.",
      tags: ["React", "Node.js", "M-Pesa API", "Firebase", "Supabase"],
      link: "https://tengapesa.onrender.com",
      imageUrl: walletImg
    },
    {
      title: "BizLens SME Management Platform",
      description: "Comprehensive React Native business management solution helping SME owners manage accounting, inventory, and operations more efficiently and accurately with mobile-first design.",
      tags: ["React Native", "Firebase", "Python", "ML"],
      link: "#",
      imageUrl: smeAppImg
    },
    {
      title: "MemVault Platform",
      description: "Integrated planning platform combining journaling, event scheduling, and photo storage. Fusion of journal, Google Calendar, and Google Photos with emphasis on privacy and usability.",
      tags: ["React", "Node.js", "MongoDB", "Firebase"],
      link: "https://memvault.onrender.com",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "SecureAid",
      description: "Digital solution mitigating corruption in NGO fund disbursements through transparent tracking and accountability mechanisms. Live at secureaid.online.",
      tags: ["Blockchain", "React", "Django", "Transparency"],
      link: "https://secureaid.online",
      imageUrl: secureAidImg
    },
    {
      title: "TransparentTrack NGO System",
      description: "End-to-end blockchain solution ensuring transparent fund disbursement for NGOs. Implemented with Django backend, React frontend, and Hyperledger Fabric blockchain infrastructure.",
      tags: ["Django", "React", "Hyperledger", "Blockchain"],
      link: "#",
      imageUrl: transparentTrackImg
    },
    {
      title: "Kenyan Food Price Econometric Analysis",
      description: "Award-winning longitudinal study (2006–2024) developing econometric models identifying price volatility drivers. Applied ARIMA and VAR methodologies producing policy recommendations. Recognized as top analysis across all cohorts.",
      tags: ["R", "LaTeX", "ARIMA", "VAR", "Data Viz"],
      link: "/iLab.pdf",
      imageUrl: foodPriceImg
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />

      <Section id="about" title="About Me" background="subtle">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl" />
            <div className="relative bg-card/80 border border-border/60 p-8 rounded-xl overflow-hidden backdrop-blur-sm bg-grid-pattern-dense">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain className="w-32 h-32 text-primary" />
              </div>
              <span className="block w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
              <h3 className="text-2xl font-bold font-display mb-4 text-primary tracking-tight">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                I'm here to get exposure, build systems, and grow social enterprise so that young people see they can design and achieve as much as anyone else. I believe in learning from the best — through mentorship and real projects — and making the world a better place by multiplying great minds in the next generation of rising stars.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                That’s why I founded Santa’s Heart Foundation, work with youth in my community, and keep building tools and platforms that others can stand on. I want to duplicate what great mentors gave me: clarity, confidence, and a path to design the future.
              </p>
              
              <div className="mt-8 relative z-10">
                <Button asChild className="gap-2">
                  <a href="/Alfred-Mulinge-Resume.pdf" download target="_blank" rel="noreferrer">
                    <Download className="w-4 h-4" /> Download Full Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Education</h4>
                <p className="text-foreground font-medium">B.Sc. Statistics & Data Science</p>
                <p className="text-muted-foreground">Strathmore University (March 2024 – Sep 2025, paused)</p>
                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  <p>• Top-ranked analysis of National Treasury food prices dataset across first- and second-year cohorts</p>
                  <p>• Led Islamic banking customer acquisition research for Head of Data Science</p>
                  <p>• KCSE, Nairobi School (2020–2023); Mathematics Club Chairman; 7th nationwide 2023 Mathematics Olympiad; 4th Brookside Contest; National rep. East African Mathematics Olympiad (2024)</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Expertise</h4>
                <p className="text-muted-foreground">Data Science, Machine Learning, Full-Stack Development, AI & Innovation Consulting, Blockchain & Tokenomics, Productivity Analytics, Predictive Modeling, Strategic Research & Proposals</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-display">Achievements</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 7th place nationwide — 2023 Mathematics Olympiad</li>
                  <li>• National Representative — East African Mathematics Olympiad (2024)</li>
                  <li>• 4th place nationwide — 2023 Brookside National Mathematics Contest</li>
                  <li>• 6th place nationwide — 2022 Round 1 Mathematics Olympiad</li>
                  <li>• Olympiad Teacher Certification (CEMASTEA & University of Nairobi, Dec 2023); Huawei Data Analytics; Harvard-Standard Peer Counsellor (Nairobi School)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Professional Journey" subtitle="Career path and key roles">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" title="Featured Projects" background="subtle">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies behind the work">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} index={index} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>

  <div className="py-6 border-t border-border/60 text-center text-muted-foreground text-sm font-mono space-y-1">
    <p>&copy; {new Date().getFullYear()} Alfred Mulinge Maweu. All rights reserved.</p>
    <p className="text-xs opacity-70" title="If this number never changes after deploy, your host may be serving cached or old build.">
      Build: {(typeof __BUILD_ID__ !== "undefined" ? __BUILD_ID__ : "dev")}
    </p>
  </div>
    </div>
  );
}
