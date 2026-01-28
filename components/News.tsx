import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
             <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft size={16} className="mr-2" /> 回首頁
             </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">最新消息</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {NEWS_ITEMS.map((item) => (
                <div key={item.id} className="group flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:border-primary/30">
                    <div className="flex-shrink-0 flex flex-row md:flex-col items-center justify-center bg-gray-50 rounded-xl p-4 w-full md:w-40 h-auto md:h-40 text-gray-500 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Calendar size={32} className="mb-0 md:mb-2 mr-3 md:mr-0" />
                        <span className="font-bold text-2xl">{item.date.split('.')[1]}/{item.date.split('.')[2]}</span>
                        <span className="text-sm font-medium">{item.date.split('.')[0]}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default News;