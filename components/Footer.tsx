import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../constants';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    // Special handling for About anchor link
    if (path === '/#about') {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
       // Ensure scroll triggers instantly for standard page navigation
       window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
                <div className="w-9 h-9 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}official_image/logo.png`}
                    alt={`${COMPANY_INFO.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-wide">{COMPANY_INFO.name}</span>
                    <span className="text-[0.6rem] tracking-widest text-gray-400">{COMPANY_INFO.englishName}</span>
                </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              創造清潔能源，領航綠色生活。<br />
              全方位能源整合方案，與您一起打造永續未來。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">快速連結</h4>
            <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                    <li key={link.name}>
                        <Link 
                            to={link.path === '/#about' ? '/' : link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className="text-gray-400 hover:text-secondary transition-colors text-sm block"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">服務項目</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                {SERVICES.map((service) => (
                    <li key={service.id}>
                        <Link 
                            to={`/services/${service.id}`}
                            className="text-gray-400 hover:text-secondary transition-colors block"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            {service.title}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

           {/* Contact Small */}
           <div>
            <h4 className="text-lg font-bold mb-4 text-white">聯絡資訊</h4>
            <div className="space-y-2 text-gray-400 text-sm">
                <p>電話: {COMPANY_INFO.phone}</p>
                <p>傳真: {COMPANY_INFO.fax}</p>
                <p>信箱: {COMPANY_INFO.email}</p>
                <p>地址: {COMPANY_INFO.address}</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs text-center md:text-left">
                &copy; {new Date().getFullYear()} {COMPANY_INFO.englishName} All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 md:mt-0">
                Designed for clean energy future.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;