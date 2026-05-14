import { motion } from 'motion/react';
import { 
  Home, 
  User, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Award
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Terminal, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'experience', icon: GraduationCap, label: 'Experience' },
  { id: 'certifications', icon: Award, label: 'Certficates' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-8 left-6 z-[60] flex items-center gap-4">
        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          src="/src/logo.png" 
          alt="K Logo" 
          className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
        />
      </div>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      <div className="glass-dark p-2 rounded-full flex flex-col gap-4 border-cyber-cyan/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 group relative",
              active === item.id 
                ? "bg-cyber-cyan text-black shadow-[0_0_15px_rgba(6,182,212,0.8)]" 
                : "text-slate-400 hover:text-cyber-cyan hover:bg-white/5"
            )}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-cyber-dark/80 px-3 py-1 rounded border border-cyber-cyan/50 text-xs font-display text-cyber-cyan">
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </nav>
  </>
);
}
