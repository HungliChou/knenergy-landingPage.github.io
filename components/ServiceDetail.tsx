import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <div className="pt-32 text-center">找不到此服務頁面</div>;
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
             <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft size={16} className="mr-2" /> 回首頁
             </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gray-900 text-white p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                        <Icon size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{service.title}</h1>
                        <p className="text-gray-300 text-lg">{service.description}</p>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 lg:p-12">
                
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Text Content */}
                    <div className="flex-1 space-y-10">
                        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-secondary pl-4">
                            {service.detailTitle}
                        </h2>

                        {service.detailContent?.map((block, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                    <div className="w-2 h-6 bg-primary/20 rounded-full"></div>
                                    {block.subtitle}
                                </h3>
                                
                                {block.text && (
                                    <p className="text-gray-600 leading-8 whitespace-pre-line text-lg">
                                        {block.text}
                                    </p>
                                )}

                                {/* Image Block Render (New) */}
                                {block.image && (
                                    <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                        <img src={block.image} alt={block.subtitle} className="w-full h-auto object-cover" />
                                    </div>
                                )}

                                {/* Process Flow Chart Render */}
                                {block.list && block.type === 'process' && (
                                    <div className="mt-8 relative pb-2">
                                        {/* Vertical connecting line */}
                                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>
                                        
                                        <div className="space-y-6">
                                            {block.list.map((item, i) => {
                                                // Split title and description if colon exists
                                                const parts = item.includes("：") ? item.split("：") : [item];
                                                const title = parts[0];
                                                const desc = parts[1];

                                                return (
                                                    <div key={i} className="relative pl-14 group">
                                                        {/* Number Bubble */}
                                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md z-10 border-2 border-white ring-4 ring-gray-50 group-hover:ring-emerald-50 transition-all">
                                                            {i + 1}
                                                        </div>
                                                        
                                                        {/* Card Content */}
                                                        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all border-l-4 border-l-primary/10 hover:border-l-primary">
                                                            <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
                                                            {desc && (
                                                                <p className="text-gray-600 text-sm leading-relaxed mt-2 bg-gray-50 p-3 rounded-lg">
                                                                    {desc}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Standard List Render */}
                                {block.list && block.type !== 'process' && (
                                    <ul className="space-y-3 mt-4">
                                        {block.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-emerald-50/50 transition-colors">
                                                <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Sidebar / Image */}
                    <div className="lg:w-1/3 space-y-8">
                         {service.detailImage && (
                            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md sticky top-28">
                                <img src={service.detailImage} alt={service.title} className="w-full h-auto object-cover" />
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">需要專人諮詢？</h4>
                                    <p className="text-sm text-gray-600 mb-4">我們提供免費的案場評估與諮詢服務。</p>
                                    <Link to="/contact" className="block w-full bg-primary hover:bg-emerald-700 text-white text-center py-3 rounded-lg font-bold transition-all">
                                        立即聯絡我們
                                    </Link>
                                </div>
                            </div>
                         )}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;