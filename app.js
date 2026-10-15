/**
 * EV Savings: Charging Log — Interactive Web Calculator & Affiliate Gear Hub
 * Multi-Language Edition: English (en) | Українська (uk) | Deutsch (de)
 * Pure Vanilla JS (Zero Dependencies, 100% Client-Side, <0.3s Load)
 * App Store ID: 6811996427 | Amazon Associates Tag: evsavings-20
 */

const AMAZON_TAG = 'evsavings-20';
const APP_STORE_URL = 'https://apps.apple.com/us/app/ev-savings-charging-log/id6811996427';
const SITE_URL = 'https://ishchenko-yurii.github.io';

/**
 * Configurable Affiliate Hardware Catalog (#gear).
 * Update ASINs or links here to propagate across all 3 languages (EN / UK / DE).
 */
const GEAR_CATALOG = [
  {
    id: 'l2',
    icon: '🔌',
    badgeStyle: 'emerald',
    primaryUrl: `https://www.amazon.com/dp/B0BXP2JB64?tag=${AMAZON_TAG}`,
    secondaryUrl: `https://www.amazon.com/s?k=Lectron+NEMA+14-50+Level+2+EV+Charger+J1772&tag=${AMAZON_TAG}`,
    isAffiliate: true,
    i18n: {
      en: {
        badge: 'Best ROI for Night Tariffs',
        title: 'Level 2 Home EV Chargers (NEMA 14-50, 32A / 40A)',
        model: 'Lectron NEMA 14-50 Level 2 EV Charger (240V, 32A / 40A, J1772)',
        why: '6–8x faster than a standard 120V wall outlet. Fits 100% of your charging into cheap off-peak night windows (11 PM – 7 AM) with high ~91–92% wall-to-battery efficiency.',
        primaryCtaText: 'Check Price on Amazon (Lectron L2) ↗',
        secondaryCtaText: 'Browse All 32A/40A NEMA 14-50 Chargers ↗',
      },
      uk: {
        badge: 'Найкраща окупність для нічного тарифу',
        title: 'Домашні зарядні станції Level 2 (32A / 40A, 7.4–9.6 кВт)',
        model: 'Lectron Level 2 EV Charger (240V, 32A / 40A, J1772 / Type 1)',
        why: 'У 6–8 разів швидше за звичайну розетку. Дозволяє на 100% заряджати авто в межах дешевого нічного вікна (23:00–07:00 за тарифом 2.16 ₴/кВт·год) із високим ККД ~91–92%.',
        primaryCtaText: 'Перевірити ціну на Amazon (Lectron L2) ↗',
        secondaryCtaText: 'Переглянути всі зарядні станції 32A/40A ↗',
      },
      de: {
        badge: 'Bester ROI für Nachttarife',
        title: 'Level 2 Heim-Ladegeräte & Mobile Wallboxen (32A / 40A)',
        model: 'Lectron Level 2 EV Charger (240V, 32A / 40A)',
        why: '6–8x schneller als eine Haushaltssteckdose. Lädt Ihr E-Auto zu 100 % im günstigen Nachtstrom-Zeitfenster (23:00–07:00 Uhr) mit ~91–92 % Ladewirkungsgrad.',
        primaryCtaText: 'Preis auf Amazon prüfen (Lectron L2) ↗',
        secondaryCtaText: 'Alle 32A/40A Heim-Ladegeräte ansehen ↗',
      },
    },
  },
  {
    id: 'obd2',
    icon: '🔋',
    badgeStyle: 'cyan',
    primaryUrl: `https://www.amazon.com/dp/B08NFLL3NT?tag=${AMAZON_TAG}`,
    secondaryUrl: `https://www.amazon.com/dp/B073XKQQQW?tag=${AMAZON_TAG}`,
    isAffiliate: true,
    i18n: {
      en: {
        badge: 'Required for SOH Battery Log',
        title: 'Bluetooth 4.0/5.0 (BLE) OBD2 Scanners for Battery SOH',
        model: 'OBDLink CX (Bluetooth 5.1 BLE) & Veepeak OBDCheck BLE+',
        why: 'Reliable iOS & Android BLE scanners with low-power sleep mode that never drain your 12V battery. Read real State of Health (SOH %), degradation, and cell temperatures for your EV Savings logbook.',
        primaryCtaText: 'View OBDLink CX (BLE 5.1) on Amazon ↗',
        secondaryCtaText: 'View Veepeak OBDCheck BLE+ on Amazon ↗',
      },
      uk: {
        badge: 'Необхідний для журналу SOH батареї',
        title: 'Bluetooth 4.0/5.0 (BLE) OBD2-сканери для перевірки SOH %',
        model: 'OBDLink CX (Bluetooth 5.1 BLE) та Veepeak OBDCheck BLE+',
        why: 'Надійні сканери з підтримкою iOS та Android BLE, які не розряджають 12V акумулятор і дозволяють зчитувати реальний SOH %, деградацію та температуру комірок для PDF-сертифіката в EV Savings.',
        primaryCtaText: 'Відкрити OBDLink CX (BLE 5.1) на Amazon ↗',
        secondaryCtaText: 'Відкрити Veepeak OBDCheck BLE+ на Amazon ↗',
      },
      de: {
        badge: 'Empfohlen für SOH-Batterie-Logbuch',
        title: 'Bluetooth 4.0/5.0 (BLE) OBD2-Scanner für Batterie-SOH',
        model: 'OBDLink CX (Bluetooth 5.1 BLE) & Veepeak OBDCheck BLE+',
        why: 'Zuverlässige iOS- & Android-BLE-Scanner mit Ruhemodus zum Schutz der 12V-Batterie. Lesen Sie den echten State of Health (SOH %), Zelldegradation und Akkutemperatur für Ihr EV Savings PDF-Zertifikat aus.',
        primaryCtaText: 'OBDLink CX (BLE 5.1) auf Amazon ansehen ↗',
        secondaryCtaText: 'Veepeak OBDCheck BLE+ auf Amazon ansehen ↗',
      },
    },
  },
  {
    id: 'nacs',
    icon: '⚡',
    badgeStyle: 'emerald',
    primaryUrl: `https://www.amazon.com/dp/B0FFSKH7BM?tag=${AMAZON_TAG}`,
    secondaryUrl: `https://www.amazon.com/s?k=Lectron+Vortex+Plug+NACS+to+CCS+Adapter&tag=${AMAZON_TAG}`,
    isAffiliate: true,
    i18n: {
      en: {
        badge: 'Road Trip Essential',
        title: 'NACS to CCS1 Fast Charging Adapters (Up to 500A / 1000V)',
        model: 'Lectron Vortex Plug — Tesla Supercharger (NACS) to CCS Adapter',
        why: 'Unlocks 15,000+ high-speed Tesla Supercharger V3/V4 stalls for Ford, Rivian, GM, Hyundai, Kia, Genesis, and Polestar EVs with UL-tested safety interlocks.',
        primaryCtaText: 'Check Lectron Vortex NACS Adapter ↗',
        secondaryCtaText: 'Compare UL-Certified NACS Adapters ↗',
      },
      uk: {
        badge: 'Маст-хев для далеких поїздок',
        title: 'Швидкісні адаптери NACS to CCS1 (до 500A / 1000V)',
        model: 'Lectron Vortex Plug — Tesla Supercharger (NACS) to CCS Adapter',
        why: 'Відкриває доступ до швидкісних станцій Tesla Supercharger V3/V4 для власників електромобілів із портом CCS1 (Ford, Rivian, GM, Hyundai, Kia, Genesis, Polestar).',
        primaryCtaText: 'Переглянути адаптер Lectron Vortex NACS ↗',
        secondaryCtaText: 'Порівняти сертифіковані NACS-адаптери ↗',
      },
      de: {
        badge: 'Unverzichtbar für Langstrecken',
        title: 'NACS-auf-CCS1 Schnelllade-Adapter (bis 500A / 1000V)',
        model: 'Lectron Vortex Plug — Tesla Supercharger (NACS) zu CCS Adapter',
        why: 'Schaltet über 15.000 schnelle Tesla V3/V4 Supercharger für kompatible Ford-, Rivian-, GM-, Hyundai-, Kia-, Genesis- und Polestar-Fahrzeuge frei (UL-geprüfte Sicherheitsverriegelung).',
        primaryCtaText: 'Lectron Vortex NACS Adapter ansehen ↗',
        secondaryCtaText: 'UL-zertifizierte NACS-Adapter vergleichen ↗',
      },
    },
  },
  {
    id: 'ios_app',
    icon: '📲',
    badgeStyle: 'cyan',
    primaryUrl: APP_STORE_URL,
    secondaryUrl: null,
    isAffiliate: false,
    i18n: {
      en: {
        badge: 'Available on the App Store',
        title: 'EV Savings: Charging Log (iOS App — Free / $12.99 Lifetime Pro)',
        model: '7-in-1 Offline EV Utility Suite for iPhone & iPad',
        why: 'Full 7-utility toolkit in your pocket: Live Charge Real-Time Tracker, Dual-Tariff Night Timer, Winter & Highway Range Loss, SOH Degradation Log & Official Battery Health PDF Certificate.',
        primaryCtaText: 'Download on the App Store (Free) ',
        secondaryCtaText: null,
      },
      uk: {
        badge: 'Доступно в Apple App Store',
        title: 'EV Savings: Charging Log (iOS-додаток — Free / $12.99 Lifetime Pro)',
        model: '7-в-1 офлайн-утиліта для водіїв електромобілів на iPhone та iPad',
        why: 'Повний пакет із 7 інструментів у кишені: Live-трекер зарядки в реальному часі, таймер нічного тарифу, калькулятор зимової втрати запасу ходу, журнал деградації SOH % та експорт PDF-сертифіката батареї.',
        primaryCtaText: 'Завантажити в App Store (Безкоштовно) ',
        secondaryCtaText: null,
      },
      de: {
        badge: 'Im Apple App Store erhältlich',
        title: 'EV Savings: Charging Log (iOS-App — Gratis / 12,99 $ Lifetime Pro)',
        model: '7-in-1 Offline-EV-Toolkit für iPhone & iPad',
        why: 'Alle 7 EV-Rechner in der Tasche: Echtzeit-Lade-Tracker, Nachttarif-Timer, Winter- & Autobahn-Reichweitenverlust, SOH-Degradations-Logbuch & offizielles Batterie-PDF-Zertifikat.',
        primaryCtaText: 'Im App Store laden (Kostenlos) ',
        secondaryCtaText: null,
      },
    },
  },
];

