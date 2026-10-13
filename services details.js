

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

const SERVICES_DATA = {
    'full-wrap': {
      id: 'full-wrap',
      tabId: 'tabFullWrap',
      breadcrumbTitle: 'Full Vehicle Wraps',
      eyebrow: 'BESPOKE ARCHITECTURE • SIGNATURE SERVICE',
      hlPrefix: 'SURGICAL PRECISION.',
      hlGold: 'FULL VEHICLE TRANSFORMATION.',
      subtext: 'Transform your vehicle\'s aesthetic with zero paint damage. Precision hand-laid cast vinyl with 100% knife-free tape protocols, seamless 90° door returns, and multi-stage cleanroom curing.',
      turnaround: '3–4 Days',
      warranty: '5-Year',
      protocol: '100% Knife-Free',
      stageBadge: 'Master Certified Atelier',
      hudStatus: '22°C Climate Cleanroom',
      stageImg: 'assets/images/service-full-wrap.jpg',
      stageTag: '<i class="fa-solid fa-shield-halved"></i> 0.2mm Precision Returns',
      stageTitle: 'Deep Door Jamb & Edge Tuck',
      stageDesc: 'Full factory disassembly-free wrapping ensuring OEM original bodylines and zero blade contact.',
      overviewHeading: 'Comprehensive Technical Specifications.',
      overviewSubtext: 'Discover how Aureon Customs executes each step of your vehicle\'s commission inside our hospital-grade, dust-controlled climate bays.',
      editorialSubheading: 'Zero-Defect Standards. Knife-Free Integrity.',
      editorialP1: 'Conventional wrap shops often score factory clearcoats with razor blades during trimming, resulting in invisible rust points and ruined resale values. At Aureon Customs, every cut line is traced with aerospace-grade filament tape embedded beneath the film.',
      editorialP2: 'We exclusively utilize high-tensile multi-cast vinyl from 3M 2080 Series, Avery Dennison Supreme, and Inozetek Supergloss. Each panel is tension-relieved and post-heated to 105°C using calibrated infrared thermography, locking the vinyl\'s molecular memory to prevent future lift, shrinkage, or bubbling.',
      specFilmGauge: '3.5 – 4.2 mil Cast Vinyl',
      specAdhesive: 'Pressure-Activated Micro-Comply',
      timelineSteps: [
        {
          num: '01',
          title: 'Multi-Stage Chemical Decontamination',
          desc: 'Foam soak, clay-bar detailing, and IPA residue strip down inside an isolated wash bay to eliminate road grime, wax, and iron deposits.'
        },
        {
          num: '02',
          title: 'Knife-Free Filament Contouring',
          desc: 'High-tensile filament wire is precision-laid along body creases and seam lines. No metal blades ever touch your vehicle\'s paintwork.'
        },
        {
          num: '03',
          title: 'Tension-Relieved Application',
          desc: 'Panels are wrapped with low stretch ratios (< 8%) to ensure long-term stability and eliminate distortion in metallic or satin textures.'
        },
        {
          num: '04',
          title: 'Full 90° Return Edge Tucking',
          desc: 'All film edges are rolled deeply behind body panels, door jambs, and rubber moldings for an authentic, seamless finish that mimics factory paint.'
        },
        {
          num: '05',
          title: 'Infrared Post-Heating & QC Audit',
          desc: 'Digital pyrometer validation of all edges to 105°C, followed by a 48-point optical inspection before vehicle handover.'
        }
      ],
      pricing: [
        {
          name: 'Street Spec',
          desc: 'Exterior monocolor color change transformation for coupes and sedans.',
          amount: '2,950',
          time: '3 Days',
          warranty: '3-Year Warranty',
          btnText: 'Select Street Spec',
          features: [
            { text: 'Complete exterior body panels wrapped', included: true },
            { text: 'Satin, gloss, or matte 3M cast films', included: true },
            { text: '100% knife-free tape precision installation', included: true },
            { text: 'Edge tuck behind visible rubber weatherseals', included: true },
            { text: 'Door jamb and sill interior returns', included: false },
            { text: 'Ceramic hydrophobic surface topcoat', included: false }
          ]
        },
        {
          name: 'Atelier Signature',
          desc: 'Full deep coverage with interior door jambs and sill returns.',
          amount: '4,450',
          time: '4 Days',
          warranty: '5-Year Warranty',
          btnText: 'Select Atelier Signature',
          features: [
            { text: 'Complete exterior body panels wrapped', included: true },
            { text: 'Deep door jamb, inner return & sill wrap', included: true },
            { text: 'Ultra-gloss, satin metallic & color-shift films', included: true },
            { text: '100% knife-free tape protocol guaranteed', included: true },
            { text: 'Calibrated infrared post-heating treatment', included: true },
            { text: 'Complimentary 1-year ceramic vinyl topcoat', included: true }
          ]
        },
        {
          name: 'Bespoke Hypercar',
          desc: 'Concourse-level precision for exotic supercars, widebodies, and custom liveries.',
          amount: '6,800',
          time: '5–6 Days',
          warranty: '7-Year Warranty',
          btnText: 'Select Bespoke Hypercar',
          features: [
            { text: 'Complete multi-panel & complex curvature coverage', included: true },
            { text: 'Complete door jambs, engine bay lips & hatch sills', included: true },
            { text: 'Custom multi-layer metallic or racing livery accent', included: true },
            { text: 'Pre-preg carbon fiber detail accent integration', included: true },
            { text: 'Dual-layer hydrophobic ceramic armor applied', included: true },
            { text: 'Concourse photographic build documentation portfolio', included: true }
          ]
        }
      ]
    },

    'partial-wrap': {
      id: 'partial-wrap',
      tabId: 'tabPartialWrap',
      breadcrumbTitle: 'Partial Wraps & Liveries',
      eyebrow: 'MOTORSPORT ACCENTS • HIGH CONTRAST',
      hlPrefix: 'DYNAMIC RACING STYLING.',
      hlGold: 'BESPOKE ACCENT LIVERIES.',
      subtext: 'High-contrast roof blackouts, satin hood accents, mirror caps, geometric graphics, and full motorsport track liveries tailored to enhance your vehicle\'s aggressive profile.',
      turnaround: '1–2 Days',
      warranty: '3-Year',
      protocol: 'CAD Vector Precision',
      stageBadge: 'Motorsport Certified Livery',
      hudStatus: 'Vector Centerline Calibrated',
      stageImg: 'assets/images/service-partial-wrap.jpg',
      stageTag: '<i class="fa-solid fa-flag-checkered"></i> High-Contrast Styling',
      stageTitle: 'Roof, Hood & Aero Accents',
      stageDesc: 'High-gloss piano blackouts, carbon-textured spoilers, and race-inspired liveries with seamless border transitions.',
      overviewHeading: 'Bespoke Livery & Accent Engineering.',
      overviewSubtext: 'Whether engineering a stealth two-tone rooftop or an aggressive endurance racing design, our digital vector process ensures millimetric symmetry.',
      editorialSubheading: 'CAD Plotting Meets Master Hand Craftsmanship.',
      editorialP1: 'Every livery begins as a 3D digital scan of your car\'s specific body panels. We map out character lines, fender arches, and aerodynamic cutouts so graphics flow organically with the vehicle\'s natural momentum.',
      editorialP2: 'Our graphics are layered with ultra-thin cast films to eliminate high ridge lines. We apply optical clear overlaminates with UV inhibitors to safeguard vibrant neon, metallic, and reflective pigments against fading on track and road.',
      specFilmGauge: '2.8 – 3.8 mil Cast Vinyl + Opti-Lam',
      specAdhesive: 'High-Tack Low-Shrink Solvent Acrylic',
      timelineSteps: [
        {
          num: '01',
          title: 'Digital 3D Panel Measurement',
          desc: 'CAD chassis vector overlay modeling to verify graphic scales, stripe alignments, and aerodynamic contouring.'
        },
        {
          num: '02',
          title: 'Targeted Surface Prep & Clay Bar',
          desc: 'Intensive strip down of designated panels (roof, hood, pillars) to guarantee zero wax residue and maximum adhesive contact.'
        },
        {
          num: '03',
          title: 'Laser-Guided Guide Placement',
          desc: 'Dual-axis laser levels trace true centerlines and symmetry points along roof channels and body creases.'
        },
        {
          num: '04',
          title: 'Filament Wire Livery Seam Cuts',
          desc: 'No metal blades: Knifeless Design Line filaments cut micro-curves and complex geometric patterns cleanly beneath the vinyl.'
        },
        {
          num: '05',
          title: 'Thermal Edge Seal & UV Sealant',
          desc: 'Edges receive 3M Edge Sealer 3950 and 95°C infrared set to withstand high-speed wind buffeting and repeated track pressure washes.'
        }
      ],
      pricing: [
        {
          name: 'Aero Accent Pack',
          desc: 'High-gloss or satin blackouts for roof, mirrors, and shark fin antenna.',
          amount: '850',
          time: '1 Day',
          warranty: '3-Year Warranty',
          btnText: 'Select Aero Accent Pack',
          features: [
            { text: 'Roof blackout (gloss black or satin carbon)', included: true },
            { text: 'Matching wing mirror caps wrapped', included: true },
            { text: 'Shark fin antenna seamless wrapping', included: true },
            { text: '100% knife-free filament tape cutting', included: true },
            { text: 'Custom hood or decklid racing stripes', included: false },
            { text: 'Full multi-color geometric livery graphics', included: false }
          ]
        },
        {
          name: 'Motorsport Livery',
          desc: 'Signature twin racing stripes, side rocker graphics, and accent color trims.',
          amount: '1,650',
          time: '2 Days',
          warranty: '3-Year Warranty',
          btnText: 'Select Motorsport Livery',
          features: [
            { text: 'Roof blackout plus rear spoiler wrap', included: true },
            { text: 'Dual center racing stripes with accent pin', included: true },
            { text: 'Lower side door rocker graphics & decals', included: true },
            { text: 'Laser-aligned true vehicle centerline', included: true },
            { text: 'Edge-sealed against high-speed wind shear', included: true },
            { text: 'Hydrophobic ceramic booster spray applied', included: true }
          ]
        },
        {
          name: 'Full Custom Graphic',
          desc: 'One-of-a-kind bespoke digital camouflage, geometric, or track livery build.',
          amount: '3,200',
          time: '3 Days',
          warranty: '5-Year Warranty',
          btnText: 'Select Full Custom Graphic',
          features: [
            { text: 'Complete bespoke 3D CAD design consultation', included: true },
            { text: 'Multi-layered cast vinyl & reflective accents', included: true },
            { text: 'Hood, roof, doors, and rear quarter panels', included: true },
            { text: 'Printed high-resolution solvent ink with UV laminate', included: true },
            { text: 'Track-tested edge-sealing warranty', included: true },
            { text: 'Digital design file and vector artwork ownership', included: true }
          ]
        }
      ]
    },

    'custom-mods': {
      id: 'custom-mods',
      tabId: 'tabCustomMods',
      breadcrumbTitle: 'Custom Aerodynamics & Mods',
      eyebrow: 'PRE-PREG CARBON • DOWNFORCE & STANCE',
      hlPrefix: 'AERODYNAMIC DOMINANCE.',
      hlGold: 'DRY CARBON & CUSTOM FITMENT.',
      subtext: 'Autoclave pre-preg dry carbon fiber splitters, diffusers, GT wings, precision widebody overfenders, and comprehensive gloss/satin chrome delete packages engineered for maximum presence.',
      turnaround: '3–5 Days',
      warranty: '5-Year',
      protocol: 'OEM Non-Invasive Rigging',
      stageBadge: 'Aero & Carbon Specialists',
      hudStatus: 'Torque-Calibrated Mounting Specs',
      stageImg: 'assets/images/service-custom-mods.jpg',
      stageTag: '<i class="fa-solid fa-wind"></i> Dry Carbon Aero',
      stageTitle: 'Splitters, Diffusers & Wings',
      stageDesc: 'Wind-tunnel validated pre-preg 2x2 twill carbon fiber aerodynamic components mounted to OEM chassis mounting points.',
      overviewHeading: 'Aerodynamic & Styling Engineering.',
      overviewSubtext: 'Experience genuine motorsport grade enhancements that combine functional aerodynamic downforce with unmatched structural elegance.',
      editorialSubheading: 'Autoclave Carbon Technology. Factory Integrity.',
      editorialP1: 'Unlike cheap wet-laid fiberglass replicas that wave, crack, and discolor under sunlight, Aureon Customs utilizes 100% autoclave pre-preg dry carbon fiber with aircraft-spec resin ratios and UV-absorbing ceramic clearcoats.',
      editorialP2: 'Our custom fabrication workshop utilizes OEM mounting points whenever possible, ensuring non-invasive installation. For widebody conversions, inner wheel arch tubs are cut and professionally MIG-welded, sealed with epoxy primer, and undercoated to prevent any moisture ingress.',
      specFilmGauge: '100% Pre-Preg Toray Carbon (3K/12K)',
      specAdhesive: '3M Structural VHB + Stainless Hardware',
      timelineSteps: [
        {
          num: '01',
          title: 'Chassis 3D Laser Alignment',
          desc: 'Chassis ground clearance, suspension compression clearance, and wheel offset measurements on our hydraulic lift.'
        },
        {
          num: '02',
          title: 'Dry Fitment & Jig Verification',
          desc: 'Pre-assembly of carbon splitters, side skirts, and diffuser fins using non-marking silicone alignment jigs.'
        },
        {
          num: '03',
          title: 'Precision Trim & Chrome Delete Prep',
          desc: 'De-chroming of window surrounds, grilles, and badges using 3M 2080 Deep Gloss Black cast film.'
        },
        {
          num: '04',
          title: 'Structural Fastening & VHB Bonding',
          desc: 'Installation using stainless steel hardware, chassis bracketry, and vibration-damped 3M VHB bonding systems.'
        },
        {
          num: '05',
          title: 'Torque Check & Road Load Testing',
          desc: 'Digital torque wrench audit of every chassis bolt, followed by aerodynamic stability inspection prior to sign-off.'
        }
      ],
      pricing: [
        {
          name: 'Chrome Delete & Aero Accents',
          desc: 'Complete black-out of exterior window trim, mirror caps, and badges.',
          amount: '1,250',
          time: '2 Days',
          warranty: '3-Year Warranty',
          btnText: 'Select Chrome Delete',
          features: [
            { text: 'Complete exterior window trim de-chroming', included: true },
            { text: 'Front grille surrounds and emblems blacked out', included: true },
            { text: 'Exhaust tip surround & fender trim accents', included: true },
            { text: 'Premium 3M High-Gloss Deep Black cast film', included: true },
            { text: 'Pre-preg carbon front splitter installation', included: false },
            { text: 'Rear diffuser with integrated LED brake light', included: false }
          ]
        },
        {
          name: 'Carbon Aero Pack',
          desc: 'Pre-preg dry carbon front lip splitter, side skirt extensions, and rear lip spoiler.',
          amount: '3,850',
          time: '3 Days',
          warranty: '5-Year Warranty',
          btnText: 'Select Carbon Aero Pack',
          features: [
            { text: 'Pre-preg 2x2 twill carbon front splitter lip', included: true },
            { text: 'Matching dry carbon side skirt ground extensions', included: true },
            { text: 'High-kick carbon ducktail or decklid spoiler', included: true },
            { text: 'OEM mounting points utilized with zero drill damage', included: true },
            { text: 'Automotive high-solids UV clearcoat protection', included: true },
            { text: 'Complete exterior chrome delete package included', included: true }
          ]
        },
        {
          name: 'Full Widebody & GT Wing',
          desc: 'Aggressive overfender widebody conversion, race diffuser, and chassis-mounted GT wing.',
          amount: '8,900',
          time: '5–6 Days',
          warranty: '5-Year Warranty',
          btnText: 'Select Full Widebody Build',
          features: [
            { text: 'Full widebody overfender installation & arch tubs', included: true },
            { text: 'Rear aggressive carbon diffuser with strakes', included: true },
            { text: 'Chassis-mount carbon fiber swan neck GT wing', included: true },
            { text: 'Suspension stance alignment & wheel spacer fitment', included: true },
            { text: 'Epoxy sealed inner wheel arches against rust', included: true },
            { text: 'Full studio ceramic topcoat and photo portfolio', included: true }
          ]
        }
      ]
    }
  };

