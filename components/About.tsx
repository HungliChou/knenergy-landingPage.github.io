import React from 'react';
import { Target, Leaf, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative bg-transparent">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <img
              src={`${import.meta.env.BASE_URL}official_image/why-choose-us-white.png`}
              alt="把綠電這件事做好，從設計、施工到維運，一條龍搞定"
              className="rounded-2xl w-full object-contain h-[400px] lg:h-[500px] bg-transparent"
            />
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary hidden md:block max-w-xs">
              <p className="font-bold text-gray-800 text-lg">把綠電這件事做好</p>
              <p className="text-gray-500 text-sm mt-1">從設計、施工到維運，一條龍搞定。</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              為何選旭奇
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              從頭到尾都幫你顧好，
              <br />
              <span className="text-primary">不用自己到處問</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              不管是出租屋頂還是自建電廠，我們從前期評估、設備選型、施工到日後維護都包了，你只要決定要「收租金」還是「自己賣電」就好。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              裝好之後我們也會定期幫你看系統狀況、做清洗保養，有問題直接找我們。跟台電、政府那些申請流程，我們有經驗，會幫你跑好。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-emerald-50 p-3 rounded-full mb-3 text-primary">
                  <Target size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">一條龍服務</h3>
                <p className="text-xs text-gray-500">從設計到維運都我們來</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-amber-50 p-3 rounded-full mb-3 text-secondary">
                  <Leaf size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">維運不放手</h3>
                <p className="text-xs text-gray-500">裝完一樣幫你顧發電狀況</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-sky-50 p-3 rounded-full mb-3 text-accent">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">申請有經驗</h3>
                <p className="text-xs text-gray-500">台電、政府流程我們熟</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