/**
 * 1-Click EV Vehicle Presets (includes both mi/kWh and kWh/100km)
 */
const EV_PRESETS = {
  tesla_my_m3: {
    id: 'tesla_my_m3',
    name: {
      en: 'Tesla Model Y / 3 LR',
      uk: 'Tesla Model Y / 3 LR',
      de: 'Tesla Model Y / 3 LR',
    },
    batteryKwh: 75,
    efficiencyMiPerKwh: 3.5,
    efficiencyKwhPer100Km: 17.8,
  },
  hyundai_kia: {
    id: 'hyundai_kia',
    name: {
      en: 'Ioniq 5 / EV6 / Niro EV',
      uk: 'Ioniq 5 / EV6 / Niro EV',
      de: 'Ioniq 5 / EV6 / Niro EV',
    },
    batteryKwh: 77,
    efficiencyMiPerKwh: 3.4,
    efficiencyKwhPer100Km: 18.3,
  },
  ford_chevy: {
    id: 'ford_chevy',
    name: {
      en: 'Mach-E / Equinox EV',
      uk: 'Mach-E / ID.4 / Equinox',
      de: 'VW ID.4 / Mach-E / Enyaq',
    },
    batteryKwh: 88,
    efficiencyMiPerKwh: 3.1,
    efficiencyKwhPer100Km: 20.0,
  },
  trucks_rivian: {
    id: 'trucks_rivian',
    name: {
      en: 'F-150 Lightning / R1T',
      uk: 'F-150 Lightning / R1T',
      de: 'Kia EV9 / Audi Q8 e-tron / R1T',
    },
    batteryKwh: 131,
    efficiencyMiPerKwh: 2.2,
    efficiencyKwhPer100Km: 28.2,
  },
  custom: {
    id: 'custom',
    name: {
      en: 'Custom EV',
      uk: 'Власне авто (Custom)',
      de: 'Eigenes E-Auto (Custom)',
    },
    batteryKwh: 75,
    efficiencyMiPerKwh: 3.3,
    efficiencyKwhPer100Km: 18.8,
  },
};

/**
 * Charger Power Levels & Real-World Wall-to-Battery Efficiency
 */
const CHARGER_LEVELS = {
  l1: {
    id: 'l1',
    nominalKw: 1.4,
    efficiency: 0.85,
    isDc: false,
    i18n: {
      en: { label: 'Level 1', sub: '120V / 12A (~85% eff)' },
      uk: { label: 'Розетка L1', sub: '1.4 кВт (~85% ККД)' },
      de: { label: 'Schuko / L1', sub: '1.4 kW (~85% Wirk.)' },
    },
  },
  l2_32a: {
    id: 'l2_32a',
    nominalKw: 7.7,
    efficiency: 0.913,
    isDc: false,
    i18n: {
      en: { label: 'Level 2', sub: '240V / 32A (~91% eff)' },
      uk: { label: 'Level 2 (32A)', sub: '230V / 32A (~91% ККД)' },
      de: { label: 'Wallbox 32A', sub: '230V / 32A (~91% Wirk.)' },
    },
  },
  l2_48a: {
    id: 'l2_48a',
    nominalKw: 11.5,
    efficiency: 0.92,
    isDc: false,
    i18n: {
      en: { label: 'Level 2 Fast', sub: '240V / 48A (~92% eff)' },
      uk: { label: '3-Фазна / L2+', sub: '11.5 кВт (~92% ККД)' },
      de: { label: 'Wallbox 11kW+', sub: '400V / 3-ph (~92% Wirk.)' },
    },
  },
  dcfc: {
    id: 'dcfc',
    nominalKw: 150.0,
    efficiency: 0.94,
    isDc: true,
    i18n: {
      en: { label: 'DC Fast', sub: 'Supercharger / CCS' },
      uk: { label: 'DC Швидкісна', sub: 'Supercharger / CCS' },
      de: { label: 'DC-Schnelllader', sub: 'Supercharger / HPC' },
    },
  },
};

/**
 * Regional Profiles & Full UI Translations (EN / UK / DE)
 */
