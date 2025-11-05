
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto z-10 relative"
      >
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight">
          Your AI Assistant Is <span className="gradient-text">Ready to Work.</span> Are You?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Transform your business with an AI that's more than a tool—it's a team member.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#" // Should link to a contact/sales page
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button w-full sm:w-auto inline-block px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700"
          >
            Get Your Custom Chatbot
          </motion.a>
          <motion.a
            href="sms:+17029358925?&body=DEMO"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-gray-300 bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
          >
            Text DEMO to 702-935-8925
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
// This needs to be imported to be used.
import { AnimatePresence } from 'framer-motion';

export default FinalCTASection;
