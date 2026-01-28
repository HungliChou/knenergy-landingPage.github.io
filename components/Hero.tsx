import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1039/1920/1080"
          alt="Solar Panels Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <h2 className="text-secondary font-bold text-lg sm:text-xl mb-4 tracking-wider uppercase">
            全方位能源整合方案
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          創造清潔能源 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
            領航綠色生活
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl font-light">
          和您一起為下一代打造綠能家園，引領永續發展的未來。
          <br className="hidden sm:block" />
          從案場評估、設計規劃到工程建置與維運，提供專業的一站式服務。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a 
            href="#services" 
            onClick={scrollToServices}
            className="px-8 py-4 bg-primary hover:bg-emerald-500 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/30"
          >
            探索服務
            <ArrowRight size={20} />
          </a>
          <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center">
            聯絡我們
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;