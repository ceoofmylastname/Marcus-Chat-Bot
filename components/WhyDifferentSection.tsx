
import React from 'react';
import { motion } from 'framer-motion';
import { BrainIcon, CalendarIcon, CrmIcon, MemoryIcon } from './icons';

const BarChart = () => {
  const bars = [
    { label: 'Response Accuracy', value: 92, color: 'bg-blue-500' },
    { label: 'Conversion', value: 78, color: 'bg-purple-500' },
    { label: 'Engagement', value: 85, color: 'bg-sky-500' },
  ];
  return (
    <div className="w-full mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
      <h4 className="text-lg font-semibold text-center mb-4 text-white">Increased Performance</h4>
      <div className="flex justify-around items-end h-40 gap-4">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex flex-col items-center flex-1">
            <motion.div
              className={`w-full rounded-t-md ${bar.color}`}
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.value}%` }}
              transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <span className="text-white text-sm font-bold relative -top-6">{bar.value}%</span>
            </motion.div>
            <p className="text-xs text-center mt-2 text-gray-400">{bar.label}</p>
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
            className="p-8 border border-red-500/30 bg-gray-900/30 rounded-2xl relative"
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
            className="p-8 border border-blue-500/30 bg-gray-900/30 rounded-2xl relative"
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
