import React from 'react';
import { ExternalLink, Handshake, CheckCircle2 } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-dark text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">戰略合作夥伴</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-left">
                    <div className="inline-flex items-center gap-2 text-secondary mb-4 font-bold tracking-wider uppercase text-sm">
                        <Handshake size={18} />
                        Strategic Partnership
                    </div>
                    <h3 className="text-3xl font-bold mb-6">旭奇 X 富威電力</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        旭奇為2024年售電業第一名的上市公司 - <strong className="text-white">富威電力（正崴集團）</strong>戰略合作夥伴。
                        富威電力對本公司持有之太陽能案場提供保證收購最低 <span className="text-secondary font-bold">90％</span> 發電總度數。
                    </p>
                    <ul className="space-y-4 mb-10 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span><strong>富威電力</strong> 作為綠電交易平台，提供再生能源電力（綠電）交易服務，並協助客戶進行綠電轉供、憑證申請及用電匹配優化分析。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span>富威電力是台灣首批取得民間售電執照的綠電交易平台之一。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span>更是 <strong className="text-white">NVIDIA 在台灣的綠電供應商</strong>。</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span>採用企業電力購買協議 (CPPA) 模式，成功實現能源轉型並獲得顯著經濟效益。</span>
                        </li>
                    </ul>
                    
                    <div className="bg-white/10 p-8 rounded-xl border-l-4 border-secondary">
                        <h4 className="font-bold text-white text-xl mb-4">什麼是 CPPA (企業電力購買協議)?</h4>
                        <ul className="space-y-3 text-gray-300">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span><strong>鎖定價格與預算穩定：</strong>鎖定長期的電力採購價格，不受未來市場電價波動的影響，有助於成本控制與預算規劃。</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span><strong>實現永續目標 (ESG)：</strong>CPPA 可幫助企業實現碳中和、 RE100（百分之百使用再生能源）等永續發展目標，並獲得再生能源憑證（如台灣的 T-REC）。</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span><strong>支持綠能發展：</strong>透過簽訂長期購電合約，企業為再生能源專案提供了穩定的收入來源與保障，有助於新的綠色能源項目開發。</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                                <span>許多科技巨頭（如台積電、NVIDIA）皆透過 CPPA 採購大量綠電。</span>
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