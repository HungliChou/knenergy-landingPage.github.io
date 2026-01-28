import { Sun, ShieldCheck, Wrench, Leaf, BarChart3, Recycle, FileCheck, HardHat } from 'lucide-react';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

export const COMPANY_INFO = {
  name: "旭奇能源",
  englishName: "KW ENERGY CO.",
  slogan: "創造清潔能源，領航綠色生活",
  taxId: "60707005",
  phone: "02-2243-5888",
  fax: "02-2243-5189",
  email: "willychou111@hotmail.com",
  address: "新北市中和區中山路二段332巷13號9樓",
};

// Navbar links - simplified as requested
export const NAV_LINKS = [
  { name: "關於旭奇", path: "/#about", type: "hash" },
  { name: "建置須知", path: "/construction", type: "page" },
  // Services is handled specially in Navbar as a dropdown
  { name: "最新消息", path: "/news", type: "page" },
  { name: "聯絡我們", path: "/contact", type: "page" },
];

export const SERVICES = [
  {
    id: "consulting",
    title: "專業諮詢與規劃",
    description: "提供屋頂出租或自建電廠的專業評估。包含租金試算、投資效益分析，協助企業創造綠色收益。",
    icon: BarChart3,
    // Content derived from PDF Page 4 & 5
    detailTitle: "專業諮詢：出租與自建的效益評估",
    detailContent: [
      {
        subtitle: "屋頂太陽能電廠的兩種營運方式",
        text: "屋頂太陽能電廠主要有兩種運營方式：一種是企業「自建電廠」，賣電給台電賺取收入或自發自用；另一種則是屋主單純「出租屋頂」，由太陽能業者自行建置，類似房東租客的概念，屋主則單純收取租金。"
      },
      {
        subtitle: "方案一：出租屋頂 (零成本投資)",
        text: "屋主無須出資太陽能電廠建置、維護費用，單純出租屋頂，賺取穩定20年售電回饋收入。旭奇提供彈性購回服務，日後假如有綠電需求，還可以依年限計算購回電廠。\n\n此外，屋頂型太陽能電廠還能達到室內降溫、阻擋太陽直射、防水層延壽等多種效益。此方案非常適合起始資金不多，抑或還在觀望猶豫的企業。"
      },
      {
        subtitle: "方案二：自建投資 (電力自主)",
        text: "自行出資投資建造太陽能電廠，可以為企業賺取20年穩定售電收入，或是自發自用，提供企業內部日常運作用電，達到減碳永續成效。後續日常保養、維護、洗板，則可以透過專業太陽能廠商進行專業服務，確保電廠20年發電效益。"
      }
    ],
    detailImage: "https://picsum.photos/id/1055/800/500", // Placeholder
  },
  {
    id: "construction",
    title: "太陽光電系統建置",
    description: "高品質工程建置，採用H型鋼結構、三層防水保護，確保抗風抗震。包含平鋪型、棚架型及地面型系統。",
    icon: Sun,
    // Content derived from PDF Page 8, 9, 10
    detailTitle: "高品質工程建置標準",
    detailContent: [
      {
        subtitle: "專業團隊確保工程品質",
        text: "旭奇能源以自有專業結構技師及電機事務所團隊成員，設計規劃出符合結構強度及系統設備安全規定，擘劃出安全可靠的太陽能發電場域。主要涵蓋三大核心技術：模組支撐架工程、系統設備工程、模組運轉。"
      },
      {
        subtitle: "六大工作指標與承諾",
        list: [
          "增加結構強度：使用 H 型鋼結構，並採用熱浸鍍鋅工法防止基材腐蝕。抗風能力達14級（瞬時17級），抗震達6級。",
          "加強防水防風：採用三層防水保護結構，包括樓板防水塗層，有效防止老化和漏水問題。",
          "結構可靠度：鋼構施工細節完備，包括鑽孔、牙條植筋、基座灌漿與PU防水漆塗抹。",
          "專業儀器檢測：所有工程用料符合建案等級標準，從導水溝到防水層皆精心設計。",
          "現場監工：確保施工符合SOP規範。",
          "完工檢驗與保固：提供完整的驗收報告與長期保固。"
        ]
      },
      {
        subtitle: "建置類型",
        text: "我們提供多種建置型態，包括「平鋪型」（具備隔熱降溫，解決屋頂漏水）與「棚架型」（設置於RC屋頂，立柱使用H型鋼，增加使用空間）。",
        images: [
          withBase("official_image/太陽光電系統建置- 平鋪型.png"),
          withBase("official_image/太陽光電系統建置-棚架型.png")
        ]
      }
    ],
    detailImage: "https://picsum.photos/id/164/800/500",
  },
  {
    id: "application",
    title: "文件申請與規畫",
    description: "代辦台電併聯審查、能源局備案、地方政府免雜照申請，全程掌握進度，確保合法合規。",
    icon: FileCheck,
    // Content derived from PDF Page 7
    detailTitle: "繁瑣流程，旭奇為您代辦",
    detailContent: [
      {
        subtitle: "核心文件申請階段",
        text: "太陽能送件流程最核心的階段會接觸三個單位：台電、能源局、地方政府。旭奇團隊擁有豐富的行政經驗，協助客戶處理所有繁雜公文。"
      },
      {
        subtitle: "主要流程步驟",
        type: "process",
        list: [
          "前置評估：權狀、屋頂照片、初步設計",
          "併聯審查 (台電)：送出併聯申請書、設計圖、規格書",
          "備案申請 (能源局)：備案申請書、併審意見書、圖說",
          "雜照/免雜照 (地方政府)：結構證明、申請書",
          "躉購簽約 (台電)：備案文件、身分證明",
          "施工與掛表：施工計畫、竣工報告、試運轉紀錄",
          "設備登記 (能源局)：取得設備登記函"
        ]
      },
      {
        subtitle: "應備文件一覽",
        list: [
          "代刻章授權書或便章",
          "土地、建物所有權人身分證、印章",
          "最新一期電費單",
          "使用執照(影本)",
          "帳戶存摺封面(影本)",
          "地籍圖謄本(影本，三個月內)",
          "一類土地謄本(影本，三個月內)或土地權狀(影本)",
          "一類建物謄本(影本，三個月內)或建物權狀(影本)",
          "建物測量成果圖(影本)",
          "土地使用分區證明書(影本)"
        ]
      }
    ],
    detailImage: "https://picsum.photos/id/1076/800/500",
  },
  {
    id: "maintenance",
    title: "系統維運與監控",
    description: "提供20年長期維運，包含雲端監控、定期清洗模組、設備檢修，確保發電效益最佳化。",
    icon: Wrench,
    // Content derived from PDF Page 11, 12
    detailTitle: "20年長期維運，保障發電收益",
    detailContent: [
      {
        subtitle: "維運的重要性",
        text: "電廠的運轉和經營至少長達 20 年以上，維運品質的好壞對發電量有顯著影響，差距預估可達 20~30%。太陽能板若有損壞通常具不可回復性，因此即時處理突發狀況非常重要。"
      },
      {
        subtitle: "太陽能監控系統",
        text: "透過雲端網路連接監控網站，具備「異常警示功能」、「遠距離異常診斷」、「各案場管理分析」與「智能化數據整合」。確保在第一時間發現問題並排程改善。"
      },
      {
        subtitle: "定期維護項目",
        list: [
          "建築體檢查：確認支架變形及鏽蝕狀況",
          "太陽能板清潔：定期清洗，確保無鳥糞、灰塵遮擋，如破損即進行更換",
          "電線與Inverter檢查：檢查電線接頭狀態，使用APP觀看故障訊號與電流狀態"
        ]
      }
    ],
    detailImage: "https://picsum.photos/id/526/800/500",
  },
  {
    id: "storage",
    title: "儲能系統整合",
    description: "BESS儲能佈局，協助電力自給自足、調節尖離峰用電，提升能源獲利與電力自主權。",
    icon: ShieldCheck,
    // Content derived from PDF Page 21, 22
    detailTitle: "儲能佈局：BESS 與電力自主",
    detailContent: [
      {
        subtitle: "表後儲能重大補助計畫",
        text: "經濟部能源署已核定「表後儲能」補助計畫，每 1MWh 補助新台幣 500 萬元，單一案址最高可補助 5,000 萬元（不超過總經費50%）。\n核心條件：必須使用國產電芯。執行要求：須配合台電夜尖峰時段 (18:00-20:00) 進行放電。"
      },
      {
        subtitle: "旭奇儲能優勢",
        list: [
          "電力自給自足：在無日照期間仍能穩定供應綠電。",
          "需求電價管理：在尖峰時段放電以節省高額電費，提升能源獲利。",
          "電力自主權：在停電或電網波動時，確保生產線持續運作，避免停工造成的巨大損失。"
        ]
      },
      {
        subtitle: "節費規劃",
        text: "我們會對客戶進行專業用電評估規劃，依尖、離峰用電量進行分析，提供最適合的用電量配套方案。"
      }
    ],
    detailImage: "https://picsum.photos/id/134/800/500",
  },
  {
    id: "recycling",
    title: "太陽能板回收與永續",
    description: "完善的廢棄太陽能板回收機制，配合環保署政策，確保再生能源循環利用，落實ESG。",
    icon: Recycle,
    // Content derived from PDF Page 13, 14, 15
    detailTitle: "落實循環經濟，確保環境永續",
    detailContent: [
      {
        subtitle: "法規與預繳機制",
        text: "為解決太陽能光電模組除役後的廢棄物問題，政府已建立完整的回收制度。依照《再生能源發展條例》相關規定，設置者在案場建置時，需預繳每瓩 (kW) 1,000 元的回收清理費用。此費用納入政府信託基金，專款專用於未來的回收處理，確保每一片模組都能妥善進入循環體系，不造成環境負擔。",
        image: withBase("official_image/太陽能板回收1.png")
      },
      {
        subtitle: "回收作業四步驟：3C1R",
        text: "當模組不堪使用或案場結束營運時，廢棄處理需依循標準作業流程，確保合法流向。",
        type: "process",
        list: [
          "問 (Consult)：若有廢棄模組排出需求，請先撥打環境部資源回收專線 0800-085717 諮詢，或上網查詢相關規定。",
          "填 (Register)：前往「廢太陽光電板回收服務管理資訊系統」登錄排出資訊，包含模組序號、形式與數量。",
          "集 (Collect)：累積數量達 50 片以上者，系統將媒合清理業者前往載運；未達 50 片者，可自行送至指定暫存點。",
          "收 (Clearance)：由合法的處理機構進行收運，並進行後續的拆解、破碎與資源化再利用工作。"
        ],
        image: withBase("official_image/太陽能板回收2.png")
      },
      {
        subtitle: "物質成分與環境安全",
        text: "外界常誤解太陽能板有毒，事實上，太陽能模組主要由玻璃 (約74.2%)、鋁框 (約10.3%)、聚合物 (約10%) 等一般材料組成，僅含極少量的導電金屬。\n\n經檢測證明，廢棄模組符合「毒性特性溶出程序 (TCLP)」標準，不屬於有害事業廢棄物。其成分穩定，不會自行溶解或滲出液體污染土壤與地下水。透過專業回收技術，玻璃、鋁框等材料皆可高比例回收再製，真正實現綠色能源的永續循環。",
        // 此段落不顯示圖片
      }
    ],
    detailImage: "https://picsum.photos/id/439/800/500",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "彰化和美",
    capacity: "8.88 kw",
    images: [withBase("official_image/彰化和美1.png"), withBase("official_image/彰化和美2.png")],
    description: "透天厝屋頂棚架型系統"
  },
  {
    id: 2,
    title: "彰化溪湖",
    capacity: "18.5 kw",
    images: [withBase("official_image/彰化溪湖1.png"), withBase("official_image/彰化溪湖2.png")],
    description: "住商混合屋頂平鋪與棚架複合型"
  },
  {
    id: 3,
    title: "彰化福興",
    capacity: "25.2 kw",
    images: [withBase("official_image/彰化福興1.png"), withBase("official_image/彰化福興2.png")],
    description: "大型透天厝屋頂利用"
  },
  {
    id: 4,
    title: "彰化鹿港",
    capacity: "121.44 kw",
    images: [withBase("official_image/彰化鹿港1.png"), withBase("official_image/彰化鹿港2.png")],
    description: "廠房倉庫大型屋頂平鋪系統"
  },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    date: "2024.03.15",
    title: "強制設置太陽能條款上路",
    content: "《再生能源發展條例》修法，新建、增建或改建建築面積達300坪以上，未來必須設置太陽能，若不裝設將無法取得建照與使照。"
  },
  {
    id: 2,
    date: "2024.02.20",
    title: "儲能系統重大補助計畫",
    content: "經濟部能源署核定50億元補助計畫，針對「表後儲能」提供補助，每1MWh補助500萬元，鼓勵企業建置自主電源。"
  },
  {
    id: 3,
    date: "2024.01.10",
    title: "旭奇與富威電力達成戰略合作",
    content: "旭奇能源與富威電力（正崴集團）簽署合作，保障太陽能案場最低90%發電收購，並推動綠電自由交易。"
  },
];