const LOCALES = {
  en: {
    code: 'en',
    isMetric: false,
    currencySymbol: '$',
    currencyPrefix: true,
    distUnit: 'mi',
    effUnit: 'mi/kWh',
    rateSlider: { min: 0.04, max: 0.60, step: 0.01, defaultHome: 0.14 },
    dcSlider: { min: 0.15, max: 0.85, step: 0.01, defaultDc: 0.48 },
    distSlider: { min: 200, max: 3500, step: 50, defaultDist: 1000 },
    effSlider: { min: 1.5, max: 5.5, step: 0.1 },
    defaultGasCons: 28,
    defaultGasPrice: 3.50,
    quickRates: [
      { rate: 0.08, label: '🌙 Night Off-Peak $0.08/kWh' },
      { rate: 0.14, label: '🇺🇸 US Avg $0.14/kWh' },
      { rate: 0.28, label: '☀️ High Tier $0.28/kWh' },
    ],
    ui: {
      navCalc: 'Calculator',
      navGear: 'Recommended Gear',
      navFaq: 'FAQ',
      navApp: ' iOS App',
      topEyebrow: ' Official Companion iOS Utility',
      calloutTitle: 'EV Savings: Charging Log for iOS',
      calloutSub: '7-in-1 Offline EV Utility: Real-Time Live Charge Tracker, Dual-Tariff Night Timer, Winter Range Loss & SOH Battery PDF Certificates.',
      badgeOffline: '🔒 100% Offline-First',
      badgeNoAcc: '🚫 No Account Required',
      badgeDrivers: '⚡ Built for US & EU EV Drivers',
      btnDownloadTop: ' Download on the App Store',
      heroTitleHtml: 'EV Charging <span class="text-cyan">Time &amp; Cost</span> Calculator vs. <span class="text-emerald">Gas &amp; DC Fast</span>',
      heroSub: '100% client-side math with real wall-to-battery efficiency losses and 80% DC fast-charge taper curves. Zero ads, zero sign-ups.',
      step1Title: '1. Select Vehicle Preset',
      step1Pill: '1-Click Setup',
      customPresetSub: 'Manual kWh & eff',
      lblBattery: 'Battery Capacity',
      lblEfficiency: 'EV Efficiency',
      lblCurrentSoc: 'Current SoC %',
      lblTargetSoc: 'Target SoC %',
      lblChargerLevel: 'Charger Level / Power Source',
      lblWallLossNote: 'Includes wall loss',
      lblHomeRate: 'Home Electricity Rate ($/kWh)',
      lblDcRate: 'Public DC Fast Rate',
      lblMonthlyDist: 'Monthly Driving',
      lblGasCons: '⛽ Comparable Gas MPG',
      lblGasPrice: '⛽ Regular Gas ($/gal)',
      step2Title: '2. Live Results Dashboard',
      step2Pill: 'Real-Time Math',
      lblEnergyAdded: 'Energy Added',
      lblChargeTime: 'Estimated Charge Time',
      lblSessionComparison: 'Single Session Cost Comparison',
      lblHomeCharge: '🏠 Home Charge',
      lblPublicDc: '⚡ Public DC Fast',
      lblEqGas: '⛽ Equivalent Gas',
      savingsEyebrow: '💰 Annual & Monthly Home Charging ROI',
      btnCopy: '📋 Copy My EV Savings Summary (for Reddit / Threads)',
      btnCopied: '✅ Copied! Ready to paste on Reddit / Threads',
      bottomEyebrow: '📲 Want Real-Time Live Tracking & SOH Battery Logs?',
      btnDownloadBottom: ' Get EV Savings on iOS',
      gearHeaderTitle: '⚡ Recommended EV Gear Hub',
      gearHeaderSub: 'Hardware tested and selected for high-efficiency home charging, accurate SOH battery telemetry, and reliable NACS road-trip fast charging.',
      gearHighlightBanner: '🎯 Recommended for Your Setup',
      disclosurePrefix: 'Affiliate Disclosure:',
      disclosureText: 'As an Amazon Associate I earn from qualifying purchases. Product recommendations are independently selected based on real-world EV charging efficiency and compatibility.',
      faqHeaderTitle: 'Frequently Asked EV Charging Questions',
      faqHeaderSub: 'Key engineering benchmarks for home charging efficiency, DC fast taper curves, and battery health.',
      faqs: [
        {
          q: 'How much does it cost to charge an EV at home vs. gas?',
          a: 'Adding 45 kWh (20% to 80% on a 75 kWh battery) draws ~49.3 kWh from the wall at 91.3% Level 2 efficiency—costing just <strong>$6.90</strong> at $0.14/kWh (or <strong>$3.94</strong> on an $0.08/kWh night tariff), compared to ~$19.69 in gas or $21.60 at a $0.48/kWh DC Fast station.',
        },
        {
          q: 'How long does Level 1 vs. Level 2 charging take?',
          a: 'A 120V / 12A Level 1 outlet delivers only ~1.19 kW net to the pack (~85% efficiency), requiring <strong>32–38 hours</strong> for a 20%→80% session. A 240V / 32A–40A Level 2 charger (NEMA 14-50) cuts that to <strong>4.7–5.8 hours</strong>, easily finishing inside overnight off-peak windows.',
        },
        {
          q: 'Why does DC Fast charging slow down above 80%?',
          a: 'Above 80% SoC, your EV\'s Battery Management System (BMS) enters the Constant Voltage (CV) taper phase to prevent lithium plating. Charging speed drops to ~40–50 kW average, making 80%→100% take nearly as long as 20%→80%.',
        },
        {
          q: 'How to check EV battery State of Health (SOH)?',
          a: 'Pair a low-power Bluetooth 5.0 BLE OBD2 scanner (such as the <strong>OBDLink CX</strong> or <strong>Veepeak OBDCheck BLE+</strong>) with your phone, and log your pack\'s SOH % and full-charge range in the <strong>EV Savings: Charging Log</strong> iOS app to export a PDF Battery Health Certificate.',
        },
      ],
    },
  },
  uk: {
    code: 'uk',
    isMetric: true,
    currencySymbol: '₴',
    currencyPrefix: false,
    distUnit: 'км',
    effUnit: 'кВт·год/100 км',
    rateSlider: { min: 1.00, max: 12.00, step: 0.08, defaultHome: 4.32 },
    dcSlider: { min: 8.00, max: 26.00, step: 0.50, defaultDc: 16.50 },
    distSlider: { min: 300, max: 5000, step: 100, defaultDist: 1500 },
    effSlider: { min: 11.0, max: 35.0, step: 0.5 },
    defaultGasCons: 8.5,
    defaultGasPrice: 58.00,
    quickRates: [
      { rate: 2.16, label: '🌙 Нічний тариф 2.16 ₴' },
      { rate: 4.32, label: '🇺🇦 YASNO День 4.32 ₴' },
      { rate: 8.50, label: '🏢 Комерційний 8.50 ₴' },
    ],
    ui: {
      navCalc: 'Калькулятор',
      navGear: 'Обладнання',
      navFaq: 'Часті питання',
      navApp: ' iOS Додаток',
      topEyebrow: ' Офіційний iOS-додаток екосистеми',
      calloutTitle: 'EV Savings: Charging Log для iOS',
      calloutSub: '7-в-1 офлайн-утиліта для EV: Live-трекер зарядки в реальному часі, таймер нічного тарифу, зимовий запас ходу та PDF-сертифікат здоров’я батареї (SOH %).',
      badgeOffline: '🔒 100% Офлайн-архітектура',
      badgeNoAcc: '🚫 Без реєстрації та акаунтів',
      badgeDrivers: '⚡ Створено для водіїв США, ЄС та України',
      btnDownloadTop: ' Завантажити в App Store',
      heroTitleHtml: 'Калькулятор <span class="text-cyan">часу та вартості</span> зарядки EV проти <span class="text-emerald">бензину і DC Fast</span>',
      heroSub: 'Миттєвий розрахунок у браузері з урахуванням реальних втрат ККД розетки та кривої сповільнення DC-зарядки після 80%. Без реклами та реєстрації.',
      step1Title: '1. Оберіть модель електромобіля',
      step1Pill: 'Пресети в 1 клік',
      customPresetSub: 'Власні кВт·год та витрата',
      lblBattery: 'Ємність батареї',
      lblEfficiency: 'Витрата енергії',
      lblCurrentSoc: 'Поточний заряд %',
      lblTargetSoc: 'Цільовий заряд %',
      lblChargerLevel: 'Потужність зарядки / Джерело',
      lblWallLossNote: 'Враховано ККД мережі',
      lblHomeRate: 'Домашній тариф (₴/кВт·год)',
      lblDcRate: 'Публічна швидка DC зарядка',
      lblMonthlyDist: 'Місячний пробіг',
      lblGasCons: '⛽ Витрата ДВЗ (л/100 км)',
      lblGasPrice: '⛽ Ціна пального (₴/л)',
      step2Title: '2. Табло результатів наживо',
      step2Pill: 'Розрахунок миттєво',
      lblEnergyAdded: 'Додано енергії',
      lblChargeTime: 'Орієнтовний час зарядки',
      lblSessionComparison: 'Вартість однієї сесії зарядки',
      lblHomeCharge: '🏠 Вдома з розетки',
      lblPublicDc: '⚡ Публічна DC Fast',
      lblEqGas: '⛽ Аналог на бензині',
      savingsEyebrow: '💰 Річна та місячна вигода домашньої зарядки',
      btnCopy: '📋 Скопіювати мій розрахунок економії (для соцмереж / чатів)',
      btnCopied: '✅ Скопійовано! Готово до вставки у Threads / Telegram / Reddit',
      bottomEyebrow: '📲 Потрібен Live-трекер зарядки та журнал деградації SOH?',
      btnDownloadBottom: ' Завантажити EV Savings на iOS',
      gearHeaderTitle: '⚡ Рекомендоване обладнання для EV (Gear Hub)',
      gearHeaderSub: 'Перевірені домашні зарядні станції Level 2, Bluetooth BLE OBD2-сканери для діагностики SOH % батареї та швидкісні адаптери Tesla Supercharger.',
      gearHighlightBanner: '🎯 Рекомендовано для вашої конфігурації',
      disclosurePrefix: 'Партнерський дисклеймер (Affiliate Disclosure):',
      disclosureText: 'As an Amazon Associate I earn from qualifying purchases. Product recommendations are independently selected based on real-world EV charging efficiency and compatibility.',
      faqHeaderTitle: 'Часті запитання про зарядку електромобіля',
      faqHeaderSub: 'Інженерні розрахунки ККД домашньої зарядки, кривої падіння потужності після 80% та діагностики здоров’я акумулятора.',
      faqs: [
        {
          q: 'Скільки коштує зарядити електромобіль вдома порівняно з бензином?',
          a: 'Додавання 45 кВт·год (з 20% до 80% на батареї 75 кВт·год) споживає ~49.3 кВт·год з розетки (ККД 91.3%). За денним тарифом YASNO (4.32 ₴) це коштує <strong>213 ₴</strong>, а за нічним тарифом (2.16 ₴) — лише <strong>106 ₴</strong> за +253 км пробігу проти ~1 246 ₴ на бензині (8.5 л/100 км по 58 ₴/л).',
        },
        {
          q: 'Скільки часу займає зарядка від звичайної розетки проти станції Level 2 (32A)?',
          a: 'Штатна однофазна розетка на малих струмах (1.4–2.3 кВт, ККД ~85%) заряджає 45 кВт·год понад <strong>24–37 годин</strong>. Силова станція Level 2 на 32A (7.4–7.7 кВт) скорочує цей час до <strong>~5.8 годин</strong>, дозволяючи повністю зарядити авто за ніч у межах пільгового вікна (23:00–07:00).',
        },
        {
          q: 'Чому швидкісна зарядка DC Fast різко сповільнюється після 80%?',
          a: 'Після досягнення 80% SoC система керування батареєю (BMS) переходить у режим постійної напруги (CV), щоб захистити літієві комірки від перегріву. Середня потужність падає до ~40–50 кВт, тому останні 20% (80%→100%) займають майже стільки ж часу, як і зарядка з 20% до 80%.',
        },
        {
          q: 'Як перевірити реальний стан здоров’я батареї (SOH %)?',
          a: 'Підключіть Bluetooth 5.0 BLE OBD2-сканер (наприклад, <strong>OBDLink CX</strong> або <strong>Veepeak OBDCheck BLE+</strong>) та ведіть журнал запасу ходу і SOH % у iOS-додатку <strong>EV Savings: Charging Log</strong> із можливістю генерації офіційного PDF-сертифіката батареї для купівлі чи продажу авто.',
        },
      ],
    },
  },
  de: {
    code: 'de',
    isMetric: true,
    currencySymbol: '€',
    currencyPrefix: false,
    distUnit: 'km',
    effUnit: 'kWh/100 km',
    rateSlider: { min: 0.10, max: 0.65, step: 0.01, defaultHome: 0.30 },
    dcSlider: { min: 0.35, max: 0.89, step: 0.01, defaultDc: 0.59 },
    distSlider: { min: 300, max: 5000, step: 100, defaultDist: 1500 },
    effSlider: { min: 11.0, max: 35.0, step: 0.5 },
    defaultGasCons: 7.5,
    defaultGasPrice: 1.75,
    quickRates: [
      { rate: 0.19, label: '🌙 Nachttarif / Tibber 0.19 €/kWh' },
      { rate: 0.30, label: '🇩🇪 DE Schnitt 0.30 €/kWh' },
      { rate: 0.40, label: '☀️ Grundversorgung 0.40 €/kWh' },
    ],
    ui: {
      navCalc: 'Lade-Rechner',
      navGear: 'EV-Zubehör',
      navFaq: 'FAQ',
      navApp: ' iOS App',
      topEyebrow: ' Offizielle iOS Companion-App',
      calloutTitle: 'EV Savings: Charging Log für iOS',
      calloutSub: '7-in-1 Offline-EV-App: Echtzeit-Lade-Tracker, Nachttarif-Timer, Winter-Reichweitenrechner & SOH-Batterie-PDF-Zertifikate.',
      badgeOffline: '🔒 100% Offline-First',
      badgeNoAcc: '🚫 Kein Konto erforderlich',
      badgeDrivers: '⚡ Für E-Auto-Fahrer in DE, AT, CH & US',
      btnDownloadTop: ' Im App Store laden',
      heroTitleHtml: 'E-Auto <span class="text-cyan">Ladezeit- &amp; Kostenrechner</span> vs. <span class="text-emerald">Benzin &amp; DC-Schnellladen</span>',
      heroSub: '100% lokale Berechnung im Browser inkl. realer Ladeverluste und 80%-DC-Ladekurve (Taper Cliff). Keine Werbung, keine Registrierung.',
      step1Title: '1. Fahrzeug-Preset wählen',
      step1Pill: '1-Klick-Auswahl',
      customPresetSub: 'Manuelle kWh & Verbrauch',
      lblBattery: 'Batteriekapazität',
      lblEfficiency: 'Stromverbrauch',
      lblCurrentSoc: 'Aktueller Ladestand (SoC %)',
      lblTargetSoc: 'Ziel-Ladestand (SoC %)',
      lblChargerLevel: 'Ladeleistung / Stromquelle',
      lblWallLossNote: 'Inkl. Ladeverlusten',
      lblHomeRate: 'Hausstromtarif (€/kWh)',
      lblDcRate: 'Öffentlicher DC-Schnellladetarif',
      lblMonthlyDist: 'Monatliche Fahrleistung',
      lblGasCons: '⛽ Verbrenner (L/100 km)',
      lblGasPrice: '⛽ Benzinpreis (€/L)',
      step2Title: '2. Live-Ergebnisse & Ersparnis',
      step2Pill: 'Echtzeit-Rechnung',
      lblEnergyAdded: 'Geladene Energie',
      lblChargeTime: 'Geschätzte Ladezeit',
      lblSessionComparison: 'Kostenvergleich für diesen Ladevorgang',
      lblHomeCharge: '🏠 Zuhause laden',
      lblPublicDc: '⚡ DC-Schnelllader',
      lblEqGas: '⛽ Benzin-Äquivalent',
      savingsEyebrow: '💰 Jährliche & Monatliche Ersparnis beim Heimladen',
      btnCopy: '📋 Meine EV-Ersparnis kopieren (für Reddit / Threads / Foren)',
      btnCopied: '✅ Kopiert! Bereit zum Einfügen auf Reddit / Threads',
      bottomEyebrow: '📲 Echtzeit-Lade-Tracker & SOH-Batterie-Logbuch gesucht?',
      btnDownloadBottom: ' EV Savings für iOS laden',
      gearHeaderTitle: '⚡ Empfohlenes EV-Zubehör (Gear Hub)',
      gearHeaderSub: 'Geprüfte Hardware für effizientes Heimladen, präzise SOH-Batteriediagnose per OBD2 und zuverlässige Schnelllade-Adapter.',
      gearHighlightBanner: '🎯 Empfohlen für Ihr Setup',
      disclosurePrefix: 'Affiliate-Hinweis (Affiliate Disclosure):',
      disclosureText: 'As an Amazon Associate I earn from qualifying purchases. Product recommendations are independently selected based on real-world EV charging efficiency and compatibility.',
      faqHeaderTitle: 'Häufig gestellte Fragen zum E-Auto-Laden (FAQ)',
      faqHeaderSub: 'Wichtige Richtwerte zu Ladeverlusten, DC-Ladekurven ab 80 % und Batterie-Gesundheit (SOH).',
      faqs: [
        {
          q: 'Was kostet das Laden eines E-Autos zu Hause im Vergleich zu Benzin?',
          a: 'Das Nachladen von 45 kWh (20 % auf 80 % bei einem 75-kWh-Akku) zieht bei 91,3 % Wallbox-Wirkungsgrad ca. 49,3 kWh aus dem Netz. Bei 0,30 €/kWh kostet das nur <strong>14,79 €</strong> (oder <strong>9,36 €</strong> mit 0,19 €/kWh Nachttarif/Tibber) für +253 km Reichweite — verglichen mit ~33,18 € für Benzin oder 26,55 € am DC-Schnelllader.',
        },
        {
          q: 'Wie lange dauert Schuko/Level-1-Laden im Vergleich zu einer Wallbox?',
          a: 'Eine Standard-Steckdose (ca. 85 % Wirkungsgrad wegen dauerhaft aktiver Bordelektronik) benötigt über <strong>24 bis 37 Stunden</strong> für 45 kWh. Eine 230V/400V Wallbox (7,4–11 kW) verkürzt denselben Ladevorgang auf <strong>4 bis 5,8 Stunden</strong> — perfekt für günstige Nachtstrom-Zeitfenster.',
        },
        {
          q: 'Warum wird DC-Schnellladen über 80 % SoC deutlich langsamer?',
          a: 'Ab 80 % Ladestand wechselt das Batteriemanagementsystem (BMS) in die Konstantspannungsphase (CV), um die Lithium-Zellen zu schonen. Die durchschnittliche Ladeleistung fällt auf ca. 40–50 kW, sodass die letzten 20 % (80 %→100 %) fast genauso lange dauern wie 20 %→80 %.',
        },
        {
          q: 'Wie prüfe ich den Batterie-Gesundheitszustand (State of Health / SOH %)?',
          a: 'Verbinden Sie einen stromsparenden Bluetooth-5.0-BLE-OBD2-Scanner (z. B. <strong>OBDLink CX</strong> oder <strong>Veepeak OBDCheck BLE+</strong>) mit Ihrem iPhone und protokollieren Sie SOH % sowie Reichweite in der iOS-App <strong>EV Savings: Charging Log</strong> inkl. Export eines offiziellen Batterie-PDF-Zertifikats.',
        },
      ],
    },
  },
};

