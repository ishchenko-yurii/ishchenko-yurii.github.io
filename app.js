/**
 * EV Savings: Charging Log — Interactive Web Calculator & Affiliate Gear Hub
 * Pure Vanilla JS (Zero Dependencies, 100% Client-Side, <0.3s Load)
 * App Store ID: 6811996427 | Amazon Associates Tag: evsavings-20
 */

const AMAZON_TAG = 'evsavings-20';
const APP_STORE_URL = 'https://apps.apple.com/us/app/ev-savings-charging-log/id6811996427';
const SITE_URL = 'https://ishchenko-yurii.github.io';

/**
 * Configurable Affiliate Hardware Catalog (#gear).
 * Update ASINs or links here to propagate across the entire page and triggers.
 */
const GEAR_CATALOG = [
  {
    id: 'l2',
    category: 'Category 1 • Home Level 2 EVSE',
    icon: '🔌',
    badge: 'Best ROI for Night Tariffs',
    badgeStyle: 'emerald',
    title: 'Level 2 Home EV Chargers (NEMA 14-50, 32A / 40A)',
    model: 'Lectron NEMA 14-50 Level 2 EV Charger (240V, 32A / 40A, J1772)',
    why: '6–8x faster than a standard 120V wall outlet. Fits 100% of your charging into cheap off-peak night windows (11 PM – 7 AM) with high ~91–92% wall-to-battery efficiency.',
    primaryCtaText: 'Check Price on Amazon (Lectron L2) ↗',
    primaryUrl: `https://www.amazon.com/dp/B0BXP2JB64?tag=${AMAZON_TAG}`,
    secondaryCtaText: 'Browse All 32A/40A NEMA 14-50 Chargers ↗',
    secondaryUrl: `https://www.amazon.com/s?k=Lectron+NEMA+14-50+Level+2+EV+Charger+J1772&tag=${AMAZON_TAG}`,
    isAffiliate: true,
  },
  {
    id: 'obd2',
    category: 'Category 2 • Battery Health Telemetry',
    icon: '🔋',
    badge: 'Required for SOH Battery Log',
    badgeStyle: 'cyan',
    title: 'Bluetooth 4.0/5.0 (BLE) OBD2 Scanners for Battery SOH',
    model: 'OBDLink CX (Bluetooth 5.1 BLE) & Veepeak OBDCheck BLE+',
    why: 'Reliable iOS & Android BLE scanners with low-power sleep mode that never drain your 12V battery. Read real State of Health (SOH %), degradation, and cell temperatures for your EV Savings logbook.',
    primaryCtaText: 'View OBDLink CX (BLE 5.1) on Amazon ↗',
    primaryUrl: `https://www.amazon.com/dp/B08NFLL3NT?tag=${AMAZON_TAG}`,
    secondaryCtaText: 'View Veepeak OBDCheck BLE+ on Amazon ↗',
    secondaryUrl: `https://www.amazon.com/dp/B073XKQQQW?tag=${AMAZON_TAG}`,
    isAffiliate: true,
  },
  {
    id: 'nacs',
    category: 'Category 3 • Supercharger Access',
    icon: '⚡',
    badge: 'Road Trip Essential',
    badgeStyle: 'emerald',
    title: 'NACS to CCS1 Fast Charging Adapters (Up to 500A / 1000V)',
    model: 'Lectron Vortex Plug — Tesla Supercharger (NACS) to CCS Adapter',
    why: 'Unlocks 15,000+ high-speed Tesla Supercharger V3/V4 stalls for Ford, Rivian, GM, Hyundai, Kia, Genesis, and Polestar EVs with UL-tested safety interlocks.',
    primaryCtaText: 'Check Lectron Vortex NACS Adapter ↗',
    primaryUrl: `https://www.amazon.com/dp/B0FFSKH7BM?tag=${AMAZON_TAG}`,
    secondaryCtaText: 'Compare UL-Certified NACS Adapters ↗',
    secondaryUrl: `https://www.amazon.com/s?k=Lectron+Vortex+Plug+NACS+to+CCS+Adapter&tag=${AMAZON_TAG}`,
    isAffiliate: true,
  },
  {
    id: 'ios_app',
    category: 'Category 4 • iOS Companion Suite',
    icon: '📲',
    badge: 'Available on the App Store',
    badgeStyle: 'cyan',
    title: 'EV Savings: Charging Log (iOS App — Free / $12.99 Lifetime Pro)',
    model: '7-in-1 Offline EV Utility Suite for iPhone & iPad',
    why: 'Full 7-utility toolkit in your pocket: Live Charge Real-Time Tracker, Dual-Tariff Night Timer, Winter & Highway Range Loss, SOH Degradation Log & Official Battery Health PDF Certificate.',
    primaryCtaText: 'Download on the App Store (Free) ',
    primaryUrl: APP_STORE_URL,
    secondaryCtaText: null,
    secondaryUrl: null,
    isAffiliate: false,
  },
];

