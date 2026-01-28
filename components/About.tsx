import React from 'react';
import { Target, Leaf, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full -z-10"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
             <img 
                src="https://picsum.photos/id/1059/800/600" 
                alt="旭奇能源團隊" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
             />
             <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary hidden md:block max-w-xs">
                <p className="font-bold text-gray-800 text-lg">致力於推動綠色企業品牌</p>
                <p className="text-gray-500 text-sm mt-1">創造綠色價值服務，落實環保企業文化。</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                關於旭奇
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              專業的一站式服務<br />
              <span className="text-primary">引領能源轉型</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              歡迎探索旭奇能源專業的一站式服務，我們的業務範疇涵蓋發電、售電與儲能等多個領域，提供高效的能源解決方案！
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              為響應政府環保政策，善盡企業社會公民責任，持續不斷推動節能減碳，以環境永續發展為主軸。旭奇不僅是施工者，更是您長期的能源合作夥伴。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-primary">
                        <Target size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">永續發展</h3>
                    <p className="text-xs text-gray-500">響應環保政策</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-secondary">
                        <Leaf size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">節能減碳</h3>
                    <p className="text-xs text-gray-500">環境保護責任</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-accent">
                        <HeartHandshake size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">專業服務</h3>
                    <p className="text-xs text-gray-500">全方位整合</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;