/**
 * Reactive Calculator State
 */
const state = {
  lang: 'en',
  presetId: 'tesla_my_m3',
  batteryKwh: 75,
  efficiencyMiPerKwh: 3.5,
  efficiencyKwhPer100Km: 17.8,
  currentSoc: 20,
  targetSoc: 80,
  chargerId: 'l2_32a',
  homeRate: 0.14,
  dcRate: 0.48,
  monthlyDistance: 1000,
  gasConsumption: 28,
  gasPrice: 3.50,
  lastSummaryText: '',
};

/**
 * Formats a currency amount according to current locale rules.
 */
function formatMoney(amount, decimals = 2) {
  const loc = LOCALES[state.lang] || LOCALES.en;
  const fixed = Number(amount).toFixed(decimals);
  if (loc.currencyPrefix) {
    return `${loc.currencySymbol}${fixed}`;
  }
  return `${fixed} ${loc.currencySymbol}`;
}

/**
 * Formats integer currency amounts (e.g. annual/monthly savings).
 */
function formatMoneyInt(amount) {
  const loc = LOCALES[state.lang] || LOCALES.en;
  const rounded = Math.round(amount).toLocaleString(
    state.lang === 'de' ? 'de-DE' : state.lang === 'uk' ? 'uk-UA' : 'en-US'
  );
  if (loc.currencyPrefix) {
    return `${loc.currencySymbol}${rounded}`;
  }
  return `${rounded} ${loc.currencySymbol}`;
}

/**
 * Calculates charging duration (in hours) accounting for AC efficiency
 * and the 80%–100% DC Fast Charging CC/CV taper cliff.
 */
function calculateChargingHours(batteryKwh, startSoc, targetSoc, charger) {
  const deltaSoc = Math.max(0, targetSoc - startSoc);
  if (deltaSoc <= 0) return 0;

  if (!charger.isDc) {
    const packEnergyKwh = batteryKwh * (deltaSoc / 100);
    const effectivePackKw = charger.id === 'l1'
      ? charger.nominalKw * charger.efficiency
      : charger.nominalKw;
    return packEnergyKwh / Math.max(0.1, effectivePackKw);
  }

  // DC Fast 2-Stage Taper Curve:
  // 0% -> 80%: average ~120 kW on a 150 kW stall
  // 80% -> 100%: tapers sharply to ~45 kW average to protect lithium cells
  const pre80Start = Math.min(startSoc, 80);
  const pre80End = Math.min(targetSoc, 80);
  const post80Start = Math.max(startSoc, 80);
  const post80End = Math.max(targetSoc, 80);

  const kwhBelow80 = batteryKwh * (Math.max(0, pre80End - pre80Start) / 100);
  const kwhAbove80 = batteryKwh * (Math.max(0, post80End - post80Start) / 100);

  const hoursBelow80 = kwhBelow80 / 120.0;
  const hoursAbove80 = kwhAbove80 / 45.0;
  return hoursBelow80 + hoursAbove80;
}

/**
 * Formats decimal hours into localized "Xh Ym" / "X год Y хв" / "Xh Ym"
 */
function formatDuration(hours) {
  const totalMinutes = Math.max(1, Math.round(hours * 60));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const mPadded = m < 10 ? '0' + m : String(m);

  if (state.lang === 'uk') {
    if (h === 0) return `${m} хв`;
    return `${h} год ${mPadded} хв`;
  }
  if (h === 0) return `${m}m`;
  return `${h}h ${mPadded}m`;
}

/**
 * Switches the active language ('en', 'uk', 'de'), updates regional sliders,
 * re-renders static UI labels, Gear Hub, FAQ, and recalculates all values.
 */
