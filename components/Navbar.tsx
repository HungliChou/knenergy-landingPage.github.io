import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for navigation and mounting of Home component
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
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-white/10 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}official_image/logo.png`}
                alt={`${COMPANY_INFO.name} Logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-wide ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-gray-900 lg:text-white'}`}>
                    {COMPANY_INFO.name}
                </span>
                <span className={`text-[0.65rem] tracking-[0.2em] font-medium ${isScrolled || location.pathname !== '/' ? 'text-gray-500' : 'text-gray-700 lg:text-gray-100'}`}>
                    {COMPANY_INFO.englishName}
                </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {/* About Link */}
            <button 
              onClick={handleAboutClick}
              className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
            >
              關於旭奇
            </button>

            {/* Construction Link */}
            <Link 
              to="/construction" 
              className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
            >
              建置須知
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
                <button 
                    className={`flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
                >
                    服務項目 <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                        {SERVICES.map((service) => (
                            <Link 
                                key={service.id} 
                                to={`/services/${service.id}`}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-primary transition-colors"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Other Pages */}
            <Link to="/news" className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}>
                最新消息
            </Link>
            
             <Link
                to="/contact"
                className="bg-primary hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                聯絡我們
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-xl border-t border-gray-100 h-screen overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button
                onClick={handleAboutClick}
                className="w-full text-left block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-50"
              >
                關於旭奇
              </button>

              <Link
                to="/construction"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                建置須知
              </Link>
              
              {/* Mobile Services Accordion Button */}
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-50"
              >
                服務項目
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Services Dropdown Content */}
              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-gray-50 py-2">
                    {SERVICES.map((service) => (
                            <Link 
                                key={service.id} 
                                to={`/services/${service.id}`}
                                className="block px-6 py-2 text-sm text-gray-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {service.title}
                            </Link>
                        ))}
                  </div>
              </div>

             <Link
                to="/news"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                最新消息
              </Link>
             <Link
                to="/contact"
                className="block px-3 py-3 rounded-md text-base font-medium text-primary bg-emerald-50 mt-4"
                onClick={() => setIsOpen(false)}
              >
                聯絡我們
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;