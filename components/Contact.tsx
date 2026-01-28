import React from 'react';
import { Phone, Mail, MapPin, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
             <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft size={16} className="mr-2" /> 回首頁
             </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">聯絡我們</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
            <p className="text-gray-600 mb-10 text-lg">
                有屋頂出租、自建電廠或維運需求？<br/>
                歡迎填寫表單或直接來電，我們將指派專人為您服務。
            </p>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">電話</h4>
                        <p className="text-gray-600 text-lg">{COMPANY_INFO.phone}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-yellow-50 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Printer size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">傳真</h4>
                        <p className="text-gray-600 text-lg">{COMPANY_INFO.fax}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-sky-50 text-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                        <p className="text-gray-600 text-lg">{COMPANY_INFO.email}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">公司地址</h4>
                        <p className="text-gray-600">{COMPANY_INFO.address}</p>
                        <p className="text-sm text-gray-400 mt-1">統編：{COMPANY_INFO.taxId}</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-t-8 border-primary">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">安裝諮詢表單</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">您的稱呼</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="王大明" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">性別</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                            <option>先生</option>
                            <option>小姐</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">聯絡電話</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="0912-345-678" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">建物地址 (縣市/區域)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="例如：新北市中和區" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">建物類型</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                        <option>工廠</option>
                        <option>畜(禽)舍</option>
                        <option>大樓/公寓</option>
                        <option>土地</option>
                        <option>其他</option>
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">諮詢需求</label>
                    <div className="space-y-3">
                         <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-100 rounded-lg hover:bg-gray-50 hover:border-primary/30 transition-all">
                            <input type="radio" name="type" className="mt-1.5 text-primary focus:ring-primary w-4 h-4" />
                            <div>
                                <span className="block text-gray-900 font-bold mb-1">屋頂出租(承租)</span>
                                <span className="block text-sm text-gray-500 leading-relaxed">
                                    業主提供屋頂或土地 (租期20年)，旭奇提供太陽光電發電系統設備、維護服務及租金，業主零出資 (專人提供租金試算)
                                </span>
                            </div>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-100 rounded-lg hover:bg-gray-50 hover:border-primary/30 transition-all">
                            <input type="radio" name="type" className="mt-1.5 text-primary focus:ring-primary w-4 h-4" />
                             <div>
                                <span className="block text-gray-900 font-bold mb-1">自建</span>
                                <span className="block text-sm text-gray-500 leading-relaxed">
                                    業主出資設置電廠，旭奇負責建置太陽光電發電系統設備、維護服務
                                </span>
                            </div>
                        </label>
                    </div>
                </div>

                <button className="w-full bg-primary hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4">
                    送出諮詢
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;