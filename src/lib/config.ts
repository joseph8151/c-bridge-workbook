export const siteConfig = {
  brandName: "C-BRIDGE",
  brandSub: "성인 어학시험 전문 문제집 & 실전 대비 플랫폼",
  tagline: "BUILD THE SCORE. CROSS THE BRIDGE.",
  taglineKo: "시험은 다르지만, 제대로 준비하는 방법은 같습니다.",
  phone: "010-7343-0536",
  formspreeEndpoint: "https://formspree.io/f/xeajdzrz",
  hours: "연중무휴 08:00 - 22:00 (KST)",
  weekendNotice: "365일, 오전 8시부터 밤 10시까지 상담과 발송 접수를 받습니다.",
  weekendNoticeEn: "Open 365 days a year, 8:00 AM to 10:00 PM (KST).",
  address: "서울 서초구 반포대로18길 62, 엘루크서초",
  bankName: "토스뱅크",
  bankAccountHolder: "김형기",
  bankAccountNumber: "1001-4105-4081",
  shippingTurnaround: "영업시간 내 입금 확인 후 3~10시간 이내 발송",
};

// 모의고사 센터(Mock Test Centre)는 일단 비공개 처리 — 문제집 판매만 노출합니다.
// 기능 자체는 코드에 그대로 남아있고, 나중에 다시 켤 때는 nav/footer 링크만
// 되살리면 됩니다. 기업 문의(BUSINESS)는 수요가 없어 footer/홈페이지 노출을
// 중단했습니다 (페이지 자체는 남아있습니다). 나머지 메뉴는 꼭 필요한 것만 남겨
// 전체 개수를 줄였습니다 (EXAMS/COMPARE는 footer와 홈페이지 내 섹션에서 계속 연결됩니다).
export const navLinks = [
  { label: "BOOKS", href: "/all-books", featured: true },
  { label: "PRICING", href: "/pricing" },
  { label: "ABOUT", href: "/about" },
];

export const footerLinks = {
  SITE: [
    { label: "EXAMS", href: "/exams" },
    { label: "BOOKS", href: "/all-books" },
    { label: "TUTORING", href: "/tutoring" },
    { label: "PRICING", href: "/pricing" },
    { label: "COMPARE", href: "/compare" },
    { label: "CONSULTATION", href: "/consultation" },
  ],
  LEGAL: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보", href: "/privacy" },
  ],
};
