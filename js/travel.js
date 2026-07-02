/* travel.js — travel 페이지 인터랙션 */

(function () {
  /* ── 언어 감지 (html[lang]) ── */
  var LANG = (document.documentElement.lang || "en").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";

  /* ── 상세 데이터: 이미지(언어 공통) ── */
  var DETAIL_IMG = {
    "hotel-1": [
      "assets/img/6-page-tour/1-stay/details/01-detail/ext1.jpg",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext2.jpg",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext3.jpg",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext4.webp",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext5.jpg",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext6.jpg",
      "assets/img/6-page-tour/1-stay/details/01-detail/ext7.jpg",
    ],
    "hotel-2": [
      "assets/img/6-page-tour/1-stay/details/02-detail/7a9007f9-590c-4045-baaa-eae060439caf.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/841fa9aa-1f43-4654-bc02-8d674bc428d8.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/90564d10-cba0-4359-8e70-ac8407c2b2c5.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/9d4e4679-c78b-4383-b476-c0d9480d7818.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/b4079396-94ff-4cfb-83cd-e8538d6c2fe1.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/d69ddf01-7247-4439-b975-9334d2fa0dd6.png",
      "assets/img/6-page-tour/1-stay/details/02-detail/e2941935-3bc7-4b0f-9400-293ebb318326.png",
    ],
    "hotel-3": [
      "assets/img/6-page-tour/1-stay/details/03-detail/1527cfc0-3a1d-4184-905b-9179f9317027.png",
      "assets/img/6-page-tour/1-stay/details/03-detail/788276de-3302-48dd-91e8-510e5e0d4080.png",
      "assets/img/6-page-tour/1-stay/details/03-detail/ae9fa2da-f93b-4034-909e-7a14ec89cc1f.png",
      "assets/img/6-page-tour/1-stay/details/03-detail/ef2f62e0-98c1-4b43-8ef8-ce809a66cba9.png",
    ],
    "shop-1": [
      "assets/img/6-page-tour/3-shop/details/01-detail/53bf16ec-7a6b-457d-aed2-ecbddfae168b.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/620289d3-e4c7-42a2-be08-c66c52d7408e.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/781f2807-652b-45d9-b341-7fe135b62a3c.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/96cbad3a-6ffc-4ca3-a6e4-60ab4d590b9b.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/f79a80dd-6ff1-4d30-bcee-8c64c3bf447a.png",
    ],
    "shop-2": [
      "assets/img/6-page-tour/3-shop/details/02-detail/1778832550348-44cwdk.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/1778832599121-h1o2kl.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/1778833054089-cydrwj.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/9ad0bb9d-5166-43b4-80d7-133cf77d4cf9.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/bfef61ec-d68a-4e30-b50e-e3de352308f7.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/cb4b81e6-3587-49fb-a0b4-1a334442ed8d.png",
      "assets/img/6-page-tour/3-shop/details/02-detail/d0422d95-f949-430e-b5e7-0c36ef2bdca6.png",
    ],
    "shop-3": [
      "assets/img/6-page-tour/3-shop/details/03-detail/4efaf1a6-5b0a-45a5-be15-4ecd611d1777.png",
      "assets/img/6-page-tour/3-shop/details/03-detail/8218cdf3-623d-4572-b89b-0be461946f7c.png",
      "assets/img/6-page-tour/3-shop/details/03-detail/a29a0592-ce34-4531-b7a9-a6fc1371e34b.png",
      "assets/img/6-page-tour/3-shop/details/03-detail/dff42631-00d5-4c69-8ebb-102b7ede608d.png",
      "assets/img/6-page-tour/3-shop/details/03-detail/f20b2d17-afc5-4326-9142-65f8a1014016.png",
    ],
    "shop-4": [
      "assets/img/6-page-tour/3-shop/details/04-detail/560d75ef-ca95-427b-a6a1-3a6d2e4eeab1.png",
      "assets/img/6-page-tour/3-shop/details/04-detail/e53c91bc-1970-4634-b6f7-8b14ed8080df.png",
      "assets/img/6-page-tour/3-shop/details/04-detail/ea548f54-0457-44c6-9dd7-3eb1ab7d5f54.png",
      "assets/img/6-page-tour/3-shop/details/04-detail/f9911505-1705-4e8c-96ef-cc03f3bf1442.png",
    ],
    "shop-5": [
      "assets/img/6-page-tour/3-shop/details/05-detail/0483c058-60c8-4917-bf8d-9ad6696579e3.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/1ddc782c-3ec2-4a4b-8d35-59b41bd167c7.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/86144213-f5ad-4932-93bd-e49d037e8ebc.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/a2ae8139-3a39-4974-ad02-eb390f4cf1fe.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/a46949ab-b83f-46a5-a343-58834c6c7112.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/df26b5f1-490d-44e0-9079-595eb770b7eb.png",
      "assets/img/6-page-tour/3-shop/details/05-detail/f9cf2176-e64d-40b1-b4c4-2457ce6d0f27.png",
    ],
    "shop-6": ["assets/img/6-page-tour/3-shop/2-garosugil.png", "assets/img/6-page-tour/3-shop/1-seongsu.png"],
    "shop-7": ["assets/img/6-page-tour/4-market/3-gwangjang.png", "assets/img/6-page-tour/4-market/1-namdaemun.png", "assets/img/6-page-tour/4-market/2-dongdaemun.png"],
    "shop-8": ["assets/img/6-page-tour/2-tax/2-shilla.png", "assets/img/6-page-tour/2-tax/1-lotte.png", "assets/img/6-page-tour/2-tax/3-shinsegae.png"],
  };

  /* ── 상세 데이터: 언어별 텍스트 (cat/title/addr/desc/promo/cats) ── */
  var DETAIL_TEXT = {
    ko: {
      "hotel-1": {
        cat: "호텔",
        title: "롯데호텔 서울 (소공동)",
        addr: "롯데호텔 서울 (소공동), 서울특별시 중구 을지로 30",
        desc: "1979년부터 서울의 중심을 지켜온 롯데호텔 서울은 럭셔리 비즈니스 호텔입니다. 최상의 숙면을 위한 침구와 최고급 어메니티, 미슐랭 레스토랑과 스파, 야외 수영장 등 다양한 부대시설을 갖추고 있어 비즈니스와 레저 여행 모두에 최적화된 환경을 제공합니다.",
      },
      "hotel-2": {
        cat: "호텔",
        title: "더 플라자 서울",
        addr: "더 플라자 서울, 오토그래프 컬렉션, 서울특별시 중구 소공로 119",
        desc: "더 플라자 서울, 오토그래프 컬렉션에서 럭셔리한 휴가를 만끽해 보세요. 고품격 어메니티와 최상의 맞춤 서비스, 시그니처 레스토랑과 도심 속 스파를 갖춘 5성급 호텔입니다.",
      },
      "hotel-3": {
        cat: "호텔",
        title: "JW 메리어트 호텔 서울",
        addr: "JW 메리어트 호텔 서울, 서울특별시 서초구 신반포로 176",
        desc: "유명 관광지와 가까운 강남 소재 JW 메리어트 호텔 서울은 5성급 호텔 경험을 제공하는 특급 호텔입니다. 실내 수영장, 스파, 다양한 F&B 시설을 갖추고 있습니다.",
      },
      "shop-1": {
        cat: "면세점",
        title: "롯데면세점 명동점",
        addr: "롯데면세점 본점, 서울 중구 을지로 30",
        promo: "면세점 이용 시 할인 쿠폰을 제공해 드립니다. (일부 브랜드는 프로모션에서 제외될 수 있습니다)",
        desc: "명동 중심에 위치한 국내 최대 규모의 면세점으로 명품부터 K-뷰티까지 한자리에서 쇼핑할 수 있습니다.",
        cats: ["메이크업", "럭셔리", "주류", "패션"],
      },
      "shop-2": {
        cat: "면세점",
        title: "신세계면세점 명동점",
        addr: "신세계면세점 명동점, 서울 중구 퇴계로 77",
        desc: "쇼핑과 미식, 전망까지 즐길 수 있는 프리미엄 면세 쇼핑몰. 루프탑 전망대와 레스토랑이 함께 운영됩니다.",
      },
      "shop-3": {
        cat: "시장",
        title: "남대문시장",
        addr: "남대문시장, 서울 중구 남대문시장4길 21",
        desc: "서울 대표 재래시장으로 먹거리부터 의류·잡화까지 다양한 상품을 만날 수 있습니다. 갈치조림 골목과 호떡 노점, 칼국수 골목이 유명합니다.",
      },
      "shop-4": {
        cat: "시장",
        title: "동대문시장",
        addr: "동대문시장, 서울 중구 을지로 281",
        desc: "24시간 쇼핑이 가능한 패션·의류 메카. 아시장과 먹거리도 풍성합니다. 닭한마리 골목과 떡볶이 타운이 인기입니다.",
      },
      "shop-5": {
        cat: "쇼핑몰",
        title: "성수동 연무장길",
        addr: "성수동 연무장길, 서울 성동구 연무장길",
        desc: "힙한 편집숍과 카페, 팝업스토어가 모인 성수동 핫플레이스. 성수 베이커리, 스페셜티 커피, 수제 버거가 유명합니다.",
      },
      "shop-6": {
        cat: "쇼핑몰",
        title: "가로수길",
        addr: "가로수길, 서울 강남구 신사동",
        desc: "국내외 브랜드 플래그십 스토어와 감각적인 디자이너 편집숍이 늘어선 신사동 트렌드 거리입니다. 브런치 카페와 디저트 명소도 함께 즐길 수 있습니다.",
      },
      "shop-7": {
        cat: "시장",
        title: "광장시장",
        addr: "광장시장, 서울 종로구 창경궁로 88",
        desc: "100년 역사의 전통시장으로 빈대떡, 마약김밥, 육회 골목 등 다채로운 먹거리와 구제 의류·한복으로 유명합니다.",
      },
      "shop-8": {
        cat: "면세점",
        title: "신라면세점 서울점",
        addr: "신라면세점 서울점, 서울 중구 동호로 249",
        promo: "면세점 이용 시 멤버십 적립 및 할인 혜택을 제공해 드립니다. (일부 브랜드 제외)",
        desc: "장충동에 위치한 프리미엄 면세점으로 럭셔리 브랜드 부티크와 K-뷰티 라인업이 다양합니다.",
        cats: ["럭셔리", "메이크업", "패션", "주류"],
      },
    },
    en: {
      "hotel-1": {
        cat: "Hotel",
        title: "Lotte Hotel Seoul (Sogong-dong)",
        addr: "Lotte Hotel Seoul, 30 Eulji-ro, Jung-gu, Seoul",
        desc: "A landmark luxury business hotel that has anchored the heart of Seoul since 1979. With premium bedding for the finest rest, top-tier amenities, Michelin-starred dining, a spa, and an outdoor pool, Lotte Hotel Seoul offers an environment perfectly suited to both business and leisure travel.",
      },
      "hotel-2": {
        cat: "Hotel",
        title: "The Plaza Seoul",
        addr: "The Plaza Seoul, Autograph Collection, 119 Sogong-ro, Jung-gu, Seoul",
        desc: "Indulge in a luxurious escape at The Plaza Seoul, Autograph Collection. This five-star hotel pairs refined amenities and bespoke service with signature restaurants and a spa set in the heart of the city.",
      },
      "hotel-3": {
        cat: "Hotel",
        title: "JW Marriott Hotel Seoul",
        addr: "JW Marriott Hotel Seoul, 176 Sinbanpo-ro, Seocho-gu, Seoul",
        desc: "Set in Gangnam near Seoul's most celebrated attractions, JW Marriott Hotel Seoul delivers a true five-star experience, complete with an indoor pool, spa, and a diverse selection of dining venues.",
      },
      "shop-1": {
        cat: "Duty Free",
        title: "Lotte Duty Free Myeongdong",
        addr: "Lotte Duty Free Main, 30 Eulji-ro, Jung-gu, Seoul",
        promo: "Enjoy exclusive discount coupons with your duty-free purchase. (Some brands may be excluded from the promotion.)",
        desc: "Korea's largest duty-free store in the heart of Myeongdong, where you can shop everything from luxury labels to K-beauty under one roof.",
        cats: ["Makeup", "Luxury", "Liquor", "Fashion"],
      },
      "shop-2": {
        cat: "Duty Free",
        title: "Shinsegae Duty Free Myeongdong",
        addr: "Shinsegae Duty Free Myeongdong, 77 Toegye-ro, Jung-gu, Seoul",
        desc: "A premium duty-free complex where shopping, fine dining, and sweeping views come together — complete with a rooftop observatory and restaurants.",
      },
      "shop-3": {
        cat: "Market",
        title: "Namdaemun Market",
        addr: "Namdaemun Market, 21 Namdaemun Market 4-gil, Jung-gu, Seoul",
        desc: "Seoul's iconic traditional market, offering everything from street food to clothing and everyday goods — famous for its braised hairtail alley, hotteok stalls, and kalguksu lane.",
      },
      "shop-4": {
        cat: "Market",
        title: "Dongdaemun Market",
        addr: "Dongdaemun Market, 281 Eulji-ro, Jung-gu, Seoul",
        desc: "A 24-hour mecca for fashion and textiles, brimming with night-market energy and street food — beloved for its dak-hanmari alley and tteokbokki town.",
      },
      "shop-5": {
        cat: "Shopping Street",
        title: "Seongsu-dong Yeonmujang-gil",
        addr: "Yeonmujang-gil, Seongdong-gu, Seoul",
        desc: "Seongsu-dong's hottest enclave of hip concept stores, cafés, and pop-ups — known for its bakeries, specialty coffee, and artisan burgers.",
      },
      "shop-6": {
        cat: "Shopping Street",
        title: "Garosu-gil",
        addr: "Garosu-gil, Sinsa-dong, Gangnam-gu, Seoul",
        desc: "A trend-setting boulevard in Sinsa-dong lined with domestic and international flagship stores and stylish designer boutiques — with brunch cafés and dessert spots to match.",
      },
      "shop-7": {
        cat: "Market",
        title: "Gwangjang Market",
        addr: "Gwangjang Market, 88 Changgyeonggung-ro, Jongno-gu, Seoul",
        desc: "A century-old traditional market famous for its diverse street food — bindaetteok, mayak gimbap, and yukhoe alley — alongside vintage clothing and hanbok.",
      },
      "shop-8": {
        cat: "Duty Free",
        title: "Shilla Duty Free Seoul",
        addr: "Shilla Duty Free Seoul, 249 Dongho-ro, Jung-gu, Seoul",
        promo: "Enjoy membership rewards and discount benefits with your duty-free purchase. (Some brands excluded.)",
        desc: "A premium duty-free destination in Jangchung-dong with an extensive lineup of luxury brand boutiques and K-beauty.",
        cats: ["Luxury", "Makeup", "Fashion", "Liquor"],
      },
    },
  };

  /* ── 편의시설 (호텔 전용) ── */
  var AMENITIES = {
    ko: [
      { label: "피트니스 센터", icon: "link" },
      { label: "수영장", icon: "link" },
      { label: "사우나", icon: "link" },
      { label: "골프 연습장", icon: "link" },
      { label: "비즈니스 센터", icon: "building" },
      { label: "컨퍼런스 룸", icon: "building" },
    ],
    en: [
      { label: "Fitness Center", icon: "link" },
      { label: "Swimming Pool", icon: "link" },
      { label: "Sauna", icon: "link" },
      { label: "Golf Practice Range", icon: "link" },
      { label: "Business Center", icon: "building" },
      { label: "Conference Room", icon: "building" },
    ],
  };

  /* ── 객실 유형 (호텔 전용) ── */
  var ROOM_TYPES = {
    "hotel-1": {
      ko: [
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/superior-1.webp", title: "슈페리어", sub: "슈페리어 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/deluxe-1.jpg", title: "디럭스", sub: "디럭스 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/grand-deluxe-1.jpg", title: "그랜드 디럭스", sub: "EX타워 웰니스 룸 · 그랜드 디럭스 룸 · 그랜드 디럭스 패밀리 트윈룸" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/premier-1.webp", title: "프리미어", sub: "프리미어 룸 · 프리미어 패밀리 트윈룸 · 이그제큐티브 프리미어 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/suite-1.jpg", title: "스위트", sub: "프리미어 스위트 룸 · 주니어 스위트 룸 · 디럭스 스위트 룸 · 로얄 스위트" },
      ],
      en: [
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/superior-1.webp", title: "Superior", sub: "Superior Room" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/deluxe-1.jpg", title: "Deluxe", sub: "Deluxe Room" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/grand-deluxe-1.jpg", title: "Grand Deluxe", sub: "Executive Tower Wellness Room · Grand Deluxe Room · Grand Deluxe Family Twin Room" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/premier-1.webp", title: "Premier", sub: "Premier Room · Premier Family Twin Room · Executive Premier Room" },
        { img: "assets/img/6-page-tour/1-stay/details/01-detail/suite-1.jpg", title: "Suite", sub: "Premier Suite · Junior Suite · Deluxe Suite · Royal Suite" },
      ],
    },
    "hotel-2": {
      ko: [
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/deluxe-1.jpg", title: "디럭스", sub: "디럭스 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/premier-suite-1.avif", title: "프리미어 스위트", sub: "프리미어 스위트 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/presidential-1.jpg", title: "프레지덴셜 스위트", sub: "프레지덴셜 스위트" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/suite-1.avif", title: "스위트", sub: "스위트 룸" },
      ],
      en: [
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/deluxe-1.jpg", title: "Deluxe", sub: "Deluxe Room" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/premier-suite-1.avif", title: "Premier Suite", sub: "Premier Suite Room" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/presidential-1.jpg", title: "Presidential Suite", sub: "Presidential Suite" },
        { img: "assets/img/6-page-tour/1-stay/details/02-detail/suite-1.avif", title: "Suite", sub: "Suite Room" },
      ],
    },
    "hotel-3": {
      ko: [
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/deluxe-3.jpg", title: "디럭스", sub: "디럭스 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/business-suite-1.jpg", title: "비즈니스 스위트", sub: "비즈니스 스위트 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/suite-1.avif", title: "스위트", sub: "스위트 룸" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/penthouse-1.jpg", title: "펜트하우스", sub: "펜트하우스 스위트" },
      ],
      en: [
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/deluxe-3.jpg", title: "Deluxe", sub: "Deluxe Room" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/business-suite-1.jpg", title: "Business Suite", sub: "Business Suite Room" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/suite-1.avif", title: "Suite", sub: "Suite Room" },
        { img: "assets/img/6-page-tour/1-stay/details/03-detail/penthouse-1.jpg", title: "Penthouse", sub: "Penthouse Suite" },
      ],
    },
  };

  var AMENITY_ICONS = {
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  };

  /* ── 카테고리 태그 전용 이미지 (언어 공통) ── */
  var CAT_IMG = {
    "shop-1": [
      "assets/img/6-page-tour/3-shop/details/01-detail/1778832474866-0nx30f.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/1778832483890-v74lal.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/1778832500040-t65gyz.png",
      "assets/img/6-page-tour/3-shop/details/01-detail/1778832509093-2zjhmx.png",
    ],
  };

  /* ── 합성: 이미지 + 현재 언어 텍스트 ── */
  var DETAIL_DATA = {};
  Object.keys(DETAIL_IMG).forEach(function (k) {
    var t = (DETAIL_TEXT[LANG] && DETAIL_TEXT[LANG][k]) || DETAIL_TEXT.ko[k] || {};
    var rec = { imgs: DETAIL_IMG[k] };
    if (CAT_IMG[k]) rec.catImgs = CAT_IMG[k];
    Object.keys(t).forEach(function (p) {
      rec[p] = t[p];
    });
    DETAIL_DATA[k] = rec;
  });

  /* ── UI 문자열 (언어별) ── */
  var I18N = {
    ko: {
      catLabel: "카테고리",
      sortRec: "추천순",
      sortName: "이름순",
      empty: "검색 결과가 없습니다.",
      countHotel: function (n) {
        return '총 <span class="tv-count__num">' + n + "</span>개 숙소";
      },
      countShop: function (n) {
        return '총 <span class="tv-count__num">' + n + "</span>개 쇼핑";
      },
      amenitiesLabel: "편의시설",
      roomTypesLabel: "객실 유형",
      roomsNote: "객실 등급 및 편의시설 정보는 업체 자료를 기반으로 업데이트 예정입니다.",
      mapLabel: "지도",
      ctaDescHotel: "객실 선택, 요금, 체크인 안내까지 전담 매니저가 도와드립니다.",
    },
    en: {
      catLabel: "Category",
      sortRec: "Recommended",
      sortName: "Alphabetical",
      empty: "No results found.",
      countHotel: function (n) {
        return '<span class="tv-count__num">' + n + "</span> Hotels";
      },
      countShop: function (n) {
        return '<span class="tv-count__num">' + n + "</span> Destinations";
      },
      amenitiesLabel: "Amenities",
      roomTypesLabel: "Room Types",
      roomsNote: "Room grade and amenity details will be updated based on property data.",
      mapLabel: "Map",
      ctaDescHotel: "Our dedicated manager will help with room selection, rates, and check-in guidance.",
    },
  };
  var T = I18N[LANG] || I18N.en;

  /* ── 탭 전환 ── */
  var tabBtns = document.querySelectorAll(".tab-line__btn");
  var panels = {
    hotel: document.getElementById("panel-hotel"),
    shopping: document.getElementById("panel-shopping"),
  };
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      Object.values(panels).forEach(function (p) {
        p.classList.remove("is-active");
      });
      panels[btn.dataset.tab].classList.add("is-active");
    });
  });

  /* ── 검색 ── */
  document.querySelectorAll(".tv-search__input").forEach(function (input) {
    input.addEventListener("input", function () {
      filterAndSort(input.dataset.search);
    });
  });

  /* ── 검색 아이콘 토글 ── */
  document.querySelectorAll("[data-search-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var box = document.querySelector('[data-search-box="' + btn.dataset.searchToggle + '"]');
      if (!box) return;
      if (box.hasAttribute("hidden")) {
        box.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        var inp = box.querySelector(".tv-search__input");
        if (inp) inp.focus();
      } else {
        box.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ── 컬럼(그리드) 토글 (단일 버튼 순환) ── */
  var COL_ICONS = {
    1: '<rect x="6.5" y="6.5" width="11" height="11" rx="2" />',
    2: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.3" />',
  };
  document.querySelectorAll(".tv-col-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.dataset.cols;
      var next = btn.dataset.val === "1" ? "2" : "1";
      btn.dataset.val = next;
      var ico = btn.querySelector(".tv-col-ico");
      if (ico) ico.innerHTML = COL_ICONS[next];
      var grid = document.getElementById("grid-" + key);
      if (grid) {
        grid.classList.remove("tv-grid--c1", "tv-grid--c2");
        grid.classList.add("tv-grid--c" + next);
      }
    });
  });

  /* ── 소팅 ── */
  var sortState = { hotel: "recommended", shopping: "recommended" };

  document.querySelectorAll("[data-sort-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var key = btn.dataset.sortToggle;
      var menu = document.getElementById("sortmenu-" + key);
      menu.classList.toggle("is-open");
    });
  });

  document.querySelectorAll("[data-sort]").forEach(function (item) {
    item.addEventListener("click", function () {
      var key = item.dataset.sort;
      var val = item.dataset.value;
      sortState[key] = val;
      var menu = document.getElementById("sortmenu-" + key);
      menu.querySelectorAll(".tv-sort__item").forEach(function (i) {
        i.classList.toggle("is-active", i.dataset.value === val);
      });
      document.querySelector('[data-sort-label="' + key + '"]').textContent = val === "recommended" ? T.sortRec : T.sortName;
      menu.classList.remove("is-open");
      filterAndSort(key);
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".tv-sort__menu").forEach(function (m) {
      m.classList.remove("is-open");
    });
  });

  /* ── 카테고리 칩 (쇼핑) ── */
  var activeFilter = "all";
  document.querySelectorAll("[data-filter]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll("[data-filter]").forEach(function (c) {
        c.classList.remove("is-active");
      });
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter;
      filterAndSort("shopping");
    });
  });

  function filterAndSort(key) {
    var grid = document.getElementById("grid-" + key);
    var cards = Array.from(grid.querySelectorAll(".tv-card"));
    var query = (document.querySelector('[data-search="' + key + '"]').value || "").trim().toLowerCase();

    cards.forEach(function (card) {
      var name = card.dataset.name.toLowerCase();
      var matchSearch = !query || name.includes(query);
      var matchCat = key !== "shopping" || activeFilter === "all" || card.dataset.cat === activeFilter;
      card.style.display = matchSearch && matchCat ? "" : "none";
    });

    /* sort */
    var visible = cards.filter(function (c) {
      return c.style.display !== "none";
    });
    if (sortState[key] === "name") {
      visible.sort(function (a, b) {
        return a.dataset.name.localeCompare(b.dataset.name, LANG);
      });
    } else {
      visible.sort(function (a, b) {
        return parseInt(a.dataset.order) - parseInt(b.dataset.order);
      });
    }
    visible.forEach(function (c) {
      grid.appendChild(c);
    });

    /* count */
    var countEl = document.getElementById("count-" + key);
    if (countEl) {
      countEl.innerHTML = (key === "hotel" ? T.countHotel : T.countShop)(visible.length);
    }

    /* empty */
    var emptyEl = grid.querySelector(".tv-empty");
    if (visible.length === 0) {
      if (!emptyEl) {
        var div = document.createElement("div");
        div.className = "tv-empty";
        div.textContent = T.empty;
        grid.appendChild(div);
      }
    } else {
      if (emptyEl) emptyEl.remove();
    }
  }

  /* ── 상세 오버레이 ── */
  var detail = document.getElementById("tvDetail");
  var backdrop = document.getElementById("tvDetailBackdrop");
  var backBtn = document.getElementById("tvDetailBack");
  var detImgs = document.getElementById("tvDetailImgs");
  var detCtr = document.getElementById("tvDetailCounter");
  var detDots = document.getElementById("tvDetailDots");
  var detCur = 0;

  function openDetail(key) {
    var d = DETAIL_DATA[key];
    if (!d) return;
    document.getElementById("tvDetailCat").textContent = d.cat || "";
    document.getElementById("tvDetailTitle").textContent = d.title || "";
    document.getElementById("tvDetailDesc").textContent = d.desc || "";
    var addrEl = document.getElementById("tvDetailAddr");
    addrEl.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      (d.addr || "");
    var promoEl = document.getElementById("tvDetailPromo");
    promoEl.textContent = d.promo || "";
    promoEl.style.display = d.promo ? "" : "none";

    /* 카테고리 그리드 */
    var catSec = document.getElementById("tvDetailCatSection");
    if (d.cats && d.cats.length) {
      var catImgs = d.catImgs || d.imgs;
      catSec.innerHTML =
        '<p class="tv-detail__sub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>' +
        T.catLabel +
        '</p><div class="tv-detail__cat-grid">' +
        d.cats
          .map(function (c, i) {
            var img = catImgs[i] || catImgs[0];
            return '<div class="tv-detail__cat-item"><img class="tv-detail__cat-img" src="' + img + '" alt="' + c + '" /><span class="tv-detail__cat-label">' + c + "</span></div>";
          })
          .join("") +
        "</div>";
    } else {
      catSec.innerHTML = "";
    }

    /* 호텔 전용: 편의시설 / 객실 유형 ── 지도는 공통 */
    var isHotel = key.indexOf("hotel-") === 0;
    var amenSec = document.getElementById("tvDetailAmenities");
    var roomSec = document.getElementById("tvDetailRooms");
    var mapSec = document.getElementById("tvDetailMap");
    var ctaDescEl = document.getElementById("tvDetailCtaDesc");

    if (mapSec) {
      if (d.addr) {
        mapSec.style.display = "";
        mapSec.innerHTML =
          '<p class="tv-detail__sub">' +
          T.mapLabel +
          '</p><div class="tv-detail__map-embed"><iframe src="https://www.google.com/maps?q=' +
          encodeURIComponent(d.addr || d.title || "") +
          '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="' +
          (d.title || "") +
          '"></iframe></div>';
      } else {
        mapSec.style.display = "none";
        mapSec.innerHTML = "";
      }
    }

    if (isHotel) {
      if (amenSec) {
        amenSec.style.display = "";
        amenSec.innerHTML =
          '<p class="tv-detail__sub">' +
          T.amenitiesLabel +
          '</p><div class="tv-detail__amenity-grid">' +
          AMENITIES[LANG]
            .map(function (a) {
              return (
                '<div class="tv-detail__amenity-chip"><span class="tv-detail__amenity-chip-label">' +
                AMENITY_ICONS[a.icon] +
                a.label +
                "</span></div>"
              );
            })
            .join("") +
          "</div>";
      }

      if (roomSec) {
        var rooms = (ROOM_TYPES[key] && ROOM_TYPES[key][LANG]) || [];
        roomSec.style.display = "";
        roomSec.innerHTML =
          '<div class="tv-detail__rooms-head"><p class="tv-detail__sub">' +
          T.roomTypesLabel +
          '</p><p class="tv-detail__rooms-note">' +
          T.roomsNote +
          '</p></div><div class="tv-detail__room-grid">' +
          rooms
            .map(function (r) {
              return (
                '<div class="tv-detail__room-card"><div class="tv-detail__room-img-wrap"><img class="tv-detail__room-img" src="' +
                r.img +
                '" alt="' +
                r.title +
                '" /></div><p class="tv-detail__room-title">' +
                r.title +
                '</p><p class="tv-detail__room-sub">' +
                r.sub +
                "</p></div>"
              );
            })
            .join("") +
          "</div>";
      }

      if (ctaDescEl) ctaDescEl.textContent = T.ctaDescHotel;
    } else {
      if (amenSec) {
        amenSec.style.display = "none";
        amenSec.innerHTML = "";
      }
      if (roomSec) {
        roomSec.style.display = "none";
        roomSec.innerHTML = "";
      }
      if (ctaDescEl) ctaDescEl.textContent = ctaDescEl.dataset.default || ctaDescEl.textContent;
    }

    /* 이미지 캐러셀 */
    var imgs = d.imgs || [];
    detImgs.innerHTML = imgs
      .map(function (src) {
        return '<img class="tv-detail__img" src="' + src + '" alt="" />';
      })
      .join("");
    detDots.innerHTML = imgs
      .map(function (_, i) {
        return '<button class="tv-detail__cdot' + (i === 0 ? " is-active" : "") + '" data-i="' + i + '"></button>';
      })
      .join("");
    detDots.querySelectorAll(".tv-detail__cdot").forEach(function (dot) {
      dot.addEventListener("click", function () {
        goImg(parseInt(dot.dataset.i));
      });
    });
    detCur = 0;
    goImg(0);

    detail.classList.add("is-open");
    detail.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    detail.querySelector(".tv-detail__panel").scrollTop = 0;
  }

  function closeDetail() {
    detail.classList.remove("is-open");
    detail.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function goImg(idx) {
    var total = detImgs.querySelectorAll(".tv-detail__img").length;
    if (idx < 0 || idx >= total) return;
    detCur = idx;
    detImgs.style.transform = "translateX(-" + idx * 100 + "%)";
    detCtr.textContent = idx + 1 + " / " + total;
    detDots.querySelectorAll(".tv-detail__cdot").forEach(function (d, i) {
      d.classList.toggle("is-active", i === idx);
    });
  }

  document.querySelectorAll(".tv-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openDetail(card.dataset.detail);
    });
  });
  backdrop.addEventListener("click", closeDetail);
  backBtn.addEventListener("click", closeDetail);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDetail();
  });

  /* 스와이프 */
  var startX2 = 0;
  detImgs.parentElement.addEventListener(
    "touchstart",
    function (e) {
      startX2 = e.touches[0].clientX;
    },
    { passive: true },
  );
  detImgs.parentElement.addEventListener(
    "touchend",
    function (e) {
      var diff = startX2 - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) diff > 0 ? goImg(detCur + 1) : goImg(detCur - 1);
    },
    { passive: true },
  );

  /* ── 로그인 모달 ── */
  (function () {
    var trigger = document.getElementById("loginTrigger");
    var modal = document.getElementById("loginModal");
    var close = document.getElementById("loginClose");
    var bd = document.getElementById("loginBackdrop");
    function open() {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function shut() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    if (trigger)
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        open();
      });
    var gnbBtn = document.querySelector(".gnb-login-btn");
    if (gnbBtn)
      gnbBtn.addEventListener("click", function (e) {
        e.preventDefault();
        open();
      });
    if (close) close.addEventListener("click", shut);
    if (bd) bd.addEventListener("click", shut);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") shut();
    });
  })();
})();