function setLanguage(langCode, updateUrl = true) {
  const normalized = ['en', 'uk', 'de'].includes(langCode) ? langCode : 'en';
  const prevLang = state.lang;
  state.lang = normalized;

  const loc = LOCALES[normalized];
  document.documentElement.lang = normalized;

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('evsavings_lang', normalized);
    }
  } catch (_) {}

  if (updateUrl && typeof window !== 'undefined' && window.history && window.history.replaceState) {
    try {
      const url = new URL(window.location.href);
      if (normalized === 'en') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', normalized);
      }
      window.history.replaceState({}, '', url.toString());
    } catch (_) {}
  }

  // Toggle active language button
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === normalized);
  });

  // Update regional defaults when switching language (or on initial non-EN load)
  if (prevLang !== normalized) {
    state.homeRate = loc.rateSlider.defaultHome;
    state.dcRate = loc.dcSlider.defaultDc;
    state.monthlyDistance = loc.distSlider.defaultDist;
    state.gasConsumption = loc.defaultGasCons;
    state.gasPrice = loc.defaultGasPrice;
  }

  // Update slider min/max/step/value in DOM
  const effInput = document.getElementById('input-efficiency');
  if (effInput) {
    effInput.min = loc.effSlider.min;
    effInput.max = loc.effSlider.max;
    effInput.step = loc.effSlider.step;
    effInput.value = loc.isMetric ? state.efficiencyKwhPer100Km : state.efficiencyMiPerKwh;
  }
  setText('limit-eff-min', `${loc.effSlider.min} ${loc.effUnit}`);
  setText('limit-eff-max', `${loc.effSlider.max} ${loc.effUnit}`);

  const homeRateInput = document.getElementById('input-home-rate');
  if (homeRateInput) {
    homeRateInput.min = loc.rateSlider.min;
    homeRateInput.max = loc.rateSlider.max;
    homeRateInput.step = loc.rateSlider.step;
    homeRateInput.value = state.homeRate;
  }

  const dcRateInput = document.getElementById('input-dc-rate');
  if (dcRateInput) {
    dcRateInput.min = loc.dcSlider.min;
    dcRateInput.max = loc.dcSlider.max;
    dcRateInput.step = loc.dcSlider.step;
    dcRateInput.value = state.dcRate;
  }

  const distInput = document.getElementById('input-monthly-miles');
  if (distInput) {
    distInput.min = loc.distSlider.min;
    distInput.max = loc.distSlider.max;
    distInput.step = loc.distSlider.step;
    distInput.value = state.monthlyDistance;
  }

  const gasMpgInput = document.getElementById('input-gas-mpg');
  if (gasMpgInput) {
    gasMpgInput.step = loc.isMetric ? '0.5' : '1';
    gasMpgInput.value = state.gasConsumption;
  }

  const gasPriceInput = document.getElementById('input-gas-price');
  if (gasPriceInput) {
    gasPriceInput.step = normalized === 'uk' ? '0.50' : '0.05';
    gasPriceInput.value = state.gasPrice.toFixed(2);
  }

  // Render Quick Rate Buttons
  const quickRateBar = document.getElementById('quick-rate-bar');
  if (quickRateBar) {
    quickRateBar.innerHTML = loc.quickRates
      .map((qr) => {
        const isActive = Math.abs(qr.rate - state.homeRate) < 0.005;
        return `<button type="button" class="quick-rate-btn ${isActive ? 'active' : ''}" data-rate="${qr.rate}">${qr.label}</button>`;
      })
      .join('');
    attachQuickRateListeners();
  }

  // Update Vehicle Preset Chip texts
  const presetChips = document.querySelectorAll('.preset-chip');
  presetChips.forEach((chip) => {
    const key = chip.dataset.preset;
    const preset = EV_PRESETS[key];
    if (!preset) return;
    const nameSpan = chip.querySelector('.preset-chip-name');
    const specSpan = chip.querySelector('.preset-chip-specs');
    if (nameSpan) nameSpan.textContent = preset.name[normalized] || preset.name.en;
    if (specSpan) {
      if (key === 'custom') {
        specSpan.textContent = loc.ui.customPresetSub;
      } else if (loc.isMetric) {
        specSpan.textContent = `${preset.batteryKwh} kWh • ${preset.efficiencyKwhPer100Km} ${loc.effUnit}`;
      } else {
        specSpan.textContent = `${preset.batteryKwh} kWh • ${preset.efficiencyMiPerKwh} ${loc.effUnit}`;
      }
    }
  });

  // Update Charger Tabs
  const chargerTabs = document.querySelectorAll('.charger-tab');
  chargerTabs.forEach((tab) => {
    const cid = tab.dataset.charger;
    const cObj = CHARGER_LEVELS[cid];
    if (!cObj) return;
    const cLoc = cObj.i18n[normalized] || cObj.i18n.en;
    const titleEl = tab.querySelector('.charger-tab-title');
    const subEl = tab.querySelector('.charger-tab-sub');
    if (titleEl) titleEl.textContent = cLoc.label;
    if (subEl) subEl.textContent = cLoc.sub;
  });

  // Update Static UI Labels
  const u = loc.ui;
  setText('nav-calc', u.navCalc);
  setText('nav-gear', u.navGear);
  setText('nav-faq', u.navFaq);
  setText('nav-app', u.navApp);

  setText('top-eyebrow', u.topEyebrow);
  setText('top-callout-title', u.calloutTitle);
  setHtml('top-callout-sub', `<em>${u.calloutSub}</em>`);
  setText('top-badge-1', u.badgeOffline);
  setText('top-badge-2', u.badgeNoAcc);
  setText('top-badge-3', u.badgeDrivers);
  setText('top-download-btn', u.btnDownloadTop);

  setHtml('hero-title', u.heroTitleHtml);
  setText('hero-sub', u.heroSub);

  setText('step-1-title', u.step1Title);
  setText('step-1-pill', u.step1Pill);
  setText('lbl-battery', u.lblBattery);
  setText('lbl-efficiency', u.lblEfficiency);
  setText('lbl-current-soc', u.lblCurrentSoc);
  setText('lbl-target-soc', u.lblTargetSoc);
  setText('lbl-charger-level', u.lblChargerLevel);
  setText('lbl-wall-loss-note', u.lblWallLossNote);
  setText('lbl-home-rate', u.lblHomeRate);
  setText('lbl-dc-rate', u.lblDcRate);
  setText('lbl-monthly-dist', u.lblMonthlyDist);
  setText('lbl-gas-cons', u.lblGasCons);
  setText('lbl-gas-price', u.lblGasPrice);

  setText('step-2-title', u.step2Title);
  setText('step-2-pill', u.step2Pill);
  setText('lbl-energy-added', u.lblEnergyAdded);
  setText('lbl-charge-time', u.lblChargeTime);
  setText('lbl-home-charge', u.lblHomeCharge);
  setText('lbl-public-dc', u.lblPublicDc);
  setText('lbl-eq-gas', u.lblEqGas);
  setText('savings-eyebrow', u.savingsEyebrow);
  setText('btn-copy-summary', u.btnCopy);

  setText('bottom-eyebrow', u.bottomEyebrow);
  setText('bottom-callout-title', u.calloutTitle);
  setHtml('bottom-callout-sub', `<em>${u.calloutSub}</em>`);
  setText('bottom-badge-1', u.badgeOffline);
  setText('bottom-badge-2', u.badgeNoAcc);
  setText('bottom-badge-3', u.badgeDrivers);
  setText('bottom-download-btn', u.btnDownloadBottom);

  setText('gear-header-title', u.gearHeaderTitle);
  setText('gear-header-sub', u.gearHeaderSub);

  const disclosureHtml = `<strong>${u.disclosurePrefix}</strong> <em>${u.disclosureText}</em>`;
  setHtml('disclosure-top', disclosureHtml);
  setHtml('disclosure-bottom', disclosureHtml);
  setHtml('disclosure-footer', disclosureHtml);

  setText('faq-header-title', u.faqHeaderTitle);
  setText('faq-header-sub', u.faqHeaderSub);
  renderFaqCards();
  renderGearCatalog();
  recalculateAll();
}

/**
 * Renders the FAQ section in the active language.
 */
function renderFaqCards() {
  const faqContainer = document.getElementById('faq-grid-container');
  if (!faqContainer) return;
  const loc = LOCALES[state.lang] || LOCALES.en;
  faqContainer.innerHTML = loc.ui.faqs
    .map(
      (f) => `
      <article class="faq-card">
        <h3>${f.q}</h3>
        <p>${f.a}</p>
      </article>
    `
    )
    .join('');
}

/**
 * Core calculation routine invoked on every slider/tab/preset/language input.
 */
