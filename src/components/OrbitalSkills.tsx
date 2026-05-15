import { motion } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Brain, 
  Layout, 
  Database, 
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const skills = [
  { icon: Code2, label: 'Python', color: 'text-blue-400' },
  { icon: Brain, label: 'TensorFlow', color: 'text-orange-400' },
  { icon: Cpu, label: 'PyTorch', color: 'text-red-400' },
  { icon: Layout, label: 'React', color: 'text-cyan-400' },
  { icon: Terminal, label: 'Next.js', color: 'text-white' },
  { icon: Database, label: 'Node.js', color: 'text-green-400' },
  { icon: Zap, label: 'LLMs', color: 'text-purple-400' },
  { icon: Layers, label: 'RAG', color: 'text-yellow-400' },
];

export default function OrbitalSkills() {
  return (
    <div className="relative w-[220%] h-[650px] flex items-center justify-start overflow-visible">
      {/* Robotic Hand - Positioned on the left - Static */}
      <div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none">
        <img 
          src="./hand.png" 
          alt="AI Hand" 
          className="w-[200%] h-[80%] object-contain filter drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        />
        
        {/* Holographic Glow under hand */}
        <div className="absolute bottom-20 w-40 h-10 bg-cyber-cyan/10 blur-3xl rounded-full scale-x-150" />
      </div>

      {/* Hovering Skills Cluster Centered over the Hand - Staggered Batches of 3 */}
      <div className="absolute inset-0 flex items-center justify-start md:w-1/2">
        <div className="relative w-full h-full">
          {skills.map((skill, index) => {
            const spacing = 180; 
            const column = (index % 3) - 1; 
            const xOffset = column * spacing;
            const yOffset = -120 - (column === 0 ? 60 : 10);
            
            const batchIndex = Math.floor(index / 3);
            const totalBatches = Math.ceil(skills.length / 3);
            const batchDuration = 4;
            const totalDuration = batchDuration * totalBatches;
            const startVisible = batchIndex * batchDuration;
            
            return (
              <motion.div
                key={skill.label}
                className="absolute z-20 left-1/2 top-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0, 1, 1, 0, 0],
                  scale: [0.7, 0.7, 1, 1, 0.7, 0.7],
                  x: xOffset,
                  y: [yOffset, yOffset - 25, yOffset],
                }}
                transition={{
                  opacity: { 
                    duration: totalDuration, 
                    repeat: Infinity, 
                    times: [
                      0, 
                      startVisible / totalDuration, 
                      (startVisible + 0.5) / totalDuration, 
                      (startVisible + 3.5) / totalDuration, 
                      (startVisible + 4) / totalDuration, 
                      1
                    ],
                    ease: "linear"
                  },
                  scale: { 
                    duration: totalDuration, 
                    repeat: Infinity, 
                    times: [
                      0, 
                      startVisible / totalDuration, 
                      (startVisible + 0.5) / totalDuration, 
                      (startVisible + 3.5) / totalDuration, 
                      (startVisible + 4) / totalDuration, 
                      1
                    ],
                    ease: "linear"
                  },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }
                }}
                style={{ translateX: '-50%', translateY: '-50%' }}
              >
                <div className={cn(
                  "p-4 rounded-2xl glass border-cyber-cyan/30 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.4)]",
                  "group hover:scale-110 transition-transform duration-300 cursor-pointer",
                  "flex flex-col items-center gap-3 min-w-[110px]"
                )}>
                  <skill.icon className={cn("w-7 h-7", skill.color)} />
                  <span className="text-[11px] uppercase font-black tech-mono text-white tracking-[0.1em] text-center">
                    {skill.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
