import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("min-h-screen py-20 px-6 max-w-7xl mx-auto relative", className)}
    >
      {children}
    </motion.section>
  );
}
