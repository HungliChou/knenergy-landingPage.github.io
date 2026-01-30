import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap } from 'lucide-react';

const HomeOptions: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
          屋頂也能幫你賺錢，兩種方式任你選
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* 出租閒置屋頂 */}
          <Link
            to="/rent-roof"
            className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-10 border border-emerald-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch gap-6"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform pointer-events-none" />
            <div className="relative flex-1 min-w-0">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Home size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                出租閒置屋頂
              </h3>
              <p className="text-gray-600 mb-2">
                屋頂空著也是空著，租給我們蓋太陽能，你不用出半毛錢，我們來建、我們來維護。
              </p>
              <p className="text-primary font-semibold">
                免費遮陽棚 ＋ 每月穩定租金收入
              </p>
              <span className="inline-flex items-center mt-6 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                了解房東出租流程 →
              </span>
            </div>
            <div className="relative flex-shrink-0 w-full sm:w-48 lg:w-56 flex items-center justify-end sm:mt-12">
              <img
                src={`${import.meta.env.BASE_URL}official_image/rent-roof-isometric.png`}
                alt="出租閒置屋頂－免費遮陽、穩定租金"
                className="w-full max-w-[220px] sm:max-w-none h-auto object-contain"
              />
            </div>
          </Link>

          {/* 自建電廠投資 */}
          <Link
            to="/construction"
            className="group relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 lg:p-10 border border-amber-100 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch gap-6"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform pointer-events-none" />
            <div className="relative flex-1 min-w-0">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/20 text-amber-700 rounded-xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                自建電廠投資
              </h3>
              <p className="text-gray-600 mb-2">
                自己出資蓋太陽能，電賣給台電，長期穩定收益；或自發自用，省電費又做綠電。
              </p>
              <p className="text-amber-800 font-semibold">
                賣電給台電賺收益，或自用省電費
              </p>
              <span className="inline-flex items-center mt-6 text-amber-700 font-bold text-sm group-hover:gap-2 transition-all">
                了解自費建置流程 →
              </span>
            </div>
            <div className="relative flex-shrink-0 w-full sm:w-48 lg:w-56 flex items-center justify-end">
              <img
                src={`${import.meta.env.BASE_URL}official_image/why-choose-us-isometric.png`}
                alt="自建電廠投資－綠能與永續"
                className="w-full max-w-[220px] sm:max-w-none h-auto object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeOptions;
