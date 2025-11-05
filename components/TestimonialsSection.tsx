
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Our chatbot increased booked appointments by 43%. It's like having a sales development rep working 24/7.",
    name: "John Doe",
    company: "Real Estate Pro"
  },
  {
    quote: "This feels like a real assistant, not a script. The contextual memory is a game-changer for our support.",
    name: "Jane Smith",
    company: "SaaS Solutions"
  },
  {
    quote: "Seamless setup — the AI learned from our website and documents in seconds. We were live in less than a day.",
    name: "Alex Johnson",
    company: "E-commerce Hub"
  },
];

const TestimonialsSection: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [index]);

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-12">
            Trusted by <span className="gradient-text">Businesses Like Yours</span>
        </motion.h2>

        <div className="h-48 relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 p-8 bg-gray-900/50 border border-gray-800 rounded-2xl"
                >
                    <p className="text-lg sm:text-xl italic text-gray-300">"{testimonials[index].quote}"</p>
                    <p className="mt-6 font-bold text-white">{testimonials[index].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[index].company}</p>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
