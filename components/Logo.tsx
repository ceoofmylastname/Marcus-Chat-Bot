import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img src="/image.png?v=1.2" alt="YENOM AI Logo" className="h-10 w-10 mr-2" />
      <span className="font-poppins text-2xl font-bold tracking-tighter text-white">
        Yenom<span className="font-semibold text-gray-400">AI</span>
      </span>
    </div>
  );
};

export default Logo;
