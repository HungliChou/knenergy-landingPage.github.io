import React from 'react';
import { PROJECTS } from '../constants';
import { MapPin } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">工程實績</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-6 text-gray-600">
            遍布全台的成功案例，見證我們對品質的堅持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-4 rounded-full">
                    {project.capacity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    {project.title}
                </h3>
                <p className="text-sm text-gray-500 border-t pt-3 mt-3 border-gray-100">
                    {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">※ 更多實績案例歡迎聯繫我們索取。</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;