const dom = {
    
    switcherButtons: document.querySelectorAll('.srvd-switcher-btn'),
    breadcrumbCurrent: document.getElementById('breadcrumbServiceTitle'),

eyebrowBadge: document.getElementById('srvdEyebrowBadge'),
    hlPrefix: document.getElementById('srvdHlPrefix'),
    hlGold: document.getElementById('srvdHlGold'),
    subtext: document.getElementById('srvdSubtext'),
    metricTurnaround: document.getElementById('metricTurnaround'),
    metricWarranty: document.getElementById('metricWarranty'),
    metricProtocol: document.getElementById('metricProtocol'),

stageImg: document.getElementById('srvdHeroImage'),
    stageBadgeText: document.getElementById('srvdStageBadgeText'),
    hudStatus: document.getElementById('srvdHudStatus'),
    stageTag: document.getElementById('srvdStageTag'),
    stageTitle: document.getElementById('srvdStageTitle'),
    stageDesc: document.getElementById('srvdStageDesc'),

overviewHeading: document.getElementById('overviewSectionHeading'),
    overviewSubtext: document.getElementById('overviewSectionSubtext'),
    editorialSubheading: document.getElementById('editorialSubheading'),
    editorialParagraph1: document.getElementById('editorialParagraph1'),
    editorialParagraph2: document.getElementById('editorialParagraph2'),
    specFilmGauge: document.getElementById('specFilmGauge'),
    specAdhesive: document.getElementById('specAdhesive'),
    timelineList: document.getElementById('timelineList'),

priceCards: [
      {
        card: document.getElementById('priceCard1'),
        name: document.getElementById('priceTier1Name'),
        desc: document.getElementById('priceTier1Desc'),
        amount: document.getElementById('priceTier1Amount'),
        time: document.getElementById('priceTier1Time'),
        features: document.getElementById('priceTier1Features')
      },
      {
        card: document.getElementById('priceCard2'),
        name: document.getElementById('priceTier2Name'),
        desc: document.getElementById('priceTier2Desc'),
        amount: document.getElementById('priceTier2Amount'),
        time: document.getElementById('priceTier2Time'),
        features: document.getElementById('priceTier2Features')
      },
      {
        card: document.getElementById('priceCard3'),
        name: document.getElementById('priceTier3Name'),
        desc: document.getElementById('priceTier3Desc'),
        amount: document.getElementById('priceTier3Amount'),
        time: document.getElementById('priceTier3Time'),
        features: document.getElementById('priceTier3Features')
      }
    ],

accordionItems: document.querySelectorAll('.srvd-accordion-item'),

modal: document.getElementById('consultationModal'),
    openConsultBtns: [
      document.getElementById('srvdOpenConsultBtn'),
      document.getElementById('ctaBookConsultBtn')
    ],
    closeModalBtn: document.getElementById('closeConsultModalBtn'),
    modalForm: document.getElementById('consultationModalForm'),
    modalServiceType: document.getElementById('modalServiceType'),
    modalNotes: document.getElementById('modalUserNotes'),

toastContainer: document.getElementById('toastContainer'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    rtlToggleBtn: document.getElementById('rtlToggleBtn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    navMenu: document.getElementById('navMenu')
  };

let currentServiceId = 'full-wrap';

  function applyService(serviceKey, pushState = true) {
    const data = SERVICES_DATA[serviceKey] || SERVICES_DATA['full-wrap'];
    currentServiceId = data.id;

document.title = `${data.breadcrumbTitle} | AUREON CUSTOMS — Master Vehicle Wrap Studio`;

dom.switcherButtons.forEach(btn => {
      const match = btn.getAttribute('data-service-id') === data.id;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

if (dom.breadcrumbCurrent) {
      dom.breadcrumbCurrent.textContent = data.breadcrumbTitle;
    }

if (dom.eyebrowBadge) dom.eyebrowBadge.textContent = data.eyebrow;
    if (dom.hlPrefix) dom.hlPrefix.textContent = data.hlPrefix;
    if (dom.hlGold) dom.hlGold.textContent = data.hlGold;
    if (dom.subtext) dom.subtext.textContent = data.subtext;
    if (dom.metricTurnaround) dom.metricTurnaround.textContent = data.turnaround;
    if (dom.metricWarranty) dom.metricWarranty.textContent = data.warranty;
    if (dom.metricProtocol) dom.metricProtocol.textContent = data.protocol;

if (dom.stageImg) {
      dom.stageImg.src = data.stageImg;
      dom.stageImg.alt = `Aureon Customs ${data.breadcrumbTitle} Studio Build`;
    }
    if (dom.stageBadgeText) dom.stageBadgeText.textContent = data.stageBadge;
    if (dom.hudStatus) dom.hudStatus.textContent = data.hudStatus;
    if (dom.stageTag) dom.stageTag.innerHTML = data.stageTag;
    if (dom.stageTitle) dom.stageTitle.textContent = data.stageTitle;
    if (dom.stageDesc) dom.stageDesc.textContent = data.stageDesc;

if (dom.overviewHeading) dom.overviewHeading.textContent = data.overviewHeading;
    if (dom.overviewSubtext) dom.overviewSubtext.textContent = data.overviewSubtext;
    if (dom.editorialSubheading) dom.editorialSubheading.textContent = data.editorialSubheading;
    if (dom.editorialParagraph1) dom.editorialParagraph1.textContent = data.editorialP1;
    if (dom.editorialParagraph2) dom.editorialParagraph2.textContent = data.editorialP2;
    if (dom.specFilmGauge) dom.specFilmGauge.textContent = data.specFilmGauge;
    if (dom.specAdhesive) dom.specAdhesive.textContent = data.specAdhesive;

if (dom.timelineList && data.timelineSteps) {
      dom.timelineList.innerHTML = data.timelineSteps.map(step => `
        <div class="srvd-timeline-card">
          <div class="srvd-step-num">${step.num}</div>
          <div class="srvd-step-content">
            <h4 class="srvd-step-title">${step.title}</h4>
            <p class="srvd-step-desc">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

if (data.pricing) {
      data.pricing.forEach((tier, index) => {
        const slot = dom.priceCards[index];
        if (!slot) return;

        if (slot.name) slot.name.textContent = tier.name;
        if (slot.desc) slot.desc.textContent = tier.desc;
        if (slot.amount) slot.amount.textContent = tier.amount;
        if (slot.time) slot.time.textContent = tier.time;

        if (slot.features && tier.features) {
          slot.features.innerHTML = tier.features.map(f => {
            if (f.included) {
              return `<li><i class="fa-solid fa-check"></i> ${f.text}</li>`;
            } else {
              return `<li class="srvd-feature-muted"><i class="fa-solid fa-minus"></i> ${f.text}</li>`;
            }
          }).join('');
        }

        const btn = slot.card.querySelector('.srvd-price-btn');
        if (btn) {
          btn.querySelector('span').textContent = tier.btnText;
        }
      });
    }

if (dom.modalServiceType) {
      dom.modalServiceType.value = data.id;
    }

if (pushState && window.history && window.history.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.set('service', data.id);
      window.history.pushState({ service: data.id }, '', url.toString());
    }
  }

function initFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');

    if (serviceParam && SERVICES_DATA[serviceParam]) {
      applyService(serviceParam, false);
    } else {
      applyService('full-wrap', false);
    }
  }

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.service && SERVICES_DATA[e.state.service]) {
      applyService(e.state.service, false);
    } else {
      initFromUrl();
    }
  });

dom.switcherButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetService = btn.getAttribute('data-service-id');
      if (targetService && SERVICES_DATA[targetService]) {
        applyService(targetService, true);

const heroSection = document.getElementById('serviceDetailsHero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

dom.accordionItems.forEach(item => {
    const trigger = item.querySelector('.srvd-accordion-trigger');
    const icon = item.querySelector('.srvd-faq-icon i');

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

dom.accordionItems.forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const sibTrigger = sibling.querySelector('.srvd-accordion-trigger');
            const sibIcon = sibling.querySelector('.srvd-faq-icon i');
            if (sibTrigger) sibTrigger.setAttribute('aria-expanded', 'false');
            if (sibIcon) sibIcon.className = 'fa-solid fa-plus';
          }
        });

if (isActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          if (icon) icon.className = 'fa-solid fa-plus';
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          if (icon) icon.className = 'fa-solid fa-minus';
        }
      });
    }
  });

document.querySelectorAll('.srvd-price-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.srvd-price-card');
      const tierName = card ? card.querySelector('.srvd-tier-name')?.textContent : 'Custom Package';

      openConsultModal(`Inquiring about ${tierName} under ${SERVICES_DATA[currentServiceId].breadcrumbTitle}`);
    });
  });

function openConsultModal(defaultNote = '') {
    if (!dom.modal) return;
    dom.modal.removeAttribute('hidden');
    dom.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (dom.modalServiceType) {
      dom.modalServiceType.value = currentServiceId;
    }

    if (defaultNote && dom.modalNotes) {
      dom.modalNotes.value = defaultNote;
    }

    const firstInput = dom.modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closeConsultModal() {
    if (!dom.modal) return;
    dom.modal.setAttribute('hidden', '');
    dom.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  dom.openConsultBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openConsultModal();
      });
    }
  });

  if (dom.closeModalBtn) {
    dom.closeModalBtn.addEventListener('click', closeConsultModal);
  }

  if (dom.modal) {
    dom.modal.addEventListener('click', (e) => {
      if (e.target === dom.modal) {
        closeConsultModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dom.modal && !dom.modal.hasAttribute('hidden')) {
      closeConsultModal();
    }
  });

if (dom.modalForm) {
    dom.modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalUserName')?.value || 'Client';
      const vehicle = document.getElementById('modalVehicleModel')?.value || 'Vehicle';

      showToast(`Thank you, ${name}! Your consultation request for your ${vehicle} has been confirmed. Our livery director will contact you within 2 hours.`);

      dom.modalForm.reset();
      closeConsultModal();
    });
  }

function showToast(message, duration = 5000) {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'srvd-toast';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: #c9a96e; font-size: 1.1rem;"></i>
      <span>${message}</span>
    `;

    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 320);
    }, duration);
  }

if (dom.backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        dom.backToTopBtn.classList.add('visible');
      } else {
        dom.backToTopBtn.classList.remove('visible');
      }
    });

    dom.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

function initTheme() {
    const savedTheme = localStorage.getItem('aureon_theme') || 'light';
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      localStorage.setItem('aureon_theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      localStorage.setItem('aureon_theme', 'light');
    }
  }

  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      applyTheme(isDark ? 'light' : 'dark');
      showToast(`Switched to ${isDark ? 'Light' : 'Dark'} Mode`, 2000);
    });
  }

if (dom.rtlToggleBtn) {
    dom.rtlToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      showToast(`Layout orientation: ${newDir.toUpperCase()}`, 2000);
    });
  }

if (dom.mobileMenuBtn && dom.navMenu) {
    dom.mobileMenuBtn.addEventListener('click', () => {
      const isOpen = dom.navMenu.classList.contains('mobile-active');
      dom.navMenu.classList.toggle('mobile-active', !isOpen);
      dom.mobileMenuBtn.classList.toggle('active', !isOpen);
      dom.mobileMenuBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  }

function initStickyHeader() {
    const header = document.querySelector('.site-header') || document.getElementById('mainHeader');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 15) {
        header.classList.add('is-sticky', 'is-scrolled');
      } else {
        header.classList.remove('is-sticky', 'is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

initTheme();
  initStickyHeader();
  initFromUrl();
});

