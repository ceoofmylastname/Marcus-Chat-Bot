
import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, BotIcon, GoHighLevelIcon, DashboardIcon } from './icons';

const HowItWorksSection: React.FC = () => {
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };
    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
    };
  
  return (
    <section className="py-20 sm:py-32 px-4 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Simple, Powerful, <span className="gradient-text">Automated.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                From user query to business result, see the intelligent workflow in action.
            </p>
        </motion.div>

        <motion.div 
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
        >
            <svg viewBox="0 0 400 100" className="w-full h-auto">
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
                    </linearGradient>
                </defs>

                {/* Lines */}
                <motion.path d="M50 50 H 125" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" variants={pathVariants} />
                <motion.path d="M175 50 H 225" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" variants={pathVariants} transition={{...pathVariants.visible.transition, delay: 0.5}}/>
                <motion.path d="M275 50 H 350" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" variants={pathVariants} transition={{...pathVariants.visible.transition, delay: 1}}/>
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 -mt-16 sm:-mt-20">
                {/* Step 1 */}
                <motion.div className="text-center" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                    <motion.div className="flex justify-center" variants={iconVariants}><UserIcon /></motion.div>
                    <motion.h3 className="mt-4 font-bold text-lg text-white" variants={textVariants}>User</motion.h3>
                    <motion.p className="text-sm text-gray-400" variants={textVariants}>Interacts via SMS, Web, etc.</motion.p>
                </motion.div>
                {/* Step 2 */}
                <motion.div className="text-center" variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } } }}>
                    <motion.div className="flex justify-center" variants={iconVariants}><BotIcon /></motion.div>
                    <motion.h3 className="mt-4 font-bold text-lg text-white" variants={textVariants}>OpenAI Brain</motion.h3>
                    <motion.p className="text-sm text-gray-400" variants={textVariants}>Understands, learns & responds.</motion.p>
                </motion.div>
                {/* Step 3 */}
                <motion.div className="text-center" variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 1 } } }}>
                    <motion.div className="flex justify-center" variants={iconVariants}><GoHighLevelIcon /></motion.div>
                    <motion.h3 className="mt-4 font-bold text-lg text-white" variants={textVariants}>GoHighLevel Body</motion.h3>
                    <motion.p className="text-sm text-gray-400" variants={textVariants}>Books, messages & updates CRM.</motion.p>
                </motion.div>
                {/* Step 4 */}
                <motion.div className="text-center" variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } } }}>
                    <motion.div className="flex justify-center" variants={iconVariants}><DashboardIcon /></motion.div>
                    <motion.h3 className="mt-4 font-bold text-lg text-white" variants={textVariants}>Results</motion.h3>
                    <motion.p className="text-sm text-gray-400" variants={textVariants}>Track leads & appointments.</motion.p>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

// This needs to be imported to be used.
import { AnimatePresence } from 'framer-motion';

export default HowItWorksSection;
