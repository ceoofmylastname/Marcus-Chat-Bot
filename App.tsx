
import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import DemoSection from './components/DemoSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-blue-900/40 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[5%] left-[25%] w-[400px] h-[400px] bg-sky-900/40 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <main className="relative z-10">
        <HeroSection onScrollToHowItWorks={() => scrollTo(howItWorksRef)} onScrollToDemo={() => scrollTo(demoRef)} />
        <WhyDifferentSection />
        <div ref={howItWorksRef}>
          <HowItWorksSection />
        </div>
        <BenefitsSection />
        <div ref={demoRef}>
          <DemoSection />
        </div>
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