function recalculateAll() {
  const loc = LOCALES[state.lang] || LOCALES.en;

  // Ensure Target SoC is always at least Current SoC + 5%
  if (state.currentSoc > 95) state.currentSoc = 95;
  if (state.targetSoc < 10) state.targetSoc = 10;
  if (state.targetSoc <= state.currentSoc) {
    state.targetSoc = Math.min(100, state.currentSoc + 5);
    if (state.targetSoc <= state.currentSoc) {
      state.currentSoc = Math.max(0, state.targetSoc - 5);
    }
  }

  const charger = CHARGER_LEVELS[state.chargerId] || CHARGER_LEVELS.l2_32a;
  const homeBaselineEfficiency = CHARGER_LEVELS.l2_32a.efficiency; // 0.913

  const socDelta = state.targetSoc - state.currentSoc;
  const packEnergyKwh = state.batteryKwh * (socDelta / 100);
  const wallEnergyKwh = packEnergyKwh / charger.efficiency;

  // Calculate Added Range & Monthly Energy based on Imperial (EN) or Metric (UK / DE)
  let addedDistance = 0;
  let sessionGasCost = 0;
  let monthlyPackKwh = 0;
  let monthlyGasCost = 0;

  if (loc.isMetric) {
    const kwhPer100 = Math.max(5.0, state.efficiencyKwhPer100Km);
    addedDistance = (packEnergyKwh / kwhPer100) * 100.0;
    sessionGasCost = (addedDistance / 100.0) * state.gasConsumption * state.gasPrice;
    monthlyPackKwh = (state.monthlyDistance / 100.0) * kwhPer100;
    monthlyGasCost = (state.monthlyDistance / 100.0) * state.gasConsumption * state.gasPrice;
  } else {
    const miPerKwh = Math.max(0.5, state.efficiencyMiPerKwh);
    addedDistance = packEnergyKwh * miPerKwh;
    sessionGasCost = (addedDistance / Math.max(1, state.gasConsumption)) * state.gasPrice;
    monthlyPackKwh = state.monthlyDistance / miPerKwh;
    monthlyGasCost = (state.monthlyDistance / Math.max(1, state.gasConsumption)) * state.gasPrice;
  }

  // Charging time for current selection & comparison time on L2 32A
  const chargingHours = calculateChargingHours(
    state.batteryKwh,
    state.currentSoc,
    state.targetSoc,
    charger
  );
  const l2ComparisonHours = calculateChargingHours(
    state.batteryKwh,
    state.currentSoc,
    state.targetSoc,
    CHARGER_LEVELS.l2_32a
  );

  // Single Session Cost Comparison
  const homeSessionEfficiency = charger.isDc ? homeBaselineEfficiency : charger.efficiency;
  const homeWallKwhForSession = packEnergyKwh / homeSessionEfficiency;
  const sessionHomeCost = homeWallKwhForSession * state.homeRate;
  const sessionDcCost = packEnergyKwh * state.dcRate;

  // Monthly & Annual Costs
  const monthlyHomeWallKwh = monthlyPackKwh / homeBaselineEfficiency;
  const monthlyHomeCost = monthlyHomeWallKwh * state.homeRate;
  const monthlyDcCost = monthlyPackKwh * state.dcRate;

  const monthlySavingsVsGas = Math.max(0, monthlyGasCost - monthlyHomeCost);
  const annualSavingsVsGas = Math.round(monthlySavingsVsGas * 12);
  const annualSavingsVsDc = Math.round(Math.max(0, (monthlyDcCost - monthlyHomeCost) * 12));

  // Update DOM Readouts for Controls
  const kwhLabel = state.lang === 'uk' ? 'кВт·год' : 'kWh';
  const kwLabel = state.lang === 'uk' ? 'кВт' : 'kW';
  const perMonthLabel = state.lang === 'uk' ? 'міс' : state.lang === 'de' ? 'Monat' : 'mo';

  setText('val-battery', `${state.batteryKwh} ${kwhLabel}`);
  if (loc.isMetric) {
    setText('val-efficiency', `${state.efficiencyKwhPer100Km.toFixed(1)} ${loc.effUnit}`);
  } else {
    setText('val-efficiency', `${state.efficiencyMiPerKwh.toFixed(1)} ${loc.effUnit}`);
  }
  setText('val-current-soc', `${state.currentSoc}%`);
  setText('val-target-soc', `${state.targetSoc}%`);
  setText('val-home-rate', `${formatMoney(state.homeRate)}/${kwhLabel}`);
  setText('val-dc-rate', `${formatMoney(state.dcRate)}/${kwhLabel}`);
  setText(
    'val-monthly-miles',
    `${state.monthlyDistance.toLocaleString('en-US')} ${loc.distUnit}/${perMonthLabel}`
  );

  const sliderCurrentSoc = document.getElementById('input-current-soc');
  const sliderTargetSoc = document.getElementById('input-target-soc');
  if (sliderCurrentSoc && Number(sliderCurrentSoc.value) !== state.currentSoc) {
    sliderCurrentSoc.value = state.currentSoc;
  }
  if (sliderTargetSoc && Number(sliderTargetSoc.value) !== state.targetSoc) {
    sliderTargetSoc.value = state.targetSoc;
  }

  // Update Live Results Dashboard
  const chargerLoc = charger.i18n[state.lang] || charger.i18n.en;
  const effPct = Math.round(charger.efficiency * 100);

  setText('res-energy-pack', `${packEnergyKwh.toFixed(1)} ${kwhLabel}`);
  if (state.lang === 'uk') {
    setText(
      'res-energy-sub',
      `${wallEnergyKwh.toFixed(1)} кВт·год з розетки (${effPct}% ККД) • +${Math.round(addedDistance)} км запасу ходу`
    );
  } else if (state.lang === 'de') {
    setText(
      'res-energy-sub',
      `${wallEnergyKwh.toFixed(1)} kWh ab Steckdose (${effPct}% Wirk.) • +${Math.round(addedDistance)} km Reichweite`
    );
  } else {
    setText(
      'res-energy-sub',
      `${wallEnergyKwh.toFixed(1)} kWh from wall (${effPct}% eff) • +${Math.round(addedDistance)} mi range`
    );
  }

  setText('res-time', formatDuration(chargingHours));
  setText(
    'res-time-sub',
    `${chargerLoc.label} (${charger.nominalKw} ${kwLabel}) • ${state.currentSoc}% → ${state.targetSoc}%`
  );

  // Warning states on Time Tile & Alert Pill
  const timeTile = document.getElementById('tile-charging-time');
  const alertL1 = document.getElementById('alert-l1-slow');
  const alertDcTaper = document.getElementById('alert-dc-taper');

  const isSlowL1 = state.chargerId === 'l1' || chargingHours > 12;
  if (timeTile) {
    timeTile.classList.toggle('warning-amber', isSlowL1);
  }
  if (alertL1) {
    alertL1.classList.toggle('visible', isSlowL1);
    const l1Dur = formatDuration(chargingHours);
    const l2Dur = formatDuration(l2ComparisonHours);
    if (state.lang === 'uk') {
      setHtml(
        'alert-l1-text',
        `<strong>Вузьке місце розетки 1.4 кВт (${l1Dur}):</strong> ККД падає до ~85%, оскільки бортова електроніка авто не спить добами. Зарядна станція Level 2 (32A) завершить цю сесію за <strong>${l2Dur}</strong>.`
      );
    } else if (state.lang === 'de') {
      setHtml(
        'alert-l1-text',
        `<strong>Schuko-/Level-1-Engpass (${l1Dur}):</strong> Der Wirkungsgrad sinkt auf ~85 %, da die Bordelektronik tagelang aktiv bleibt. Eine Level-2-Wallbox (32A) schafft diese Ladung in <strong>${l2Dur}</strong>.`
      );
    } else {
      setHtml(
        'alert-l1-text',
        `<strong>120V Level 1 Bottleneck (<span id="alert-l1-hours">${l1Dur}</span>):</strong> Wall-to-pack efficiency drops to ~85% because onboard electronics stay awake for days. A 240V Level 2 EVSE finishes this session in <strong><span id="alert-l2-hours">${l2Dur}</span></strong>.`
      );
    }
  }

  if (alertDcTaper) {
    alertDcTaper.classList.toggle('visible', charger.isDc && state.targetSoc > 80);
    if (state.lang === 'uk') {
      setHtml(
        'alert-dc-text',
        `<strong>Активне сповільнення DC після 80%:</strong> Вище 80% SoC потужність швидкісної зарядки падає зі ~120+ кВт до ~45 кВт для захисту батареї. Відключення на 80% економить час та гроші.`
      );
    } else if (state.lang === 'de') {
      setHtml(
        'alert-dc-text',
        `<strong>80% DC-Ladekurve (Taper Cliff) aktiv:</strong> Über 80 % SoC drosselt das BMS die Schnellladeleistung von ~120+ kW auf durchschnittlich ~45 kW zum Zellschutz. Ein Ladestopp bei 80 % spart Zeit und Geld.`
      );
    } else {
      setHtml(
        'alert-dc-text',
        `<strong>80% DC Taper Cliff Active:</strong> Above 80% SoC, DC fast-charging power drops from ~120+ kW down to ~45 kW average to protect cell longevity. Unplugging at 80% saves time and money.`
      );
    }
  }

  // Single Session Cost Section Title & Readouts
  setText(
    'lbl-session-comparison',
    `${loc.ui.lblSessionComparison} (${state.currentSoc}% → ${state.targetSoc}%)`
  );
  setText('res-cost-home', formatMoney(sessionHomeCost));
  setText('res-cost-home-note', `@ ${formatMoney(state.homeRate)}/${kwhLabel}`);
  setText('res-cost-dc', formatMoney(sessionDcCost));
  setText('res-cost-dc-note', `@ ${formatMoney(state.dcRate)}/${kwhLabel}`);
  setText('res-cost-gas', formatMoney(sessionGasCost));

  if (state.lang === 'uk') {
    setText('res-cost-gas-note', `${state.gasConsumption} л/100км @ ${formatMoney(state.gasPrice)}/л`);
  } else if (state.lang === 'de') {
    setText('res-cost-gas-note', `${state.gasConsumption} L/100km @ ${formatMoney(state.gasPrice)}/L`);
  } else {
    setText('res-cost-gas-note', `${state.gasConsumption} MPG @ ${formatMoney(state.gasPrice)}/gal`);
  }

  // Viral Savings Headline & Subline
  const annualStr = formatMoneyInt(annualSavingsVsGas);
  const monthlyStr = formatMoneyInt(monthlySavingsVsGas);
  const dcSavStr = formatMoneyInt(annualSavingsVsDc);
  const moHomeStr = formatMoneyInt(monthlyHomeCost);
  const moGasStr = formatMoneyInt(monthlyGasCost);

  if (state.lang === 'uk') {
    setHtml(
      'savings-headline',
      `Ви економите <span class="mono-emerald" id="res-annual-savings">${annualStr}</span> / рік (<span id="res-monthly-savings">${monthlyStr}</span> / міс), заряджаючись вдома замість бензину`
    );
    setText(
      'res-dc-savings-sub',
      `Та ще ${dcSavStr}/рік економії порівняно з публічними DC-станціями (${moHomeStr}/міс вдома проти ${moGasStr}/міс на пальне)`
    );
    state.lastSummaryText =
      `⚡ Моя математика зарядки EV: Додавання ${Math.round(packEnergyKwh)} кВт·год (${state.currentSoc}%→${state.targetSoc}%) коштує лише ${formatMoney(sessionHomeCost)} вдома (${formatMoney(state.homeRate)}/кВт·год) проти ${formatMoney(sessionDcCost)} на DC Fast та ${formatMoney(sessionGasCost)} на бензині. Річна економія вдома: ${annualStr}/рік! Розраховано в EV Savings: ${SITE_URL}/?lang=uk`;
  } else if (state.lang === 'de') {
    setHtml(
      'savings-headline',
      `Sie sparen <span class="mono-emerald" id="res-annual-savings">${annualStr}</span> / Jahr (<span id="res-monthly-savings">${monthlyStr}</span> / Monat) beim Heimladen vs. Benzin`
    );
    setText(
      'res-dc-savings-sub',
      `Plus ${dcSavStr}/Jahr Ersparnis zu Hause gegenüber öffentlichen DC-Schnellladern (${moHomeStr}/Monat Strom vs. ${moGasStr}/Monat Benzin)`
    );
    state.lastSummaryText =
      `⚡ Meine E-Auto-Laderechnung: ${Math.round(packEnergyKwh)} kWh nachladen (${state.currentSoc}%→${state.targetSoc}%) kostet zu Hause nur ${formatMoney(sessionHomeCost)} (${formatMoney(state.homeRate)}/kWh) vs. ${formatMoney(sessionDcCost)} am DC-Schnelllader vs. ${formatMoney(sessionGasCost)} Benzin. Jährliche Ersparnis: ${annualStr}/Jahr! Berechnet mit EV Savings: ${SITE_URL}/?lang=de`;
  } else {
    setHtml(
      'savings-headline',
      `You save <span class="mono-emerald" id="res-annual-savings">${annualStr}</span> / year (<span id="res-monthly-savings">${monthlyStr}</span> / mo) charging at home vs. gas`
    );
    setText(
      'res-dc-savings-sub',
      `Plus you save ${dcSavStr}/yr charging at home vs. public DC Fast stations (${moHomeStr}/mo home vs. ${moGasStr}/mo gas)`
    );
    state.lastSummaryText =
      `⚡ My EV Charging Math: Adding ${Math.round(packEnergyKwh)} kWh (${state.currentSoc}%→${state.targetSoc}%) costs just ${formatMoney(sessionHomeCost)} at home (${formatMoney(state.homeRate)}/kWh) vs ${formatMoney(sessionDcCost)} at DC Fast vs ${formatMoney(sessionGasCost)} on gas. Annual home charging savings: ${annualStr}/yr! Calculated via EV Savings: ${SITE_URL}`;
  }

  // Update Dynamic Contextual Affiliate Trigger
  updateContextualTrigger(chargingHours, l2ComparisonHours);
}

