import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">服務項目</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            從評估、設計、施工到維運，太陽能與儲能我們都做
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const bgImage = 'cardBgImage' in service ? (service as { cardBgImage?: string }).cardBgImage : undefined;
            return (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/30 group relative overflow-hidden flex flex-col h-full min-h-[280px] ring-2 ring-primary/10 hover:ring-primary/25 hover:border-primary/50"
              >
                {/* 背景圖 + 漸層讓文字清楚 */}
                {bgImage && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
                  </>
                )}
                {!bgImage && <div className="absolute inset-0 bg-gray-800" />}

                {/* 右上裝飾圓角 */}
                <div className="absolute top-0 right-0 w-28 h-28 border-2 border-primary/40 border-l-0 border-b-0 rounded-tr-xl rounded-bl-full -mr-6 -mt-6 transition-colors group-hover:border-primary/60" />

                <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg mb-6 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Icon size={28} />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white mb-3 drop-shadow-md">{service.title}</h3>
                <p className="relative z-10 text-gray-100 leading-relaxed mb-6 flex-grow drop-shadow-sm">
                  {service.description}
                </p>

                <div className="relative z-10 flex items-center text-emerald-200 font-bold text-sm mt-auto group-hover:gap-2 group-hover:text-white transition-all">
                  了解更多 <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border-l-8 border-secondary flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">屋頂能幫你賺多少？</h3>
            <p className="text-gray-600">
              出租屋頂收租金或自建賣電，我們都可以幫你免費試算，有專人跟你說明。
            </p>
          </div>
          <Link to="/contact" className="px-8 py-3 bg-secondary hover:bg-yellow-500 text-white font-bold rounded-lg shadow-md transition-colors whitespace-nowrap">
            免費諮詢
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;