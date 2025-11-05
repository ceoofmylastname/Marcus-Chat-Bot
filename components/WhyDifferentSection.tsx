
import React, { useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { BrainIcon, CalendarIcon, CrmIcon, MemoryIcon } from './icons';

const AnimatedCounter = ({ to }: { to: number }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>{displayValue}</span>;
};

const BarChart = () => {
  const bars = [
    { label: 'Response Accuracy', value: 92, gradient: 'from-blue-500 to-blue-400' },
    { label: 'Conversion', value: 78, gradient: 'from-purple-500 to-purple-400' },
    { label: 'Engagement', value: 85, gradient: 'from-cyan-500 to-cyan-400' },
  ];

  return (
    <div className="w-full mt-12 p-6 bg-slate-900/70 rounded-xl border border-slate-700 backdrop-blur-sm">
      <h4 className="text-lg font-bold text-center mb-8 text-white">Increased Performance</h4>
      
      <div className="flex justify-around items-start text-center gap-x-4 md:gap-x-8">
        {bars.map((bar, i) => (
          <div key={bar.label} className="w-1/3 flex flex-col items-center">
            
            {/* Bar Container - This has a fixed height, which is crucial */}
            <div className="w-full h-40 bg-gray-800/50 rounded-t-md overflow-hidden flex flex-col justify-end">
              <motion.div
                className={`w-full bg-gradient-to-t ${bar.gradient}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${bar.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, type: "spring", stiffness: 50, damping: 15 }}
                viewport={{ once: true }}
              />
            </div>

             {/* Percentage Counter */}
            <p className="text-white font-bold text-xl mt-3">
              <AnimatedCounter to={bar.value} />%
            </p>
            
            {/* Label */}
            <p className="text-sm text-gray-400 mt-1" aria-label={`${bar.label}: ${bar.value} percent`}>
              {bar.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-blue-400">{icon}</div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const WhyDifferentSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            A Quantum Leap Beyond <span className="gradient-text">Traditional Bots</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Stop frustrating customers. Start building relationships with an AI that understands context, remembers interactions, and acts autonomously.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="p-6 md:p-8 border border-red-500/30 bg-gray-900/30 rounded-2xl relative"
          >
            <div className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-red-400 bg-red-900/50 rounded-full">THEN</div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">Traditional Bots</h3>
            <ul className="space-y-3 text-gray-400 list-disc list-inside">
              <li>Follows rigid, pre-written scripts.</li>
              <li>Forgets users after one conversation.</li>
              <li>Can't handle unexpected questions.</li>
              <li>Requires manual updates and programming.</li>
              <li>Acts as a simple, disconnected tool.</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="p-6 md:p-8 border border-blue-500/30 bg-gray-900/30 rounded-2xl relative"
          >
            <div className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-blue-300 bg-blue-900/50 rounded-full">NOW</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">AI-Powered Assistants</h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Engages in natural, dynamic conversations.</li>
              <li>Remembers past interactions for context.</li>
              <li>Learns and adapts to new information.</li>
              <li>Integrates with your CRM to take action.</li>
              <li>Acts as an intelligent team member.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
            className="mt-20 grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
             <h3 className="text-3xl font-bold mb-6 text-white">Fueled by intelligence.</h3>
             <div className="space-y-6">
                <FeatureCard icon={<BrainIcon />} title="Learning & Adapting" description="Continuously learns from your website, documents, and conversations." />
                <FeatureCard icon={<MemoryIcon />} title="Persistent Memory" description="Maintains context across conversations, remembering user preferences and history." />
                <FeatureCard icon={<CalendarIcon />} title="Autonomous Scheduling" description="Books appointments directly into your calendar without human intervention." />
                <FeatureCard icon={<CrmIcon />} title="Deep CRM Integration" description="Updates contacts, adds notes, and triggers workflows in GoHighLevel automatically." />
             </div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <BarChart />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// This needs to be imported to be used.
import { AnimatePresence } from 'framer-motion';

export default WhyDifferentSection;