/**
 * Updates the Pain-Point Hardware Trigger banner directly below calculator results.
 */
function updateContextualTrigger(chargingHours, l2ComparisonHours) {
  const card = document.getElementById('pain-trigger-card');
  const titleEl = document.getElementById('pain-trigger-title');
  const descEl = document.getElementById('pain-trigger-desc');
  const ctaEl = document.getElementById('pain-trigger-cta');
  const directAmazonEl = document.getElementById('pain-trigger-amazon-direct');

  if (!card || !titleEl || !descEl || !ctaEl) return;

  card.classList.remove('mode-l1', 'mode-dcfc', 'mode-l2');
  const lang = state.lang;

  if (state.chargerId === 'l1' || chargingHours > 10) {
    const roundedHours = Math.max(10, Math.round(chargingHours));
    card.classList.add('mode-l1');
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'l2';

    if (lang === 'uk') {
      titleEl.textContent = `⚠️ Чекаєте ${roundedHours}+ годин від звичайної розетки?`;
      descEl.textContent = `Портативна станція Level 2 на 32A/40A скорочує цю саму сесію до ~${l2ComparisonHours.toFixed(1)} год і дозволяє повністю вкластися в дешевий нічний тариф (23:00–07:00).`;
      ctaEl.textContent = 'Переглянути станції Level 2 ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[0].primaryUrl;
        directAmazonEl.textContent = 'Lectron 40A Level 2 на Amazon ↗';
      }
    } else if (lang === 'de') {
      titleEl.textContent = `⚠️ Über ${roundedHours}+ Stunden an der normalen Steckdose warten?`;
      descEl.textContent = `Eine 32A/40A Level-2-Wallbox verkürzt genau diesen Ladevorgang auf ~${l2ComparisonHours.toFixed(1)} Stunden — ideal für günstige Nachtstrom-Zeitfenster.`;
      ctaEl.textContent = 'Geprüfte Level-2-Ladegeräte ansehen ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[0].primaryUrl;
        directAmazonEl.textContent = 'Lectron 40A Level 2 auf Amazon ↗';
      }
    } else {
      titleEl.textContent = `⚠️ Waiting ${roundedHours}+ hours on a 120V outlet?`;
      descEl.textContent = `A portable 32A/40A Level 2 charger (NEMA 14-50) cuts this exact session down to ~${l2ComparisonHours.toFixed(1)} hours and lets you fit 100% of your charging into cheap off-peak night hours.`;
      ctaEl.textContent = 'See Tested Level 2 Home Chargers ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[0].primaryUrl;
        directAmazonEl.textContent = 'View Lectron 40A Level 2 on Amazon ↗';
      }
    }
  } else if (state.chargerId === 'dcfc') {
    card.classList.add('mode-dcfc');
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'nacs';

    if (lang === 'uk') {
      titleEl.textContent = `⚡ Платите ${formatMoney(state.dcRate)}+/кВт·год або шукаєте вільні CCS-конектори?`;
      descEl.textContent = 'Заряджайтеся вдома втричі дешевше зі станцією Level 2 або відкрийте доступ до 15 000+ надійних Tesla Supercharger у подорожах із сертифікованим адаптером NACS-to-CCS1.';
      ctaEl.textContent = 'Переглянути адаптери NACS Supercharger ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[2].primaryUrl;
        directAmazonEl.textContent = 'Lectron Vortex NACS на Amazon ↗';
      }
    } else if (lang === 'de') {
      titleEl.textContent = `⚡ Zahlen Sie ${formatMoney(state.dcRate)}+/kWh an öffentlichen Schnellladern?`;
      descEl.textContent = 'Laden Sie zu Hause 3x günstiger mit einer eigenen Wallbox oder nutzen Sie unterwegs über 15.000 zuverlässige Tesla Supercharger mit einem UL-geprüften NACS-zu-CCS-Adapter.';
      ctaEl.textContent = 'NACS Supercharger-Adapter ansehen ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[2].primaryUrl;
        directAmazonEl.textContent = 'Lectron Vortex NACS auf Amazon ↗';
      }
    } else {
      titleEl.textContent = `⚡ Paying ${formatMoney(state.dcRate)}+/kWh or hunting for working CCS plugs?`;
      descEl.textContent = 'Charge at home for 3x less with a Level 2 EVSE, or unlock 15,000+ reliable Tesla Superchargers on road trips with a UL-tested NACS-to-CCS1 adapter.';
      ctaEl.textContent = 'View NACS Supercharger Adapters ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[2].primaryUrl;
        directAmazonEl.textContent = 'View Lectron Vortex NACS on Amazon ↗';
      }
    }
  } else {
    card.classList.add('mode-l2');
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'obd2';

    if (lang === 'uk') {
      titleEl.textContent = '🔋 Скільки реальної ємності вже втратила ваша батарея?';
      descEl.textContent = 'Підключіть Bluetooth BLE OBD2-сканер до iOS-додатка EV Savings, щоб вести журнал реального стану здоров’я батареї (SOH %) та експортувати верифікований PDF-сертифікат.';
      ctaEl.textContent = 'Переглянути сумісні OBD2-сканери ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[1].primaryUrl;
        directAmazonEl.textContent = 'OBDLink CX BLE на Amazon ↗';
      }
    } else if (lang === 'de') {
      titleEl.textContent = '🔋 Wie viel Kapazität hat Ihre Batterie wirklich verloren?';
      descEl.textContent = 'Koppeln Sie einen Bluetooth-BLE-OBD2-Scanner mit der EV Savings iOS-App, um Ihren echten State of Health (SOH %) zu protokollieren und ein offizielles Batterie-PDF-Zertifikat zu exportieren.';
      ctaEl.textContent = 'Kompatible OBD2-Scanner ansehen ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[1].primaryUrl;
        directAmazonEl.textContent = 'OBDLink CX BLE auf Amazon ↗';
      }
    } else {
      titleEl.textContent = '🔋 How much capacity has your battery actually lost?';
      descEl.textContent = 'Pair a Bluetooth BLE OBD2 scanner with the EV Savings iOS app to log your real State of Health (SOH %) and export a verified Battery Health PDF Certificate.';
      ctaEl.textContent = 'See Compatible OBD2 Scanners ↓';
      if (directAmazonEl) {
        directAmazonEl.href = GEAR_CATALOG[1].primaryUrl;
        directAmazonEl.textContent = 'View OBDLink CX BLE on Amazon ↗';
      }
    }
  }
}

/**
 * Renders the #gear Recommended EV Gear Hub cards from GEAR_CATALOG in the active language.
 */
