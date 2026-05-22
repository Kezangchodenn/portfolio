
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  ArrowRight,
  User,
  Terminal,
  Brain,
  Layout,
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Zap
} from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import OrbitalSkills from './components/OrbitalSkills';
import { cn } from './lib/utils';

const projects = [
  {
    title: "Chatbot for Yangkor Company",
    role: "FullStack Developer & AI Engineer",
    description: "Developed an intelligent chatbot with human escalation, integrating LLMs, RAG, and sentiment analysis.",
    tags: ["LLMs", "RAG", "React", "Node.js"],
    image: "/chat.png",
    link: "https://www.figma.com/design/BxMklecowqbnhEkaUW7vla/human-escalation-chatbot?node-id=0-1&t=YUcYYEVbs0si8OO5-1",
    github: "#"
  },
  {
    title: "SmartSight AI - Lamtoen",
    role: "AI/ML Engineer & Frontend Developer",
    description: "AI navigation system for visually impaired users with real-time obstacle detection using YOLO and Dzongkha audio guidance.",
    tags: ["YOLO", "PyTorch", "React Native", "AI"],
    image: "/lam.png",
    link: "https://www.figma.com/design/4f7tShfZh9bn82DRIw2tya/SmartSight-AI?node-id=0-1&t=eUuJGGamrO8RLSPG-1",
    github: "#"
  },
  {
    title: "PMO Bhutan Website Redesign",
    role: "Project Leader & Fullstack Developer",
    description: "Led full-stack development focusing on UX, design, and functionality for the Prime Minister's Office of Bhutan.",
    tags: ["React", "UX Design", "Figma", "Tailwind"],
    image: "/pmo.jpg",
    link: "https://www.figma.com/design/vp3GiRa9ml0PzGa12DR665/pmo?node-id=316-824&t=MnUHC9dwRJe2eNJQ-1",
    github: "#"
  },
  {
    title: "AI Dermatology",
    role: "FullStack Developer & AI Engineer",
    description: "Facial scan AI model to detect skin conditions and provide personalized skincare recommendations.",
    tags: ["Computer Vision", "TensorFlow", "React", "Python"],
    image: "/ai.png",
    link: "https://www.figma.com/design/c0e1Em7eQo4vfChlKjrpie/Prj202?node-id=4-2&t=e9MRIMq4PbOZWMFM-1",
    github: "#"
  }
];

