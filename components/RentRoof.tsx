import React from 'react';
import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  CloudSun,
  Droplets,
  FileText,
  Landmark,
  CheckCircle2,
  Snowflake,
  Umbrella,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const advantages = [
  { icon: Wallet, title: '零成本開始', desc: '不用自己出錢，屋頂租給我們蓋、我們維護，你只負責收租金。' },
  { icon: Banknote, title: '穩定收入', desc: '長期合約，每月固定租金入帳，等於多一筆被動收入。' },
  { icon: CloudSun, title: '頂樓隔熱、樓下省電', desc: '太陽能板擋住直曬，頂樓多一層隔熱，冷氣負擔變小、電費更省。' },
  { icon: Snowflake, title: '室內降溫 3～5℃', desc: '太陽不會直接曬在屋頂上，室內體感溫度明顯下降，夏天更舒服。' },
  { icon: Droplets, title: '屋頂更耐用', desc: '雨水不會直接打在防水層上，減少日曬雨淋，屋頂壽命延長。' },
  { icon: Umbrella, title: '合法遮陽空間', desc: '等於多一塊合法遮陽棚，若要當成露台或置物空間使用也可以。' },
  { icon: Landmark, title: '屋頂變資產', desc: '閒置屋頂拿來收租，等於把空間變成會生利息的資產。' },
  { icon: BadgeCheck, title: '結構安全有保障', desc: '支架與結構由專業技師簽證，耐風抗震，安全有依據。' },
];

const requiredDocs = [
  '代刻章授權書或便章',
  '土地、建物所有權人身分證、印章',
  '最新一期電費單',
  '使用執照（影本）',
  '帳戶存摺封面（影本）',
  '地籍圖謄本（影本，三個月內）',
  '一類土地謄本（影本，三個月內）或土地權狀（影本）',
  '一類建物謄本（影本，三個月內）或建物權狀（影本）',
  '建物測量成果圖（影本）',
  '土地使用分區證明書（影本）',
];

const RentRoof: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> 回首頁
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            出租屋頂
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />
          <p className="text-lg text-gray-600">
            把閒置屋頂租給我們蓋太陽能，你不用出錢、我們來建來維護，你只要收長期穩定租金，還有免費遮陽、室內降溫、屋頂延壽等好處。
          </p>
        </header>

        {/* 出租屋頂安裝條件 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-primary" size={24} />
            出租屋頂安裝條件
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">・</span>
              <span><strong>屋頂合法面積</strong>：達 <strong className="text-primary">20 坪以上</strong>（以有使用執照範圍為準）</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">・</span>
              <span><strong>房屋年齡</strong>：需在 <strong className="text-primary">30 年以下</strong>（若超過 30 年，需經專業評估）</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">・</span>
              <span>旁邊無較高的大樓，屋頂無其他遮陰</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">・</span>
              <span><strong>集合式住宅</strong>：限 <strong className="text-primary">7 樓以下</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">・</span>
              <span>饋線是否足夠（有專人處理）</span>
            </li>
          </ul>
        </div>

        {/* 優勢說明 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">優勢說明</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 須備文件 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-primary" size={24} />
            須備文件
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            若您提供身分證號，以下內容可有專人協助您線上代為申請，也可以選擇自行申請。地籍圖謄本、一類土地/建物謄本或權狀、建物測量成果圖、土地使用分區證明書等，皆可至地政事務所申請或透過網路申請。
          </p>
          <ul className="space-y-2 text-gray-700">
            {requiredDocs.map((doc, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary shrink-0">・</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA 我要出租屋頂 */}
        <div className="bg-gradient-to-br from-primary/10 to-teal-50 rounded-2xl p-8 lg:p-10 border-2 border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我要出租屋頂</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            房屋年齡需在 30 年以下（若超過 30 年，需經專業評估）。填寫表單後我們會儘快與您聯絡，安排評估與試算。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            填寫出租屋頂諮詢表單
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RentRoof;
