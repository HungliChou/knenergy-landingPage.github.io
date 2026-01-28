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
            我們提供從評估、設計、施工到維運的完整太陽能與儲能解決方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                to={`/services/${service.id}`}
                key={service.id} 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-primary rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-bold text-sm mt-auto group-hover:gap-2 transition-all">
                    了解更多 <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border-l-8 border-secondary flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">想了解屋頂能創造多少收益？</h3>
                <p className="text-gray-600">
                    無論是出租屋頂賺取租金，還是自建電廠售電，我們都有專人為您提供免費的財務試算與諮詢。
                </p>
            </div>
            <Link to="/contact" className="px-8 py-3 bg-secondary hover:bg-yellow-500 text-white font-bold rounded-lg shadow-md transition-colors whitespace-nowrap">
                立即諮詢方案
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;