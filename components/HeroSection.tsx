import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onScrollToHowItWorks: () => void;
  onScrollToDemo: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToHowItWorks, onScrollToDemo }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl leading-snug sm:text-5xl md:text-7xl font-black tracking-tighter"
        >
          Meet the AI That<br className="sm:hidden" /> <span className="gradient-text">Thinks Like You.</span>
          <br />
          <span className="text-lg sm:text-4xl md:text-6xl text-gray-400">Powered by OpenAI. Built for GoHighLevel.</span>
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400"
        >
          A chatbot that doesn’t just reply — it remembers, learns, books, and follows up like your best employee.
        </motion.p>
        <motion.div 
          variants={itemVariants} 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="sms:+17029358925?&body=DEMO"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button w-full sm:w-auto inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700"
          >
            Try The Demo
          </motion.a>
          <motion.button
            onClick={onScrollToHowItWorks}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-300 bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
          >
            See How It Works
          </motion.button>
        </motion.div>
        <motion.p variants={itemVariants} className="mt-4 text-sm text-gray-500">
          Text ‘DEMO’ to 702-935-8925
        </motion.p>
      </motion.div>
    </section>
  );
};

// This needs to be imported to be used, but since we are not bundling, we can assume it's globally available
// if we load it from a CDN. However, for a proper React project, it would be an import.
// I will keep it here to show how it should be. The real app will not work without this dependency.
import { AnimatePresence } from 'framer-motion'; 

export default HeroSection;