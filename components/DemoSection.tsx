
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { from: 'user', text: 'DEMO' },
  { from: 'bot', text: 'Hey there! I’m your AI assistant. Want to see how I can work for your business?' },
  { from: 'user', text: 'Sure, my website is www.quantum-designs.com' },
  // FIX: Changed single quotes to double quotes to handle the unescaped apostrophe in "I've".
  { from: 'bot', text: "Great! I've just analyzed your site. It looks like you offer premium web design services. I can help qualify leads and book consultations directly into your calendar. Sound good?" },
  { from: 'user', text: 'Wow, that was fast. Yes!' },
];

const DemoSection: React.FC = () => {
    const [chat, setChat] = useState<typeof messages>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setChat(prevChat => {
                if(prevChat.length < messages.length) {
                    return [...prevChat, messages[prevChat.length]];
                }
                clearInterval(timer);
                return prevChat;
            });
        }, 2000);
        return () => clearInterval(timer);
    }, []);

  return (
    <section className="py-20 sm:py-32 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            See Your Future <span className="gradient-text">AI Assistant</span> in Action
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Just text <strong className="text-white">DEMO</strong> to <strong className="text-white">702-935-8925</strong> — our AI will respond instantly.
          </p>
          <p className="mt-4 p-3 sm:p-4 text-sm text-sky-300 bg-sky-900/30 border border-sky-800 rounded-lg">
            <strong>Pro Tip:</strong> Your demo bot can learn your business. Just send your website or a short description, and it will instantly adapt.
          </p>
          <motion.a
            href="sms:+17029358925?&body=DEMO"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button mt-8 inline-block px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700"
          >
            Text The Demo Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          {/* Phone Mockup */}
          <div className="w-full max-w-sm h-[500px] sm:h-[600px] bg-gray-900 border-8 border-gray-700 rounded-[40px] p-4 flex flex-col">
            <div className="w-20 h-4 bg-gray-700 rounded-full mx-auto mb-2"></div>
            <div className="flex-1 bg-black rounded-3xl p-4 overflow-y-auto flex flex-col-reverse">
                <div className="space-y-3">
                    <AnimatePresence>
                    {chat.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                                msg.from === 'user' ? 'bg-blue-600 text-white rounded-br-lg' : 'bg-gray-700 text-gray-200 rounded-bl-lg'
                            }`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default DemoSection;