/**
 * 1-Click EV Vehicle Presets
 */
const EV_PRESETS = {
  tesla_my_m3: {
    id: 'tesla_my_m3',
    name: 'Tesla Model Y / 3 LR',
    batteryKwh: 75,
    efficiencyMiPerKwh: 3.5,
  },
  hyundai_kia: {
    id: 'hyundai_kia',
    name: 'Hyundai Ioniq 5 / Kia EV6 / Niro EV',
    batteryKwh: 77,
    efficiencyMiPerKwh: 3.4,
  },
  ford_chevy: {
    id: 'ford_chevy',
    name: 'Ford Mustang Mach-E / Equinox EV',
    batteryKwh: 88,
    efficiencyMiPerKwh: 3.1,
  },
  trucks_rivian: {
    id: 'trucks_rivian',
    name: 'F-150 Lightning / Rivian R1T',
    batteryKwh: 131,
    efficiencyMiPerKwh: 2.2,
  },
  custom: {
    id: 'custom',
    name: 'Custom EV',
    batteryKwh: 75,
    efficiencyMiPerKwh: 3.3,
  },
};

/**
 * Charger Power Levels & Real-World Wall-to-Battery Efficiency
 */
const CHARGER_LEVELS = {
  l1: {
    id: 'l1',
    label: 'Level 1',
    spec: '120V / 12A',
    nominalKw: 1.4,
    efficiency: 0.85, // ~85% efficiency due to onboard charger overhead over long hours
    isDc: false,
  },
  l2_32a: {
    id: 'l2_32a',
    label: 'Level 2 (32A)',
    spec: '240V / NEMA 14-50',
    nominalKw: 7.7,
    efficiency: 0.913, // ~91.3% efficiency
    isDc: false,
  },
  l2_48a: {
    id: 'l2_48a',
    label: 'Level 2 Fast',
    spec: '240V / 48A Hardwired',
    nominalKw: 11.5,
    efficiency: 0.92, // ~92% efficiency
    isDc: false,
  },
  dcfc: {
    id: 'dcfc',
    label: 'DC Fast',
    spec: '150 kW CCS / NACS',
    nominalKw: 150.0,
    efficiency: 0.94,
    isDc: true,
  },
};

/**
 * Reactive Calculator State
 */
const state = {
  presetId: 'tesla_my_m3',
  batteryKwh: 75,
  efficiencyMiPerKwh: 3.5,
  currentSoc: 20,
  targetSoc: 80,
  chargerId: 'l2_32a',
  homeRate: 0.14,
  dcRate: 0.48,
  monthlyMiles: 1000,
  gasMpg: 28,
  gasPrice: 3.50,
  lastSummaryText: '',
};

/**
 * Calculates charging duration (in hours) accounting for AC efficiency
 * and the 80%–100% DC Fast Charging CC/CV taper cliff.
 */
