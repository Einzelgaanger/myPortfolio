import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Data, AI & Innovation Consultant (Part-time)",
    company: "ProDG Studios",
    period: "April 2025 - Present",
    description: [
      "Architected and built the Bank of Ghana FX & Remittance Transparency Dashboard—regulatory supervisory demo for central-bank visibility into FX and remittance flows (React, TypeScript, Vite, shadcn/ui, Recharts, jsPDF).",
      "Built Receivables Securitisation Origination (RSO) platform—TReDS-inspired trade receivables discounting for Kenya's KES 500B+ pending bills; full-stack multi-portal app with blockchain settlement layer (Supabase + React/TypeScript).",
      "Architected VGG Holdings Portal, enterprise multi-company management platform with AI-powered assistant, role-based access, real-time analytics, API integration hub, and workflow automation (React, TypeScript, Supabase).",
      "Conducted comprehensive Microsoft 365 productivity analysis for enterprise client (meeting attendance, email metrics, departmental performance); delivered actionable insights on productivity bottlenecks and collaboration opportunities.",
      "Architected VGG 360° Performance Review dashboard—Excel-based 360° appraisal ingestion, manager leaderboards, competency radar, AI chat assistant over full dataset; export to PDF/Excel (React, TypeScript, Vite, Tailwind, shadcn/ui, Supabase).",
      "Led strategic proposal drafting for high-value clients including Safaricom telemedicine initiatives across Helium Health ecosystem; collaborated with C-suite in cross-company strategy meetings.",
      "Authored comprehensive litepaper for stablecoin client (tokenomics, market positioning, competitive landscape); designed gold-backed stablecoin framework with full white paper; prepared remittance framework proposals for blockchain clients.",
      "Delivered data-driven market research and feasibility studies supporting client strategic decision-making."
    ]
  },
  {
    role: "Full-Stack Developer & Data Consultant (Part-time)",
    company: "Collaborative Frontier Finance (CFF)",
    period: "June 2025 - Present",
    description: [
      "Built Fund Manager Portal for ESCP Network managing 260+ fund manager profiles across 4 years of survey data (2021–2024).",
      "Engineered full-stack app with automated application workflow, multi-year survey platform with version control, real-time WhatsApp-style analytics, searchable network directory with advanced filtering, role-based access, and blog/CMS.",
      "Implemented real-time data sync using Supabase (PostgreSQL + Realtime + Storage) with React and TypeScript.",
      "Developed version 2 of internal database management tool; created fund manager portfolio system and forum for community engagement.",
      "Draft strategic proposals and research reports leveraging data analytics; manage website updates and technical infrastructure."
    ]
  },
  {
    role: "Co-Founder & Business Development Lead",
    company: "Astarus AI",
    period: "October 2025 - Present",
    description: [
      "Co-founding AI startup building GPT2xLUT—continuous learning language model combining GPT-2 with dynamic Lookup Table augmentation for real-time learning without full retraining.",
      "Leading VC outreach, fundraising strategy, and investor relations for early-stage funding rounds.",
      "Conducting market research, competitive analysis, strategic positioning; identifying high-value use cases and go-to-market strategy.",
      "Developed full-stack implementation with API, frontend, database, user authentication, multi-tenant infrastructure, and production deployment."
    ]
  },
  {
    role: "Founder & Program Lead",
    company: "Santa's Heart Foundation",
    period: "July 2025 - Present",
    description: [
      "Founded youth-focused NGO providing free programs in financial literacy, creative thinking, AI awareness, and mental health support.",
      "Reached 50+ beneficiaries with clothing, food, shoes, and educational materials for underserved youth and street children.",
      "Led hands-on workshops and mentorship for ages 5–25; building sustainable programs for confident, tech-savvy, emotionally intelligent future leaders.",
      "Established social media presence: Instagram @santasheartfoundation."
    ]
  },
  {
    role: "Junior Data Analyst (Part-time, Pro Bono)",
    company: "Algum Africa Capital",
    period: "June 2025 - August 2025",
    description: [
      "Led structured data collection and organization for business intelligence.",
      "Built multiple regression models forecasting LPG demand in Mozambique using objective scoring and statistical weightings.",
      "Developed custom secure database system; applied econometric modeling to support investment decision-making."
    ]
  },
  {
    role: "Web Platform Developer",
    company: "SecureAid",
    period: "May 2025",
    description: [
      "Prototyped digital solution mitigating corruption in aid fund disbursements using blockchain transparency principles.",
      "Deployed live platform: secureaid.online"
    ]
  },
  {
    role: "Algorithm Developer",
    company: "DealFuze (UK VC)",
    period: "April 2025 - May 2025",
    description: [
      "Developed intelligent matching algorithm connecting investors with founders based on aligned investment goals and readiness metrics.",
      "Worked under mentorship of Noella Spitz, Senior Developer, gaining advanced algorithm design experience."
    ]
  },
  {
    role: "Financial Consultant and Motivational Speaker",
    company: "Growth to Mathare City Movement",
    period: "March 2024 - Present",
    description: [
      "Delivered financial literacy workshops empowering community members with practical money management skills.",
      "Conducted motivational speeches inspiring youth development and entrepreneurship."
    ]
  },
  {
    role: "Mentee of Dr. Karanja Gacuca",
    company: "Wall Street Data Analyst Coaching",
    period: "February 2025 - March 2025",
    description: [
      "Handpicked for exclusive one-on-one mentorship based on exemplary analytical reporting.",
      "Developed advanced analytics frameworks, decision-making methodologies, and executive presentation skills."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Enkaare",
    period: "February 2025 - March 2025",
    description: [
      "Developed talent matching algorithms optimizing recruitment efficiency.",
      "Created data-driven marketing strategy through comprehensive market research and competitive analysis."
    ]
  },
  {
    role: "Data Analyst (Short-Term Consulting)",
    company: "USAID | ACDI/VOCA | RLA",
    period: "January 2025 - February 2025",
    description: [
      "Cleaned and structured large humanitarian datasets supporting Russia–Ukraine conflict analysis.",
      "Conducted research and exploratory analysis informing UN economic recovery strategies.",
      "Developed presentation materials for internal briefings and external stakeholder communications; completed consulting-style case on data-driven use cases for development finance institutions."
    ]
  },
  {
    role: "Crypto Economics Intern",
    company: "Black Panther TKN",
    period: "January 2025 - March 2025",
    description: [
      "Gained exposure to crypto project business operations and tokenomics design.",
      "Contributed mathematical modeling insights during strategic planning sessions."
    ]
  },
  {
    role: "Volunteer Research Note Taker",
    company: "MIT Kuo Sharper Currency Volatility Center",
    period: "2025",
    description: [
      "Documented detailed research discussions supporting currency volatility trend analysis."
    ]
  },
  {
    role: "Award-Winning Data Analyst",
    company: "iLab Africa",
    period: "October 2024 - November 2024",
    description: [
      "Delivered top-ranked analysis of Kenya food prices dataset, recognized for analytical depth and accuracy.",
      "Applied advanced statistical modeling, data visualization, R programming, and LaTeX documentation."
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical axis line */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2 -translate-y-4" />
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0 group"
          >
            {/* Data-point dot */}
            <div className="absolute left-0 md:left-[50%] top-0 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background z-10 transform md:-translate-x-1/2 mt-2 group-hover:bg-primary group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300" />

            <div className={`md:flex gap-12 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Date Side */}
              <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/40 text-primary text-sm font-mono font-medium border border-primary/20">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2">
                <div className="bg-card/60 border border-border/60 p-6 rounded-xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-bold font-display text-foreground mb-1 tracking-tight">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-mono text-sm font-medium mb-4">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
