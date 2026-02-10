import React from 'react';
import { CheckCircle2, AlertTriangle, CloudSun, Building2, ShieldCheck, ArrowLeft, FileCheck, Zap, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const Construction: React.FC = () => {
    return (
        <section className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> 回首頁
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">建置須知與流程</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                {/* Requirements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-primary pl-4">案場評估關鍵條件</h3>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><CloudSun className="text-secondary" size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">1. 日照與方位 (Solar Irradiance)</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        <strong>最佳方位：</strong>台灣位於北半球，設置方位以「坐北朝南」效益最高。若為東西向，發電量約減少 10-15%。<br />
                                        <strong>遮蔭分析：</strong>需詳細檢視女兒牆、水塔、屋突、鄰近高樓或樹木是否造成遮蔭。陰影不僅影響發電，更可能導致模組產生熱斑而損壞。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Building2 className="text-primary" size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">2. 屋頂結構與現況 (Structure)</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        <strong>合法建物：</strong>建物須領有使用執照或保存登記，且屋頂無大面積違章增建。<br />
                                        <strong>屋況檢查：</strong>確認鐵皮是否嚴重鏽蝕？RC地坪是否龜裂漏水？若有上述狀況，建議先進行修繕或防水工程，再行安裝光電系統。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Zap className="text-yellow-500" size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">3. 電力饋線容量 (Feeder Capacity)</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        案場建置前，必須先向台電查詢當地饋線容量是否充足。若該區饋線已飽和（熱區），則暫時無法申請併聯售電，需等待台電擴充線路。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Ruler className="text-accent" size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">4. 安裝空間與維運動線</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        太陽能板不可鋪滿整個屋頂，必須預留適當的維修走道 (Catwalk) 與清洗動線，以利後續 20 年的定期清洗與設備保養作業。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">工程品質承諾：六大工作指標</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "增加結構強度 (H型鋼結構)",
                                "加強防水防風 (三層防水保護)",
                                "結構可靠度 (抗風壓 17 級5,400 Pa)",
                                "專業儀器檢測",
                                "現場監工品質保證",
                                "完工檢驗與保固"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="text-secondary flex-shrink-0" />
                                <p className="text-sm text-gray-600">
                                    <strong>重要提示：</strong> 申請設置太陽能光電，需要經過能源局及建管單位的核備。所有支架高度、設置位置皆需符合法規規範（如屋頂層棚架上緣最高4.5公尺）。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">專案執行流程</h3>
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block rounded-full"></div>

                    {[
                        { step: "01", title: "專業諮詢", desc: "需求訪談、租賃/自建模式確認、屋頂狀況初判。" },
                        { step: "02", title: "現勘測量", desc: "遮蔭分析、結構評估、尺寸丈量、最佳方位角規畫。" },
                        { step: "03", title: "設計簽約", desc: "3D圖面繪製、發電效益試算、工程合約簽訂。" },
                        { step: "04", title: "文件申請", desc: "台電併聯審查、能源局同意備案、建管處免雜照申請。" },
                        { step: "05", title: "工程建置", desc: "結構加強、模組安裝、機電工程、防水施作。" },
                        { step: "06", title: "掛表併聯", desc: "完工報驗、台電掛表送電、正式售電/自用。" },
                    ].map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 p-4">
                                <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${index % 2 === 0 ? 'border-primary md:text-left' : 'border-secondary md:text-right'} hover:shadow-lg transition-all`}>
                                    <span className="text-4xl font-bold text-gray-100 absolute -mt-10 opacity-50">{item.step}</span>
                                    <h4 className="text-xl font-bold text-gray-900 relative">{item.title}</h4>
                                    <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 bg-white border-4 border-primary rounded-full z-10 hidden md:block"></div>
                            <div className="w-full md:w-1/2"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Construction;