function calculateChargingHours(batteryKwh, startSoc, targetSoc, charger) {
  const deltaSoc = Math.max(0, targetSoc - startSoc);
  if (deltaSoc <= 0) return 0;

  if (!charger.isDc) {
    // Wall power is nominalKw; power reaching the pack is nominalKw * efficiency
    // However, standard EVSE ratings deliver nominalKw while drawing wallKwh = packKwh / efficiency.
    const packEnergyKwh = batteryKwh * (deltaSoc / 100);
    const effectivePackKw = charger.id === 'l1'
      ? charger.nominalKw * charger.efficiency // 1.4 kW * 0.85 = 1.19 kW net into battery
      : charger.nominalKw; // 7.7 kW / 11.5 kW delivered to onboard charger
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
 * Formats decimal hours into "Xh Ym"
 */
function formatDuration(hours) {
  const totalMinutes = Math.max(1, Math.round(hours * 60));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m < 10 ? '0' + m : m}m`;
}

/**
 * Core calculation routine invoked on every slider/tab/preset input.
 */
function recalculateAll() {
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
  const addedMiles = packEnergyKwh * state.efficiencyMiPerKwh;

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
  // Home session cost uses selected AC charger efficiency (or L2 91.3% when comparing against DCFC)
  const homeSessionEfficiency = charger.isDc ? homeBaselineEfficiency : charger.efficiency;
  const homeWallKwhForSession = packEnergyKwh / homeSessionEfficiency;
  const sessionHomeCost = homeWallKwhForSession * state.homeRate;
  const sessionDcCost = packEnergyKwh * state.dcRate;
  const sessionGasCost = (addedMiles / Math.max(1, state.gasMpg)) * state.gasPrice;

  // Monthly & Annual Costs
  const monthlyPackKwh = state.monthlyMiles / Math.max(0.5, state.efficiencyMiPerKwh);
  const monthlyHomeWallKwh = monthlyPackKwh / homeBaselineEfficiency;
  const monthlyHomeCost = monthlyHomeWallKwh * state.homeRate;
  const monthlyDcCost = monthlyPackKwh * state.dcRate;
  const monthlyGasCost = (state.monthlyMiles / Math.max(1, state.gasMpg)) * state.gasPrice;

  const monthlySavingsVsGas = Math.max(0, monthlyGasCost - monthlyHomeCost);
  const annualSavingsVsGas = Math.round(monthlySavingsVsGas * 12);
  const annualSavingsVsDc = Math.round(Math.max(0, (monthlyDcCost - monthlyHomeCost) * 12));

  // Update DOM Readouts for Controls
  setText('val-battery', `${state.batteryKwh} kWh`);
  setText('val-efficiency', `${state.efficiencyMiPerKwh.toFixed(1)} mi/kWh`);
  setText('val-current-soc', `${state.currentSoc}%`);
  setText('val-target-soc', `${state.targetSoc}%`);
  setText('val-home-rate', `$${state.homeRate.toFixed(2)}/kWh`);
  setText('val-dc-rate', `$${state.dcRate.toFixed(2)}/kWh`);
  setText('val-monthly-miles', `${state.monthlyMiles.toLocaleString('en-US')} mi/mo`);

  const sliderCurrentSoc = document.getElementById('input-current-soc');
  const sliderTargetSoc = document.getElementById('input-target-soc');
  if (sliderCurrentSoc && Number(sliderCurrentSoc.value) !== state.currentSoc) {
    sliderCurrentSoc.value = state.currentSoc;
  }
  if (sliderTargetSoc && Number(sliderTargetSoc.value) !== state.targetSoc) {
    sliderTargetSoc.value = state.targetSoc;
  }

  // Update Live Results Dashboard
  setText('res-energy-pack', `${packEnergyKwh.toFixed(1)} kWh`);
  setText(
    'res-energy-sub',
    `${wallEnergyKwh.toFixed(1)} kWh from wall (${Math.round(charger.efficiency * 100)}% eff) • +${Math.round(addedMiles)} mi range`
  );

  setText('res-time', formatDuration(chargingHours));
  setText(
    'res-time-sub',
    `${charger.label} (${charger.nominalKw} kW) • ${state.currentSoc}% → ${state.targetSoc}%`
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
    setText('alert-l1-hours', formatDuration(chargingHours));
    setText('alert-l2-hours', formatDuration(l2ComparisonHours));
  }
  if (alertDcTaper) {
    alertDcTaper.classList.toggle('visible', charger.isDc && state.targetSoc > 80);
  }

  // Single Session Cost Readouts
  setText('res-cost-home', `$${sessionHomeCost.toFixed(2)}`);
  setText('res-cost-home-note', `@ $${state.homeRate.toFixed(2)}/kWh`);
  setText('res-cost-dc', `$${sessionDcCost.toFixed(2)}`);
  setText('res-cost-dc-note', `@ $${state.dcRate.toFixed(2)}/kWh`);
  setText('res-cost-gas', `$${sessionGasCost.toFixed(2)}`);
  setText('res-cost-gas-note', `${state.gasMpg} MPG @ $${state.gasPrice.toFixed(2)}/gal`);

  // Viral Savings Readouts
  setText('res-annual-savings', `$${annualSavingsVsGas.toLocaleString('en-US')}`);
  setText('res-monthly-savings', `$${Math.round(monthlySavingsVsGas).toLocaleString('en-US')}`);
  setText(
    'res-dc-savings-sub',
    `Plus you save $${annualSavingsVsDc.toLocaleString('en-US')}/yr charging at home vs. public DC Fast stations ($${Math.round(monthlyHomeCost)}/mo home vs. $${Math.round(monthlyGasCost)}/mo gas)`
  );

  // Build Shareable Summary String for Reddit / Threads
  state.lastSummaryText =
    `⚡ My EV Charging Math: Adding ${Math.round(packEnergyKwh)} kWh (${state.currentSoc}%→${state.targetSoc}%) costs just $${sessionHomeCost.toFixed(2)} at home ($${state.homeRate.toFixed(2)}/kWh) vs $${sessionDcCost.toFixed(2)} at DC Fast vs $${sessionGasCost.toFixed(2)} on gas. Annual home charging savings: $${annualSavingsVsGas.toLocaleString('en-US')}/yr! Calculated via EV Savings: ${SITE_URL}`;

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

  if (state.chargerId === 'l1' || chargingHours > 10) {
    const roundedHours = Math.max(10, Math.round(chargingHours));
    card.classList.add('mode-l1');
    titleEl.textContent = `⚠️ Waiting ${roundedHours}+ hours on a 120V outlet?`;
    descEl.textContent =
      `A portable 32A/40A Level 2 charger (NEMA 14-50) cuts this exact session down to ~${l2ComparisonHours.toFixed(1)} hours and lets you fit 100% of your charging into cheap off-peak night hours.`;
    ctaEl.textContent = 'See Tested Level 2 Home Chargers ↓';
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'l2';
    if (directAmazonEl) {
      directAmazonEl.href = GEAR_CATALOG[0].primaryUrl;
      directAmazonEl.textContent = 'View Lectron 40A Level 2 on Amazon ↗';
    }
  } else if (state.chargerId === 'dcfc') {
    card.classList.add('mode-dcfc');
    titleEl.textContent = `⚡ Paying $${state.dcRate.toFixed(2)}+/kWh or hunting for working CCS plugs?`;
    descEl.textContent =
      'Charge at home for 3x less with a Level 2 EVSE, or unlock 15,000+ reliable Tesla Superchargers on road trips with a UL-tested NACS-to-CCS1 adapter.';
    ctaEl.textContent = 'View NACS Supercharger Adapters ↓';
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'nacs';
    if (directAmazonEl) {
      directAmazonEl.href = GEAR_CATALOG[2].primaryUrl;
      directAmazonEl.textContent = 'View Lectron Vortex NACS on Amazon ↗';
    }
  } else {
    card.classList.add('mode-l2');
    titleEl.textContent = '🔋 How much capacity has your battery actually lost?';
    descEl.textContent =
      'Pair a Bluetooth BLE OBD2 scanner with the EV Savings iOS app to log your real State of Health (SOH %) and export a verified Battery Health PDF Certificate.';
    ctaEl.textContent = 'See Compatible OBD2 Scanners ↓';
    ctaEl.setAttribute('href', '#gear');
    ctaEl.dataset.highlightTarget = 'obd2';
    if (directAmazonEl) {
      directAmazonEl.href = GEAR_CATALOG[1].primaryUrl;
      directAmazonEl.textContent = 'View OBDLink CX BLE on Amazon ↗';
    }
  }
}

/**
 * Renders the #gear Recommended EV Gear Hub cards from GEAR_CATALOG.
 */
function renderGearCatalog() {
  const container = document.getElementById('gear-grid-container');
  if (!container) return;

  container.innerHTML = GEAR_CATALOG.map((item) => {
    const relAttr = item.isAffiliate
      ? 'noopener noreferrer sponsored'
      : 'noopener noreferrer';

    const secondaryBtnHtml = item.secondaryUrl
      ? `<a href="${item.secondaryUrl}" target="_blank" rel="${relAttr}" class="gear-btn secondary">${item.secondaryCtaText}</a>`
      : '';

    const primaryBtnClass = item.isAffiliate ? 'gear-btn' : 'gear-btn appstore';

    return `
      <article class="gear-card" id="gear-card-${item.id}" data-gear-id="${item.id}">
        <div>
          <div class="gear-highlight-banner">🎯 Recommended for Your Setup</div>
          <div class="gear-badge-row">
            <span class="gear-category-icon" aria-hidden="true">${item.icon}</span>
            <span class="gear-badge ${item.badgeStyle === 'cyan' ? 'cyan' : ''}">${item.badge}</span>
          </div>
          <h3 class="gear-title">${item.title}</h3>
          <div class="gear-model">${item.model}</div>
          <p class="gear-why">${item.why}</p>
        </div>
        <div class="gear-cta-group">
          <a href="${item.primaryUrl}" target="_blank" rel="${relAttr}" class="${primaryBtnClass}">
            ${item.primaryCtaText}
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
 * Parses URL query parameters (?highlight=l2|obd2|nacs) and hashes (#gear, #calculator).
 */
function handleDeepLinksOnLoad() {
  const params = new URLSearchParams(window.location.search);
  const highlightParam = params.get('highlight');
  const hash = window.location.hash;

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
    const originalText = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '✅ Copied! Ready to paste on Reddit / Threads';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalText;
    }, 2600);
  }
}