const experience = [
  {
    company: "Mount Visual, Bhutan",
    role: "AI Engineer",
    period: "March 2026 – Present",
    desc: "Developing and training machine learning models, optimizing AI solutions, and implementing them for real-world applications."
  },
  {
    company: "Food Computing Academy, Australia",
    role: "Intern – Food Computing & Digital Marketing",
    period: "December 2025 – Present",
    desc: "Analyzing food and microbiology-related data to generate insights. Managing social platforms and using data-driven strategies."
  },
  {
    company: "Basiox Controls, UK",
    role: "Intern – Application Engineering",
    period: "April 2025 – December 2025",
    desc: "Supporting design and development of AI smart control systems and HVAC solutions. Working on real-time data integration."
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-cyber-cyan selection:text-black">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan z-[100] origin-left" style={{ scaleX }} />

      <Navbar />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="cyber-grid absolute inset-0 opacity-20" />
        <div className="glow-bg-cyan -top-20 -left-20 animate-pulse" />
        <div className="glow-bg-purple top-1/2 -right-20 opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,1)_100%)]" />
      </div>

      <main className="relative z-10 lg:pl-24">
        {/* Hero Section */}
        <Section id="hero" className="flex flex-col items-center justify-center text-center gap-8 min-h-screen">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-cyber-cyan via-cyber-purple to-cyber-blue shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark relative">
                <img 
                  src="/kelz.png" 
                  alt="Kezang Choden" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyber-cyan/30 animate-ping -z-10" />
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-cyber-cyan uppercase tracking-[0.3em] font-mono text-sm md:text-base font-semibold tech-mono"
            >
              
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-white to-cyber-cyan bg-clip-text text-transparent px-4"
            >
              KEZANG CHODEN
            </motion.h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-slate-400 font-medium h-12">
              <TypeAnimation
                sequence={[
                  'AI Engineer',
                  2000,
                  'UX Designer',
                  2000,
                  'Data Scientist',
                  2000,
                  'Creative Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="neon-text-purple tech-mono"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed px-4"
            >
              Specializing in AI-driven solutions and human-centric design. 
              Bridging the gap between intelligent systems and seamless user experiences.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-cyber-cyan text-black font-display font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://youtu.be/MDdmc0Z7tuM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass border-cyber-cyan/30 text-cyber-cyan font-display font-bold rounded-full hover:bg-cyber-cyan/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              Video Resume <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </a>
            <button className="px-8 py-4 glass border-white/20 text-white font-display font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              Download CV <Download className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-6 mt-12"
          >
            <a href="https://www.linkedin.com/in/kezangchoden-kelz" target="_blank" className="text-slate-400 hover:text-cyber-cyan transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Kezangchodenn?tab=repositories" className="text-slate-400 hover:text-cyber-cyan transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:kchoden6624@gmail.com" className="text-slate-400 hover:text-cyber-cyan transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </Section>

        {/* About Section */}
        <Section id="about" className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold font-display">ABOUT ME</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan to-transparent" />
            </div>
            
            <div className="glass p-8 rounded-3xl border-white/5 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-32 h-32" />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                I am a dedicated AI Engineer and Data Science specialist currently in my final year at <span className="text-white font-semibold">Gyalpozhing College of Inofrmation Technology</span>. My mission is to architect intelligent systems that not only solve complex problems but also provide intuitive, human-centric experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                With expertise spanning from <span className="text-cyber-cyan font-bold">Deep Learning</span> to <span className="text-cyber-purple font-bold">Modern Web Architectures</span>, I bridge the gap between backend intelligence and frontend elegance.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "AI & Full-Stack Projects Developed", value: "10+" },
                  { label: "Certifications Earned", value: "6+" },
                  { label: "Leadership Contributions", value: "5+" },
                  { label: "Internships & Industry Experiences", value: "3+" },
                ].map((stat) => (
                  <div key={stat.label} className="glass p-4 rounded-2xl border-white/5 space-y-1">
                    <div className="text-2xl font-display font-bold text-cyber-cyan">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold tech-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative min-h-[400px] flex flex-col items-center justify-center">
            {/* Lightbulb Silhouette Soft Skills Visualization */}
           <p className="text-slate-400 font-semibold tracking-widest uppercase text-sm tech-mono mb-8">
  Soft Skills
</p>
            <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
              {[ {
      label: "Communication",
      color: "bg-[#FFB800]/50 border border-[#FFB800]/40",
      width: "w-64",
      radius: "rounded-t-[80px] rounded-b-lg",
      icon: Mail,
      delay: 0,
    },
    {
      label: "Leadership",
      color: "bg-[#E63946]/50 border border-[#E63946]/40",
      width: "w-80",
      radius: "rounded-2xl",
      icon: Trophy,
      delay: 0.4,
    },
    {
      label: "Problem Solving",
      color: "bg-[#9B51E0]/50 border border-[#9B51E0]/40",
      width: "w-76",
      radius: "rounded-2xl",
      icon: Brain,
      delay: 0.6,
    },
    {
      label: "Adaptability",
      color: "bg-[#2D9CDB]/50 border border-[#2D9CDB]/40",
      width: "w-64",
      radius: "rounded-xl",
      icon: Zap,
      delay: 0.7,
    },
    {
      label: "Collaboration",
      color: "bg-[#27AE60]/50 border border-[#27AE60]/40",
      width: "w-56",
      radius: "rounded-b-[30px]",
      icon: User,
      delay: 0.8,
    },
  ].map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skill.delay, duration: 0.8, ease: "backOut" }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)", zIndex: 50 }}
                  className={cn(
                    "relative h-20 md:h-24 flex items-center justify-center -mt-2 first:mt-0 border border-white/10 shadow-2xl cursor-pointer group transition-all duration-300",
                    skill.color,
                    skill.width,
                    skill.radius
                  )}
                >
                  <div className="flex items-center gap-3 px-4">
                    <skill.icon className="w-4 h-4 text-white/90" />
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-wider text-white tech-mono">
                      {skill.label}
                    </span>
                  </div>
                  
                  {/* Internal Glow */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}

              {/* Refined Lightbulb Base */}
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
                 className="flex flex-col items-center mt-2 w-full"
              >
                <div className="w-20 h-3 bg-slate-800/80 rounded-full border border-white/5 mb-1" />
                <div className="w-16 h-3 bg-slate-800/80 rounded-full border border-white/5 mb-1" />
                <div className="w-12 h-3 bg-slate-800/80 rounded-full border border-white/5 mb-2" />
                
                {/* Plug Head */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-xl border border-white/5 relative z-10 flex flex-col items-center justify-center gap-1">
                   {/* Prongs */}
                   <div className="flex gap-2 -mt-4">
                     <div className="w-1 h-3 bg-slate-700 rounded-full" />
                     <div className="w-1 h-3 bg-slate-700 rounded-full" />
                   </div>
                </div>
                {/* Wavy Wire */}
                <svg className="w-32 h-20 -mt-2 overflow-visible">
                  <path 
                    d="M 64 0 C 64 20, 100 20, 100 40 S 64 40, 64 60" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyber-purple/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyber-cyan/20 blur-3xl rounded-full" />
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="flex flex-col items-center max-w-7xl">
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight">Technical Skills</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyber-purple to-transparent" />
            </div>
            <p className="text-slate-500 tech-mono text-sm uppercase tracking-widest"></p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 w-full">
            <OrbitalSkills />
            
            <div className="space-y-6">
              <div className="glass p-8 rounded-[40px] border-white/5 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "AI/ML", items: ["LLMs/RAG", "NLP", "YOLO", "TensorFlow"], color: "text-cyber-purple" },
                    { title: "Frontend", items: ["React.js", "Tailwind", "HTML", "CSS"], color: "text-cyber-cyan" },
                    { title: "Design", items: ["Figma", "UX Research", "Prototyping",  "Wireframing", ], color: "text-white" },
                    { title: "Data & Analytics", items: ["Python", "Data Visualization", "Analytics", "SPSS"], color: "text-cyber-blue" },
                  ].map((cat) => (
                    <div key={cat.title} className="space-y-3">
                      <h4 className={cn("text-xs font-black uppercase tracking-[0.2em] font-display", cat.color)}>{cat.title}</h4>
                      <ul className="space-y-1">
                        {cat.items.map(item => (
                          <li key={item} className="text-slate-400 text-xs tech-mono flex items-center gap-2">
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-[40px] border-white/5 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 tech-mono">Core Performance</h4>
                <div className="space-y-6">
                  {[
                    { name: "Artificial Intelligence", level: 92, color: "bg-cyber-cyan" },
                    { name: "Frontend Development", level: 88, color: "bg-cyber-purple" },
                    { name: "Data & Analytics", level: 82, color: "bg-cyber-blue" },
                    { name: "UI/UX Design", level: 90, color: "bg-white" },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                        <span className="text-slate-300 font-bold">{skill.name}</span>
                        <span className="text-white">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                          className={cn("h-full rounded-full", skill.color)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display">Featured Projects</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative perspective-1000"
              >
                <motion.div 
                  whileHover={{ 
                    rotateX: 2,
                    rotateY: -2,
                    translateZ: 20,
                    transition: { duration: 0.3 }
                  }}
                  className="glass p-6 rounded-[32px] border-white/5 overflow-hidden transition-all duration-500 hover:neon-border-cyan"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-display font-bold group-hover:text-cyber-cyan transition-colors line-clamp-1">{project.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-cyber-purple py-1 px-2 bg-cyber-purple/10 rounded tech-mono">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && project.link !== "#" && (
                      <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-2 group-hover:border-cyber-cyan/30 transition-colors">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-xs font-black uppercase text-cyber-cyan hover:text-white tracking-widest tech-mono transition-colors"
                        >
                          <Layout className="w-3.5 h-3.5 text-cyber-cyan" />
                          See Design Canvas →
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display uppercase">Professional Timeline</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyber-purple via-transparent to-transparent mx-auto" />
            </div>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-16 space-y-12">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[calc(2rem + 1px)] md:-left-[calc(4rem + 1px)] w-4 h-4 bg-cyber-purple rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 top-0" />
                  
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4 hover:border-cyber-purple/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-cyber-purple">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-slate-300 font-semibold uppercase text-xs tracking-widest tech-mono">
                          <Briefcase className="w-3 h-3 text-cyber-cyan" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-cyber-cyan bg-cyber-cyan/10 px-4 py-1 rounded-full text-xs font-bold font-mono ring-1 ring-cyber-cyan/30">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-slate-400">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Education & Certifications Section */}
        <Section id="certifications" className="max-w-7xl">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-6xl font-bold font-display uppercase tracking-tight">Academic Journey</h2>
            <p className="text-slate-500 font-mono text-xs tracking-[0.4em] uppercase">Qualifications & Credentials</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3 pl-4">
                <GraduationCap className="w-6 h-6 text-cyber-cyan" />
                <h3 className="text-xl font-display uppercase tracking-widest text-cyber-cyan tech-mono">Education</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "Bachelor of Computer Science", 
                    issuer: "Gyalpozhing College of Information Technology", 
                    date: "2022 - 2026",
                    icon: GraduationCap
                  },
                  { 
                    title: "Higher Secondary Education (Class XI and XII)", 
                    issuer: "Jigme Sherubling Central School", 
                    date: "2021 - 2022",
                    icon: CheckCircle2,
                  }
                ].map((item) => (
                  <div key={item.title} className="glass p-6 rounded-3xl border-white/5 hover:neon-border-cyan transition-all group">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan ring-1 ring-cyber-cyan/30">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-bold text-lg group-hover:text-cyber-cyan transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold font-mono">{item.issuer}</p>
                        <p className="text-[10px] text-cyber-cyan mt-1 inline-block border border-cyber-cyan/20 px-2 py-0.5 rounded italic font-mono">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 pl-4">
                <Award className="w-6 h-6 text-cyber-purple" />
                <h3 className="text-xl font-display uppercase tracking-widest text-cyber-purple tech-mono">Certifications</h3>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Google UX Design Professional", issuer: "Google (Coursera)", date: "2026", link: "https://www.coursera.org/account/accomplishments/verify/ZN1H8HTR222N"},
                  { title: "AWS Cloud Foundations", issuer: "AWS Academy", date: "2024",  link: "https://www.credly.com/badges/4adbfc38-f2b1-47fb-b979-0eb13319e01e"},
                  { title: "Data Analysis with Python", issuer: "Google (Coursera)", date: "2026",  link: "https://www.coursera.org/account/accomplishments/verify/2YWM2DCYPBP9"  },
                ].map((cert) => (
                  <div key={cert.title} className="glass p-6 rounded-3xl border-white/5 hover:neon-border-purple transition-all group">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyber-purple/10 flex items-center justify-center text-cyber-purple ring-1 ring-cyber-purple/30">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-bold text-lg group-hover:text-cyber-purple transition-colors">{cert.title}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold font-mono">{cert.issuer}</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-[10px] text-cyber-purple border border-cyber-purple/20 px-2 py-0.5 rounded italic font-mono">{cert.date}</p>
                           <a 
                             href={cert.link} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="text-[10px] uppercase font-bold text-slate-500 hover:text-white transition-colors font-mono"
                           >
                             Verify Credential →
                           </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="pb-40">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tighter">Get In Touch</h2>
              <p className="text-slate-400 font-semibold tracking-widest uppercase text-sm tech-mono">Let’s Innovate Together</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="glass p-6 rounded-2xl border-white/5 space-y-2">
                    <p className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">Email</p>
                    <p className="text-xl font-bold">kchoden6624@gmail.com</p>
                  </div>
                  <div className="glass p-6 rounded-2xl border-white/5 space-y-2">
                    <p className="text-[10px] font-mono text-cyber-purple uppercase tracking-widest">Phone Number</p>
                    <p className="text-xl font-bold">+975 1745 0518</p>
                  </div>
                  <div className="glass p-6 rounded-2xl border-white/5 space-y-2">
                    <p className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest">Geographical Node</p>
                    <p className="text-xl font-bold">Thimphu, Bhutan</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/kezangchoden-kelz" target="_blank" className="flex-1 glass p-4 rounded-xl flex items-center justify-center gap-3 hover:neon-border-cyan transition-all font-mono font-bold text-[10px] uppercase tracking-widest">
                    <Linkedin className="w-5 h-5 text-cyber-cyan" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/Kezangchodenn?tab=repositories" className="flex-1 glass p-4 rounded-xl flex items-center justify-center gap-3 hover:neon-border-purple transition-all font-mono font-bold text-[10px] uppercase tracking-widest">
                    <Github className="w-5 h-5 text-cyber-purple" />
                    Github
                  </a>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 pl-2 font-bold underline underline-offset-4 decoration-cyber-cyan"></label>
                  <input 
                    type="text" 
                    placeholder="ENTER NAME"
                    className="w-full glass p-4 rounded-2xl focus:neon-border-cyan outline-none transition-all placeholder:text-slate-600 font-mono text-xs tracking-widest bg-transparent border border-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 pl-2 font-bold underline underline-offset-4 decoration-cyber-purple"></label>
                  <input 
                    type="email" 
                    placeholder="ENTER EMAIL"
                    className="w-full glass p-4 rounded-2xl focus:neon-border-purple outline-none transition-all placeholder:text-slate-600 font-mono text-xs tracking-widest bg-transparent border border-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 pl-2 font-bold underline underline-offset-4 decoration-cyber-blue"></label>
                  <textarea 
                    rows={4}
                    placeholder="ENTER YOUR MESSAGE"
                    className="w-full h-[200px] glass p-4 rounded-2xl focus:neon-border-blue outline-none transition-all placeholder:text-slate-600 font-mono text-xs tracking-widest resize-none bg-transparent border border-white/5"
                  />
                </div>
                <button className="w-full py-4 bg-cyber-cyan text-black font-mono font-black rounded-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide text-xs">
                  Execute Transmission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center flex flex-col gap-4">
          <p className="text-slate-500 text-[10px] font-mono tracking-[0.2em] uppercase">
            DESIGNED BY KEZANG CHODEN 🌷
          </p>
          <div className="text-[8px] text-slate-700 uppercase tracking-[0.3em]">
            © 2026 KEZANG CHODEN. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </main>
    </div>
  );
}
