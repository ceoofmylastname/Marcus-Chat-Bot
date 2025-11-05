
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AI Chatbot Solutions. All Rights Reserved.</p>
        <p className="text-sm mt-2">Brains by OpenAI. Body by GoHighLevel.</p>
      </div>
    </footer>
  );
};

export default Footer;