/**
 * Helper to safely set textContent by element ID.
 */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Attaches all DOM event listeners for instant oninput responsiveness.
 */
function initCalculatorEvents() {
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
        const batInput = document.getElementById('input-battery');
        const effInput = document.getElementById('input-efficiency');
        if (batInput) batInput.value = state.batteryKwh;
        if (effInput) effInput.value = state.efficiencyMiPerKwh;
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
      state.efficiencyMiPerKwh = Number(e.target.value) || 3.5;
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
  const quickRateBtns = document.querySelectorAll('.quick-rate-btn');

  if (homeRateInput) {
    homeRateInput.addEventListener('input', (e) => {
      state.homeRate = Number(e.target.value);
      quickRateBtns.forEach((b) =>
        b.classList.toggle('active', Math.abs(Number(b.dataset.rate) - state.homeRate) < 0.005)
      );
      recalculateAll();
    });
  }

  quickRateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const rateVal = Number(btn.dataset.rate);
      state.homeRate = rateVal;
      if (homeRateInput) homeRateInput.value = rateVal;
      quickRateBtns.forEach((b) => b.classList.toggle('active', b === btn));
      recalculateAll();
    });
  });

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
      state.monthlyMiles = Number(e.target.value);
      recalculateAll();
    });
  }

  const gasMpgInput = document.getElementById('input-gas-mpg');
  if (gasMpgInput) {
    gasMpgInput.addEventListener('input', (e) => {
      state.gasMpg = Math.max(5, Math.min(100, Number(e.target.value) || 28));
      recalculateAll();
    });
  }

  const gasPriceInput = document.getElementById('input-gas-price');
  if (gasPriceInput) {
    gasPriceInput.addEventListener('input', (e) => {
      state.gasPrice = Math.max(0.5, Math.min(15, Number(e.target.value) || 3.5));
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
  initCalculatorEvents();
  recalculateAll();
  handleDeepLinksOnLoad();
});
