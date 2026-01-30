import React from 'react';
import { Handshake, CheckCircle2 } from 'lucide-react';

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">我們的合作夥伴</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 text-secondary mb-4 font-bold tracking-wider uppercase text-sm">
                                <Handshake size={18} />
                                售電合作
                            </div>
                            <h3 className="text-3xl font-bold mb-6">旭奇 × 富威電力</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                我們和 <strong className="text-white">富威電力（正崴集團）</strong> 合作，他們是 2024 年售電業第一名的上市公司。
                                我們手上的太陽能案場，富威保證收購至少 <span className="text-secondary font-bold">90%</span> 的發電量，等於發出來的電有穩定去處。
                            </p>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>富威是綠電交易平台，幫企業買綠電、做轉供、申請憑證、用電分析，一條龍服務。</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>台灣很早就能賣綠電給企業的售電業者之一，也是 <strong className="text-white">NVIDIA 在台灣的綠電供應商</strong>。</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>用 CPPA（企業購電合約）跟企業簽長約，很多科技大廠像台積電、NVIDIA 都這樣採購綠電。</span>
                                </li>
                            </ul>

                            <div className="bg-white/10 p-8 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-white text-xl mb-4">什麼是 CPPA（企業購電合約）？</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong>電價先鎖住：</strong>跟發電方簽長期合約，未來電價怎麼漲，你的採購價已經談好，預算好抓。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong>做 ESG、拿綠電憑證：</strong>企業要碳中和、RE100，用綠電就對了，還能拿 T-REC 等憑證。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong>支持綠能：</strong>長期合約等於給綠電案場穩定收入，有助新案場開發。</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;