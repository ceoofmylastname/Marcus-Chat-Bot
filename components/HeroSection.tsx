
import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onScrollToHowItWorks: () => void;
  onScrollToDemo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToHowItWorks, onScrollToDemo }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight">
          Meet the AI That <span className="gradient-text">Thinks Like You.</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-6xl text-gray-400">Powered by OpenAI. Built for GoHighLevel.</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400">
          A chatbot that doesn’t just reply — it remembers, learns, books, and follows up like your best employee.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="sms:+17029358925?&body=DEMO"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700"
          >
            Try The Demo
          </motion.a>
          <motion.button
            onClick={onScrollToHowItWorks}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold text-gray-300 bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
          >
            See How It Works
          </motion.button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Text ‘DEMO’ to 702-935-8925
        </p>
      </motion.div>
    </section>
  );
};

// This needs to be imported to be used, but since we are not bundling, we can assume it's globally available
// if we load it from a CDN. However, for a proper React project, it would be an import.
// I will keep it here to show how it should be. The real app will not work without this dependency.
import { AnimatePresence } from 'framer-motion'; 

export default HeroSection;
