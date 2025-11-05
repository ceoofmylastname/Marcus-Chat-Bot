import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center text-gray-500">
        <div className="mb-4">
          <Logo />
        </div>
        <p>&copy; {new Date().getFullYear()} YENOM AI. All Rights Reserved.</p>
        <p className="text-sm mt-2">Brains by OpenAI. Body by GoHighLevel.</p>
      </div>
    </footer>
  );
};

export default Footer;
