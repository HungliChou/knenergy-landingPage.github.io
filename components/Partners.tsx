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

                            <p className="text-secondary font-semibold mb-2">領航業界的合作夥伴</p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                我們與 2024 年台灣售電量第一的上市公司——<strong className="text-white">富威電力（正崴集團）</strong> 達成深度合作。本案場發電量由富威電力全面收購，確保電力產出具備極高且穩定的去化管道。
                            </p>

                            <h4 className="font-bold text-white text-lg mb-2">一站式綠電整合服務</h4>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                富威電力作為全台領先的綠電交易平台，提供企業從綠電採購、電力轉供、憑證申請（T-REC）到用電分析的完整一條龍服務。富威不僅是台灣早期進入綠電市場的售電業者之一，更是 <strong className="text-white">NVIDIA 在台灣的指定綠電供應商</strong>。
                            </p>

                            <div className="bg-white/10 p-8 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-white text-xl mb-2">CPPA（企業購電合約）：國際大廠的標準配置</h4>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    目前包含 台積電、NVIDIA 在內的國際科技大廠，皆採用 CPPA（Corporate Power Purchase Agreement）模式長期採購綠電，以確保穩定的能源供應：
                                </p>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong className="text-white">避險與成本控管：</strong>簽署長期合約可提前鎖定購電價格，有效對抗未來電價波動風險，協助企業精確掌握長期營運預算。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong className="text-white">落實 ESG 與國際接軌：</strong>協助企業達成碳中和（Carbon Neutrality）目標並符合 RE100 規範，確保取得再生能源憑證，提升國際供應鏈競爭力。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <span><strong className="text-white">支持再生能源發展：</strong>長期購電協議能為綠電案場提供穩定的現金流與收益保障，是支持新能源案場開發與永續轉型的關鍵驅動力。</span>
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