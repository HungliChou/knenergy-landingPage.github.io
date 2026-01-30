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
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"
          alt="太陽能板與綠能"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <p className="text-secondary font-bold text-lg sm:text-xl mb-4 tracking-wider uppercase">
          太陽能 · 綠電 · 屋頂活用
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          你的屋頂，
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
            可以更值錢
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl font-light">
          不管是把屋頂租出去收租金，還是自己蓋電廠賣電給台電，我們從評估、設計、施工到後續維運都幫你搞定，你只要選一種方式開始就好。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a
            href="#services"
            onClick={scrollToServices}
            className="px-8 py-4 bg-primary hover:bg-emerald-500 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/30"
          >
            看我們做哪些服務
            <ArrowRight size={20} />
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center"
          >
            聯絡我們
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