function renderGearCatalog() {
  const container = document.getElementById('gear-grid-container');
  if (!container) return;

  const loc = LOCALES[state.lang] || LOCALES.en;
  const highlightBannerText = loc.ui.gearHighlightBanner;

  container.innerHTML = GEAR_CATALOG.map((item) => {
    const t = item.i18n[state.lang] || item.i18n.en;
    const relAttr = item.isAffiliate
      ? 'noopener noreferrer sponsored'
      : 'noopener noreferrer';

    const secondaryBtnHtml =
      item.secondaryUrl && t.secondaryCtaText
        ? `<a href="${item.secondaryUrl}" target="_blank" rel="${relAttr}" class="gear-btn secondary">${t.secondaryCtaText}</a>`
        : '';

    const primaryBtnClass = item.isAffiliate ? 'gear-btn' : 'gear-btn appstore';

    return `
      <article class="gear-card" id="gear-card-${item.id}" data-gear-id="${item.id}">
        <div>
          <div class="gear-highlight-banner">${highlightBannerText}</div>
          <div class="gear-badge-row">
            <span class="gear-category-icon" aria-hidden="true">${item.icon}</span>
            <span class="gear-badge ${item.badgeStyle === 'cyan' ? 'cyan' : ''}">${t.badge}</span>
          </div>
          <h3 class="gear-title">${t.title}</h3>
          <div class="gear-model">${t.model}</div>
          <p class="gear-why">${t.why}</p>
        </div>
        <div class="gear-cta-group">
          <a href="${item.primaryUrl}" target="_blank" rel="${relAttr}" class="${primaryBtnClass}">
            ${t.primaryCtaText}
          </a>
          ${secondaryBtnHtml}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Highlights a specific gear card (l2, obd2, nacs, ios_app) and scrolls it into focus.
 */
function highlightGearCard(gearId, shouldScroll = true) {
  const normalized = (gearId || '').toLowerCase().trim();
  if (!normalized) return;

  const allCards = document.querySelectorAll('.gear-card');
  allCards.forEach((card) => card.classList.remove('highlighted'));

  const targetCard = document.getElementById(`gear-card-${normalized}`);
  if (targetCard) {
    targetCard.classList.add('highlighted');
    if (shouldScroll) {
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
    }
  }
}

/**
 * Parses URL query parameters (?lang=en|uk|de & ?highlight=l2|obd2|nacs) and hashes (#gear, #calculator).
 */
function handleDeepLinksOnLoad() {
  const params = new URLSearchParams(window.location.search);
  const langParam = (params.get('lang') || '').toLowerCase().trim();
  const highlightParam = params.get('highlight');
  const hash = window.location.hash;

  let initialLang = 'en';
  if (['en', 'uk', 'de'].includes(langParam)) {
    initialLang = langParam;
  } else if (langParam === 'ua') {
    initialLang = 'uk';
  } else {
    try {
      const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('evsavings_lang') : null;
      if (saved && ['en', 'uk', 'de'].includes(saved)) {
        initialLang = saved;
      }
    } catch (_) {}
  }

  setLanguage(initialLang, false);

  if (highlightParam) {
    highlightGearCard(highlightParam, true);
  } else if (hash === '#gear') {
    const gearSection = document.getElementById('gear');
    if (gearSection) {
      setTimeout(() => {
        gearSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }
}

/**
 * Copies the formatted EV savings summary to the clipboard with fallback.
 */
async function copySavingsSummary() {
  const btn = document.getElementById('btn-copy-summary');
  if (!state.lastSummaryText) return;

  let copiedOk = false;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(state.lastSummaryText);
      copiedOk = true;
    } catch (_) {
      copiedOk = false;
    }
  }

  if (!copiedOk) {
    const textarea = document.createElement('textarea');
    textarea.value = state.lastSummaryText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      copiedOk = true;
    } catch (_) {
      copiedOk = false;
    }
    document.body.removeChild(textarea);
  }

  if (btn && copiedOk) {
    const loc = LOCALES[state.lang] || LOCALES.en;
    btn.classList.add('copied');
    btn.textContent = loc.ui.btnCopied;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = loc.ui.btnCopy;
    }, 2600);
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function attachQuickRateListeners() {
  const homeRateInput = document.getElementById('input-home-rate');
  const quickRateBtns = document.querySelectorAll('.quick-rate-btn');
  quickRateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const rateVal = Number(btn.dataset.rate);
      state.homeRate = rateVal;
      if (homeRateInput) homeRateInput.value = rateVal;
      quickRateBtns.forEach((b) => b.classList.toggle('active', b === btn));
      recalculateAll();
    });
  });
}

/**
 * Attaches all DOM event listeners for instant oninput responsiveness.
 */
function initCalculatorEvents() {
  // 0. Language Switcher Buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang) {
        setLanguage(targetLang, true);
      }
    });
  });

  // 1. Vehicle Preset Chips
  const presetButtons = document.querySelectorAll('.preset-chip');
  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      const preset = EV_PRESETS[presetKey];
      if (!preset) return;

      state.presetId = presetKey;
      presetButtons.forEach((b) => b.classList.toggle('active', b === btn));

      if (presetKey !== 'custom') {
        state.batteryKwh = preset.batteryKwh;
        state.efficiencyMiPerKwh = preset.efficiencyMiPerKwh;
        state.efficiencyKwhPer100Km = preset.efficiencyKwhPer100Km;
        const batInput = document.getElementById('input-battery');
        const effInput = document.getElementById('input-efficiency');
        const loc = LOCALES[state.lang] || LOCALES.en;
        if (batInput) batInput.value = state.batteryKwh;
        if (effInput) {
          effInput.value = loc.isMetric ? state.efficiencyKwhPer100Km : state.efficiencyMiPerKwh;
        }
      }
      recalculateAll();
    });
  });

  // 2. Battery Capacity & Efficiency Sliders
  const batInput = document.getElementById('input-battery');
  if (batInput) {
    batInput.addEventListener('input', (e) => {
      state.batteryKwh = Number(e.target.value) || 75;
      activateCustomPresetChip();
      recalculateAll();
    });
  }

  const effInput = document.getElementById('input-efficiency');
  if (effInput) {
    effInput.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      const loc = LOCALES[state.lang] || LOCALES.en;
      if (loc.isMetric) {
        state.efficiencyKwhPer100Km = val || 18.0;
        state.efficiencyMiPerKwh = Number((62.1371 / state.efficiencyKwhPer100Km).toFixed(1));
      } else {
        state.efficiencyMiPerKwh = val || 3.5;
        state.efficiencyKwhPer100Km = Number((62.1371 / state.efficiencyMiPerKwh).toFixed(1));
      }
      activateCustomPresetChip();
      recalculateAll();
    });
  }

  // 3. Current SoC & Target SoC Sliders
  const currentSocInput = document.getElementById('input-current-soc');
  if (currentSocInput) {
    currentSocInput.addEventListener('input', (e) => {
      state.currentSoc = Number(e.target.value);
      if (state.currentSoc >= state.targetSoc) {
        state.targetSoc = Math.min(100, state.currentSoc + 5);
      }
      recalculateAll();
    });
  }

  const targetSocInput = document.getElementById('input-target-soc');
  if (targetSocInput) {
    targetSocInput.addEventListener('input', (e) => {
      state.targetSoc = Number(e.target.value);
      if (state.targetSoc <= state.currentSoc) {
        state.currentSoc = Math.max(0, state.targetSoc - 5);
      }
      recalculateAll();
    });
  }

  // 4. Charger Level Tabs
  const chargerTabs = document.querySelectorAll('.charger-tab');
  chargerTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const levelId = tab.dataset.charger;
      if (!CHARGER_LEVELS[levelId]) return;
      state.chargerId = levelId;
      chargerTabs.forEach((t) => t.classList.toggle('active', t === tab));
      recalculateAll();
    });
  });

  // 5. Electricity & Gas Rate Inputs
  const homeRateInput = document.getElementById('input-home-rate');
  if (homeRateInput) {
    homeRateInput.addEventListener('input', (e) => {
      state.homeRate = Number(e.target.value);
      const quickRateBtns = document.querySelectorAll('.quick-rate-btn');
      quickRateBtns.forEach((b) =>
        b.classList.toggle('active', Math.abs(Number(b.dataset.rate) - state.homeRate) < 0.005)
      );
      recalculateAll();
    });
  }

  attachQuickRateListeners();

  const dcRateInput = document.getElementById('input-dc-rate');
  if (dcRateInput) {
    dcRateInput.addEventListener('input', (e) => {
      state.dcRate = Number(e.target.value);
      recalculateAll();
    });
  }

  const monthlyMilesInput = document.getElementById('input-monthly-miles');
  if (monthlyMilesInput) {
    monthlyMilesInput.addEventListener('input', (e) => {
      state.monthlyDistance = Number(e.target.value);
      recalculateAll();
    });
  }

  const gasMpgInput = document.getElementById('input-gas-mpg');
  if (gasMpgInput) {
    gasMpgInput.addEventListener('input', (e) => {
      state.gasConsumption = Math.max(2, Math.min(100, Number(e.target.value) || 28));
      recalculateAll();
    });
  }

  const gasPriceInput = document.getElementById('input-gas-price');
  if (gasPriceInput) {
    gasPriceInput.addEventListener('input', (e) => {
      state.gasPrice = Math.max(0.5, Math.min(200, Number(e.target.value) || 3.5));
      recalculateAll();
    });
  }

  // 6. Copy Summary Button
  const copyBtn = document.getElementById('btn-copy-summary');
  if (copyBtn) {
    copyBtn.addEventListener('click', copySavingsSummary);
  }

  // 7. Contextual Trigger CTA Button -> Highlight Gear Card
  const triggerCta = document.getElementById('pain-trigger-cta');
  if (triggerCta) {
    triggerCta.addEventListener('click', (e) => {
      const targetId = triggerCta.dataset.highlightTarget;
      if (targetId) {
        e.preventDefault();
        highlightGearCard(targetId, true);
      }
    });
  }
}

function activateCustomPresetChip() {
  state.presetId = 'custom';
  const presetButtons = document.querySelectorAll('.preset-chip');
  presetButtons.forEach((b) =>
    b.classList.toggle('active', b.dataset.preset === 'custom')
  );
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderGearCatalog();
  renderFaqCards();
  initCalculatorEvents();
  handleDeepLinksOnLoad();
});
