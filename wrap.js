
document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initRtlSystem();
  initStickyHeader();
  initMobileNavigation();
  initSmoothScroll();
  initWrapTypesStage();
  initConsultationModal();
  initBackToTop();
});

function initThemeSystem() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

  const savedTheme = localStorage.getItem('aureon_theme') || 'light';
  body.classList.toggle('theme-dark', savedTheme === 'dark');
  body.classList.toggle('theme-light', savedTheme !== 'dark');

  if (themeToggleBtn) {
    updateThemeBtnTooltip(themeToggleBtn, savedTheme);

    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('theme-dark');
      body.classList.toggle('theme-light', !isDark);
      const newTheme = isDark ? 'dark' : 'light';
      localStorage.setItem('aureon_theme', newTheme);
      updateThemeBtnTooltip(themeToggleBtn, newTheme);
      showWrapToast(`Switched to ${newTheme === 'dark' ? 'Dark Atelier' : 'Light Showroom'} Mode`, 'info');
    });
  }
}

function updateThemeBtnTooltip(btn, theme) {
  const title = theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
  btn.setAttribute('title', title);
  btn.setAttribute('aria-label', title);
}

function initRtlSystem() {
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const html = document.documentElement;

  const savedDir = localStorage.getItem('aureon_direction') || 'ltr';
  html.setAttribute('dir', savedDir);

  if (rtlToggleBtn) {
    updateRtlBtnTooltip(rtlToggleBtn, savedDir);

    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = html.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      html.setAttribute('dir', newDir);
      localStorage.setItem('aureon_direction', newDir);
      updateRtlBtnTooltip(rtlToggleBtn, newDir);
      showWrapToast(`Layout direction: ${newDir.toUpperCase()}`, 'info');
    });
  }
}

function updateRtlBtnTooltip(btn, dir) {
  const title = dir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout';
  btn.setAttribute('title', title);
  btn.setAttribute('aria-label', title);
}

function initStickyHeader() {
  const header = document.querySelector('.site-header') || document.getElementById('mainHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-sticky', 'is-scrolled');
    } else {
      header.classList.remove('is-sticky', 'is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  if (!mobileMenuBtn || !navMenu) return;

  const toggleMenu = (open) => {
    const isCurrentlyOpen = navMenu.classList.contains('open') || navMenu.classList.contains('mobile-active');
    const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

    navMenu.classList.toggle('open', shouldOpen);
    navMenu.classList.toggle('mobile-active', shouldOpen);
    mobileMenuBtn.classList.toggle('active', shouldOpen);
    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    const isOpen = navMenu.classList.contains('open') || navMenu.classList.contains('mobile-active');
    if (isOpen && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (link.id === 'navHomeLink') return;

      const isOpen = navMenu.classList.contains('open') || navMenu.classList.contains('mobile-active');
      if (isOpen) {
        toggleMenu(false);
      }
    });
  });

  const navHomeItem = document.getElementById('navHomeItem');
  const navHomeLink = document.getElementById('navHomeLink');
  if (navHomeItem && navHomeLink) {
    navHomeLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();
        const isDropdownOpen = navHomeItem.classList.toggle('dropdown-open');
        navHomeLink.setAttribute('aria-expanded', isDropdownOpen ? 'true' : 'false');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      const isOpen = navMenu.classList.contains('open') || navMenu.classList.contains('mobile-active');
      if (isOpen) {
        toggleMenu(false);
      }
    }
  });
}

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

const WRAP_TYPES_DATA = {
  gloss: {
    key: 'gloss',
    name: 'High Gloss Finish',
    badgeText: 'High Gloss Spec',
    indexText: 'TYPE 01 / 07',
    tagline: 'Mirror-Like Saturation & Pure Specular Depth',
    image: 'assets/images/gallery-porsche-emerald.jpg',
    imageAlt: 'High Gloss finish on emerald performance sports coupe Porsche 911 GT3',
    caption: 'Showcase: Porsche 911 GT3 — High Gloss (Emerald Petrol Teal)',
    captionVehicle: 'Porsche 911 GT3',
    metric1: '99.4% Specular Index',
    metric2: '3.8 mil Dual-Cast',
    description: 'Engineered to rival and surpass factory OEM clearcoats with orange-peel-free saturation and razor-sharp mirror reflections under direct sunlight.',
    durability: '7 – 10 Years',
    optical: '99.4% Specular',
    tech: 'Self-Healing Cast',
    pairings: 'Exotics & Supercars',
    paletteName: 'Emerald Petrol Teal',
    palette: [
      { 
        name: 'Emerald Petrol Teal', 
        color: '#087E8B', 
        image: 'assets/images/gallery-porsche-emerald.jpg', 
        vehicle: 'Porsche 911 GT3',
        tint: 'rgba(8, 126, 139, 0.45)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(8, 126, 139, 0.55) 0%, transparent 70%)'
      },
      { 
        name: 'Liquid Champagne Gold', 
        color: '#C9A96E', 
        image: 'assets/images/gallery-corvette-yellow.jpg', 
        vehicle: 'Corvette Stingray C8',
        tint: 'rgba(201, 169, 110, 0.45)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(201, 169, 110, 0.55) 0%, transparent 70%)'
      },
      { 
        name: 'Obsidian Jet Black', 
        color: '#0C1821', 
        image: 'assets/images/gallery-mclaren-stealth.jpg', 
        vehicle: 'McLaren 720S Black Series',
        tint: 'rgba(12, 24, 33, 0.65)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)'
      },
      { 
        name: 'Rosso Corsa Crimson', 
        color: '#990000', 
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari 488 Aperta',
        tint: 'rgba(153, 0, 0, 0.48)',
        glow: 'radial-gradient(circle at 60% 40%, rgba(220, 38, 38, 0.55) 0%, transparent 70%)'
      },
      { 
        name: 'Pure Glacier White', 
        color: '#F3F4F6', 
        image: 'assets/images/gallery-porsche.jpg', 
        vehicle: 'Porsche 911 GT3 RS',
        tint: 'rgba(243, 244, 246, 0.35)',
        glow: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.5) 0%, transparent 65%)'
      }
    ]
  },
  matte: {
    key: 'matte',
    name: 'Stealth Matte Finish',
    badgeText: 'Stealth Matte Spec',
    indexText: 'TYPE 02 / 07',
    tagline: 'Zero-Glare Flat Sheen Sculpting Muscular Contours',
    image: 'assets/images/gallery-defender-matte.jpg',
    imageAlt: 'Stealth Matte finish on rugged luxury SUV Land Rover Defender',
    caption: 'Showcase: Land Rover Defender V8 — Stealth Matte (Charcoal Black)',
    captionVehicle: 'Land Rover Defender V8',
    metric1: '0.4% Glare Reflection',
    metric2: '4.0 mil Micro-Satin',
    description: 'A non-reflective, satin-free flat surface that eliminates glare while sculpting aggressive body lines and dramatic muscular contours into pure silhouette.',
    durability: '5 – 7 Years',
    optical: 'Zero-Glare Sheen',
    tech: 'Oleophobic Shield',
    pairings: 'Performance SUVs',
    paletteName: 'Stealth Matte Black',
    palette: [
      { 
        name: 'Stealth Matte Black', 
        color: '#1A1D20', 
        image: 'assets/images/gallery-defender-matte.jpg', 
        vehicle: 'Land Rover Defender V8',
        tint: 'rgba(26, 29, 32, 0.5)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(80, 90, 100, 0.3) 0%, transparent 70%)'
      },
      { 
        name: 'Nardo Matte Grey', 
        color: '#4B5563', 
        image: 'assets/images/gallery-audi-rs.jpg', 
        vehicle: 'Audi RS6 Avant Matte Spec',
        tint: 'rgba(75, 85, 99, 0.52)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(107, 114, 128, 0.45) 0%, transparent 70%)'
      },
      { 
        name: 'Deep Tactical Teal', 
        color: '#1B3639', 
        image: 'assets/images/gallery-defender-matte.jpg', 
        vehicle: 'Defender Tactical Teal Edition',
        tint: 'rgba(27, 54, 57, 0.65)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(8, 126, 139, 0.48) 0%, transparent 70%)'
      },
      { 
        name: 'Desert Sand Matte', 
        color: '#786C5A', 
        image: 'assets/images/gallery-defender-matte.jpg', 
        vehicle: 'Defender Sahara Sand Edition',
        tint: 'rgba(120, 108, 90, 0.62)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(201, 169, 110, 0.45) 0%, transparent 70%)'
      },
      { 
        name: 'Frozen Alpine White', 
        color: '#E5E7EB', 
        image: 'assets/images/gallery-porsche.jpg', 
        vehicle: 'Porsche GT3 Frozen White',
        tint: 'rgba(229, 231, 235, 0.42)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.48) 0%, transparent 70%)'
      }
    ]
  },
  satin: {
    key: 'satin',
    name: 'Liquid Satin Finish',
    badgeText: 'Liquid Satin Spec',
    indexText: 'TYPE 03 / 07',
    tagline: 'Silken Eggshell Sheen with Soft Light-Diffusion',
    image: 'assets/images/gallery-mclaren-stealth.jpg',
    imageAlt: 'Liquid Satin sheen on exotic aerodynamic supercar McLaren 720S',
    caption: 'Showcase: McLaren 720S — Liquid Satin (Champagne Aurum)',
    captionVehicle: 'McLaren 720S',
    metric1: '42% Diffused Sheen',
    metric2: '3.8 mil Silk Cast',
    description: 'The balance between gloss and matte—a soft eggshell silk luster that captures ambient light gracefully and accentuates flowing body curves.',
    durability: '7 – 9 Years',
    optical: 'Eggshell Silk Sheen',
    tech: 'Hydrophobic Silk',
    pairings: 'Supercars & GTs',
    paletteName: 'Satin Champagne Aurum',
    palette: [
      { 
        name: 'Satin Champagne Aurum', 
        color: '#C9A96E', 
        image: 'assets/images/gallery-corvette-yellow.jpg', 
        vehicle: 'Corvette Satin Aurum Edition',
        tint: 'rgba(201, 169, 110, 0.48)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(201, 169, 110, 0.52) 0%, transparent 70%)'
      },
      { 
        name: 'Satin Petrol Slate', 
        color: '#2A3F44', 
        image: 'assets/images/gallery-mclaren-stealth.jpg', 
        vehicle: 'McLaren 720S Satin Petrol Slate',
        tint: 'rgba(42, 63, 68, 0.58)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(8, 126, 139, 0.45) 0%, transparent 70%)'
      },
      { 
        name: 'Satin Battleship Grey', 
        color: '#52616B', 
        image: 'assets/images/gallery-audi-rs.jpg', 
        vehicle: 'Audi RS Satin Battleship Grey',
        tint: 'rgba(82, 97, 107, 0.55)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.42) 0%, transparent 70%)'
      },
      { 
        name: 'Satin Frozen Pearl', 
        color: '#F8FAFC', 
        image: 'assets/images/gallery-porsche.jpg', 
        vehicle: 'Porsche Satin Frozen Pearl',
        tint: 'rgba(248, 250, 252, 0.38)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.52) 0%, transparent 70%)'
      },
      { 
        name: 'Satin Royal Burgundy', 
        color: '#6A1B29', 
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari Satin Royal Burgundy',
        tint: 'rgba(106, 27, 41, 0.55)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.48) 0%, transparent 70%)'
      }
    ]
  },
  metallic: {
    key: 'metallic',
    name: 'Dynamic Metallic Finish',
    badgeText: 'Metallic Spec',
    indexText: 'TYPE 04 / 07',
    tagline: 'Micro-Fine Suspended Mica Flakes with Prismatic Flash',
    image: 'assets/images/gallery-rolls-dualtone.jpg',
    imageAlt: 'Dynamic Metallic finish with reflective flakes on bespoke touring saloon Rolls-Royce Ghost',
    caption: 'Showcase: Rolls-Royce Ghost — Dynamic Metallic (Champagne Bronze)',
    captionVehicle: 'Rolls-Royce Ghost',
    metric1: 'Dense Mica Flake',
    metric2: '4.2 mil Tri-Coat',
    description: 'Suspended micro-fine synthetic mica particles ignite under direct natural sunlight, generating prismatic depth and shifting color intensity.',
    durability: '6 – 8 Years',
    optical: 'Prismatic Sparkle',
    tech: 'UV Anti-Oxidant',
    pairings: 'Saloons & GTs',
    paletteName: 'Metallic Champagne Bronze',
    palette: [
      { 
        name: 'Metallic Champagne Bronze', 
        color: '#85704D', 
        image: 'assets/images/gallery-rolls-dualtone.jpg', 
        vehicle: 'Rolls-Royce Ghost Bespoke Bronze',
        tint: 'rgba(133, 112, 77, 0.52)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(201, 169, 110, 0.58) 0%, transparent 70%)'
      },
      { 
        name: 'Metallic Deep Peacock Teal', 
        color: '#0E5B63', 
        image: 'assets/images/gallery-porsche-emerald.jpg', 
        vehicle: 'Porsche Metallic Peacock Teal',
        tint: 'rgba(14, 91, 99, 0.55)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(8, 126, 139, 0.52) 0%, transparent 70%)'
      },
      { 
        name: 'Liquid Quicksilver Silver', 
        color: '#94A3B8', 
        image: 'assets/images/compare-after-wrapped.jpg', 
        vehicle: 'GT Coupe Liquid Quicksilver',
        tint: 'rgba(148, 163, 184, 0.45)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.48) 0%, transparent 70%)'
      },
      { 
        name: 'Midnight Metallic Cobalt', 
        color: '#1B263B', 
        image: 'assets/images/gallery-audi-rs.jpg', 
        vehicle: 'Audi RS Metallic Midnight Cobalt',
        tint: 'rgba(27, 38, 59, 0.65)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.45) 0%, transparent 70%)'
      },
      { 
        name: 'Imperial Plum Purple', 
        color: '#3B0944', 
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari Imperial Plum Metallic',
        tint: 'rgba(59, 9, 68, 0.62)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.48) 0%, transparent 70%)'
      }
    ]
  },
  chrome: {
    key: 'chrome',
    name: 'Mirror Chrome Finish',
    badgeText: 'Mirror Chrome Spec',
    indexText: 'TYPE 05 / 07',
    tagline: 'True Specular Liquid Metal with Zero-Distortion Reflections',
    image: 'assets/images/compare-after-wrapped.jpg',
    imageAlt: 'Mirror Chrome precision wrapped exotic vehicle',
    caption: 'Showcase: Exotic GT Coupe — Mirror Liquid Chrome (Silver)',
    captionVehicle: 'Exotic GT Coupe',
    metric1: '100% Specular Mirror',
    metric2: '5.5 mil Metallized',
    description: 'The ultimate statement of automotive spectacle. Real vapor-metalized aluminum produces authentic liquid chrome reflections without distortion.',
    durability: '3 – 5 Years',
    optical: '100% Mirror Spec',
    tech: 'Vapor Metallized',
    pairings: 'Show & VIP Builds',
    paletteName: 'Liquid Mirror Silver',
    palette: [
      { 
        name: 'Liquid Mirror Silver', 
        color: '#E2E8F0', 
        image: 'assets/images/compare-after-wrapped.jpg', 
        vehicle: 'Exotic GT Mirror Silver',
        tint: 'rgba(226, 232, 240, 0.35)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.65) 0%, transparent 70%)'
      },
      { 
        name: 'Mirror Royal Gold', 
        color: '#D4AF37', 
        image: 'assets/images/gallery-corvette-yellow.jpg', 
        vehicle: 'Corvette Mirror Royal Gold',
        tint: 'rgba(212, 175, 55, 0.52)',
        glow: 'radial-gradient(circle at 55% 45%, rgba(212, 175, 55, 0.6) 0%, transparent 70%)'
      },
      { 
        name: 'Electric Chrome Teal', 
        color: '#088395', 
        image: 'assets/images/gallery-porsche-emerald.jpg', 
        vehicle: 'Porsche Electric Chrome Teal',
        tint: 'rgba(8, 131, 149, 0.52)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(8, 131, 149, 0.52) 0%, transparent 70%)'
      },
      { 
        name: 'Rose Red Mirror', 
        color: '#B91C1C', 
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari Rose Red Mirror Chrome',
        tint: 'rgba(185, 28, 28, 0.52)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.58) 0%, transparent 70%)'
      },
      { 
        name: 'Black Onyx Chrome', 
        color: '#1E1B4B', 
        image: 'assets/images/gallery-mclaren-stealth.jpg', 
        vehicle: 'McLaren Black Onyx Chrome',
        tint: 'rgba(30, 27, 75, 0.65)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 70%)'
      }
    ]
  },
  carbon_fibre: {
    key: 'carbon_fibre',
    name: 'Carbon Fibre Finish',
    badgeText: 'Carbon Weave Spec',
    indexText: 'TYPE 06 / 07',
    tagline: 'Autoclave 2x2 Twill & Forged Weave with Tactile 3D Depth',
    image: 'assets/images/service-custom-mods.jpg',
    imageAlt: 'High-spec coupe aerodynamic package wrapped in 2x2 Twill Carbon Fibre',
    caption: 'Showcase: Aero Package — Carbon Fibre (2x2 Classic Twill)',
    captionVehicle: 'Aero Package Coupe',
    metric1: '3D Tactile Weave',
    metric2: '5.0 mil Embossed',
    description: 'Authentic dimensional weave replicating autoclaved aerospace pre-preg carbon fiber for vehicle hoods, roofs, wing mirrors, and aero packages.',
    durability: '5 – 7 Years',
    optical: '3D Tactile Weave',
    tech: 'Micro-Rib Topcoat',
    pairings: 'Aero & Roof Accents',
    paletteName: '2x2 Classic Twill Weave',
    palette: [
      { 
        name: '2x2 Classic Twill Weave', 
        color: '#171717', 
        image: 'assets/images/service-custom-mods.jpg', 
        vehicle: 'Bespoke Coupe 2x2 Twill',
        tint: 'rgba(23, 23, 23, 0.45)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)'
      },
      { 
        name: 'Forged Marble Composite', 
        color: '#2B2D42', 
        image: 'assets/images/service-custom-mods.jpg', 
        vehicle: 'Forged Aero Composite Spec',
        tint: 'rgba(43, 45, 66, 0.52)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.38) 0%, transparent 70%)'
      },
      { 
        name: 'Tinted Blue Carbon', 
        color: '#1E293B', 
        image: 'assets/images/gallery-mclaren-stealth.jpg', 
        vehicle: 'McLaren Blue Carbon Spec',
        tint: 'rgba(30, 41, 59, 0.62)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.42) 0%, transparent 70%)'
      },
      { 
        name: 'Tinted Petrol Teal Carbon', 
        color: '#132E30', 
        image: 'assets/images/gallery-porsche-emerald.jpg', 
        vehicle: 'Porsche Teal Carbon Spec',
        tint: 'rgba(19, 46, 48, 0.62)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(8, 126, 139, 0.48) 0%, transparent 70%)'
      },
      { 
        name: 'Tinted Crimson Carbon', 
        color: '#3F1B1B', 
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari Crimson Carbon Spec',
        tint: 'rgba(63, 27, 27, 0.62)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.42) 0%, transparent 70%)'
      }
    ]
  },
  iridescent: {
    key: 'iridescent',
    name: 'Colour Shift Finish',
    badgeText: 'Chameleon Spec',
    indexText: 'TYPE 07 / 07',
    tagline: 'Dynamic Optical Interference Shifting Across Viewing Angles',
    image: 'assets/images/Teal Range Rover in Neon Garage.png',
    imageAlt: 'Custom Range Rover wrapped in Color Shift Iridescent Teal & Violet film',
    caption: 'Showcase: Range Rover SV — Colour Shift Chameleon (Teal to Violet)',
    captionVehicle: 'Range Rover SV',
    metric1: 'Prismatic Shift',
    metric2: '4.4 mil Prismatic',
    description: 'Multi-layer optical interference technology that transitions through three distinct color spectrums depending on lighting perspective and viewing angle.',
    durability: '5 – 7 Years',
    optical: 'Chameleon Shift',
    tech: 'Dual Polarization',
    pairings: 'Bespoke Exotics',
    paletteName: 'Deep Sea Teal to Royal Violet',
    palette: [
      { 
        name: 'Deep Sea Teal to Royal Violet', 
        gradient: 'linear-gradient(135deg, #087E8B 0%, #7C3AED 50%, #C9A96E 100%)', 
        color: '#087E8B',
        image: 'assets/images/Teal Range Rover in Neon Garage.png', 
        vehicle: 'Range Rover SV Chameleon',
        tint: 'linear-gradient(135deg, rgba(8, 126, 139, 0.58) 0%, rgba(124, 58, 237, 0.52) 50%, rgba(201, 169, 110, 0.45) 100%)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.5) 0%, transparent 70%)'
      },
      { 
        name: 'Volcanic Ember to Sunset Gold', 
        gradient: 'linear-gradient(135deg, #E11D48 0%, #D97706 50%, #FBBF24 100%)', 
        color: '#E11D48',
        image: 'assets/images/gallery-ferrari-aperta.jpg', 
        vehicle: 'Ferrari Volcanic Chameleon',
        tint: 'linear-gradient(135deg, rgba(225, 29, 72, 0.58) 0%, rgba(217, 119, 6, 0.52) 50%, rgba(251, 191, 36, 0.45) 100%)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.5) 0%, transparent 70%)'
      },
      { 
        name: 'Aurora Emerald to Electric Cyan', 
        gradient: 'linear-gradient(135deg, #059669 0%, #0284C7 50%, #6366F1 100%)', 
        color: '#059669',
        image: 'assets/images/gallery-porsche-emerald.jpg', 
        vehicle: 'Porsche Aurora Shift Edition',
        tint: 'linear-gradient(135deg, rgba(5, 150, 105, 0.58) 0%, rgba(2, 132, 199, 0.52) 50%, rgba(99, 102, 241, 0.45) 100%)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.5) 0%, transparent 70%)'
      },
      { 
        name: 'Titanium Slate to Warm Bronze', 
        gradient: 'linear-gradient(135deg, #475569 0%, #1E293B 50%, #C9A96E 100%)', 
        color: '#475569',
        image: 'assets/images/gallery-rolls-dualtone.jpg', 
        vehicle: 'Rolls-Royce Titanium Bronze Shift',
        tint: 'linear-gradient(135deg, rgba(71, 85, 105, 0.58) 0%, rgba(30, 41, 59, 0.52) 50%, rgba(201, 169, 110, 0.45) 100%)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(201, 169, 110, 0.48) 0%, transparent 70%)'
      }
    ]
  }
};

let currentActiveWrapType = 'gloss';

function initWrapTypesStage() {
  const tabs = document.querySelectorAll('.wrap-type-tab');
  const stageVisualCard = document.getElementById('stageVisualCard');
  const stageMainImg = document.getElementById('stageMainImg');
  const stageColorTint = document.getElementById('stageColorTint');
  const stageColorGlow = document.getElementById('stageColorGlow');
  const stageBadgeText = document.getElementById('stageBadgeText');
  const stageIndexBadge = document.getElementById('stageIndexBadge');
  const stageColorPillDot = document.getElementById('stageColorPillDot');
  const stageColorPillText = document.getElementById('stageColorPillText');
  const stageHudMetric1 = document.getElementById('stageHudMetric1');
  const stageHudMetric2 = document.getElementById('stageHudMetric2');
  const stageCaptionText = document.getElementById('stageCaptionText');

  const stageTitle = document.getElementById('stageTitle');
  const stageTagline = document.getElementById('stageTagline');
  const stageDescription = document.getElementById('stageDescription');
  const specDurability = document.getElementById('specDurability');
  const specOptical = document.getElementById('specOptical');
  const specTech = document.getElementById('specTech');
  const specPairings = document.getElementById('specPairings');
  const paletteActiveName = document.getElementById('paletteActiveName');
  const stagePaletteChips = document.getElementById('stagePaletteChips');
  const stageCustomiseBtn = document.getElementById('stageCustomiseBtn');
  const stageConsultBtn = document.getElementById('stageConsultBtn');

  if (!tabs.length || !stageMainImg || !stageTitle) return;

  const applyColorToVisualStage = (shadeItem, finishData) => {
    if (!shadeItem) return;

    if (stagePaletteChips) {
      stagePaletteChips.querySelectorAll('.palette-chip').forEach(c => {
        const isMatch = c.getAttribute('data-shade-name') === shadeItem.name;
        c.classList.toggle('is-active', isMatch);
      });
    }

    if (paletteActiveName) {
      paletteActiveName.textContent = shadeItem.name;
    }

    if (stageColorPillDot) {
      if (shadeItem.gradient) {
        stageColorPillDot.style.background = shadeItem.gradient;
      } else {
        stageColorPillDot.style.backgroundColor = shadeItem.color || '#c9a96e';
      }
      stageColorPillDot.style.boxShadow = `0 0 10px ${shadeItem.color || '#c9a96e'}`;
    }
    if (stageColorPillText) {
      stageColorPillText.textContent = shadeItem.name;
    }

    if (stageCaptionText) {
      const vehicle = shadeItem.vehicle || finishData.captionVehicle || 'Aureon Spec';
      stageCaptionText.textContent = `Showcase: ${vehicle} — ${finishData.name} (${shadeItem.name})`;
    }

    if (shadeItem.image && stageMainImg) {
      const currentSrc = stageMainImg.getAttribute('src');
      if (currentSrc !== shadeItem.image) {
        stageMainImg.classList.add('is-switching');
        setTimeout(() => {
          stageMainImg.src = shadeItem.image;
          stageMainImg.alt = `${finishData.name} in ${shadeItem.name} on ${shadeItem.vehicle || 'performance vehicle'}`;
          setTimeout(() => stageMainImg.classList.remove('is-switching'), 160);
        }, 100);
      }
    }

    if (stageColorTint) {
      stageColorTint.style.background = shadeItem.tint || shadeItem.gradient || shadeItem.color || 'transparent';
      stageColorTint.classList.add('is-active');
    }
    if (stageColorGlow) {
      stageColorGlow.style.background = shadeItem.glow || (`radial-gradient(circle at 50% 50%, ${shadeItem.color || '#c9a96e'} 0%, transparent 70%)`);
      stageColorGlow.classList.add('is-active');
    }

    if (stageVisualCard) {
      stageVisualCard.classList.remove('stage-color-updated');
      void stageVisualCard.offsetWidth; // Force CSS reflow
      stageVisualCard.classList.add('stage-color-updated');
      if (shadeItem.color) {
        stageVisualCard.style.borderColor = `${shadeItem.color}66`;
      }
    }

    if (stageCustomiseBtn) {
      stageCustomiseBtn.href = `customise.html?finish=${encodeURIComponent(finishData.key)}&color=${encodeURIComponent(shadeItem.name)}`;
    }
  };

  const selectWrapType = (typeKey, notifyUser = false) => {
    const data = WRAP_TYPES_DATA[typeKey] || WRAP_TYPES_DATA.gloss;
    currentActiveWrapType = typeKey;

    tabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-type') === typeKey;
      tab.classList.toggle('is-active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      if (isMatch) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    if (stageBadgeText) stageBadgeText.textContent = data.badgeText;
    if (stageIndexBadge) stageIndexBadge.textContent = data.indexText;
    if (stageHudMetric1) stageHudMetric1.textContent = data.metric1;
    if (stageHudMetric2) stageHudMetric2.textContent = data.metric2;

    if (stageTitle) stageTitle.textContent = data.name;
    if (stageTagline) stageTagline.textContent = data.tagline;
    if (stageDescription) stageDescription.textContent = data.description;
    if (specDurability) specDurability.textContent = data.durability;
    if (specOptical) specOptical.textContent = data.optical;
    if (specTech) specTech.textContent = data.tech;
    if (specPairings) specPairings.textContent = data.pairings;

    if (stagePaletteChips) {
      stagePaletteChips.innerHTML = '';

      data.palette.forEach((item, index) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `palette-chip ${index === 0 ? 'is-active' : ''}`;
        chip.setAttribute('data-shade-name', item.name);
        chip.setAttribute('aria-label', `Curated shade: ${item.name}`);
        chip.title = item.name;

        if (item.gradient) {
          chip.style.background = item.gradient;
        } else {
          chip.style.backgroundColor = item.color;
        }

        chip.addEventListener('click', () => {
          applyColorToVisualStage(item, data);
        });

        chip.addEventListener('mouseenter', () => {
          if (paletteActiveName) paletteActiveName.textContent = item.name;
        });

        chip.addEventListener('mouseleave', () => {
          const activeChip = stagePaletteChips.querySelector('.palette-chip.is-active');
          if (activeChip && paletteActiveName) {
            paletteActiveName.textContent = activeChip.getAttribute('data-shade-name') || activeChip.title;
          }
        });

        stagePaletteChips.appendChild(chip);
      });
    }

    if (data.palette && data.palette.length > 0) {
      applyColorToVisualStage(data.palette[0], data);
    } else {
      stageMainImg.src = data.image;
      stageMainImg.alt = data.imageAlt;
      if (stageCaptionText) stageCaptionText.textContent = data.caption;
    }

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('finish', typeKey);
      window.history.replaceState({ finish: typeKey }, '', url.toString());
    } catch (e) {

    }

    if (notifyUser) {
      showWrapToast(`Loaded ${data.name} specification & imagery.`, 'info');
    }
  };

  tabs.forEach((tab, index) => {
    const typeKey = tab.getAttribute('data-type');

    tab.addEventListener('click', () => {
      selectWrapType(typeKey, true);
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        tabs[targetIndex].focus();
        const nextKey = tabs[targetIndex].getAttribute('data-type');
        selectWrapType(nextKey, true);
      }
    });
  });

  if (stageConsultBtn) {
    stageConsultBtn.addEventListener('click', () => {
      const data = WRAP_TYPES_DATA[currentActiveWrapType] || WRAP_TYPES_DATA.gloss;
      if (typeof window.openWrapConsultationModal === 'function') {
        window.openWrapConsultationModal(`Interested in ${data.name} consultation and bespoke quote.`);
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const finishFromUrl = params.get('finish') || params.get('type');
  if (finishFromUrl && WRAP_TYPES_DATA[finishFromUrl]) {
    selectWrapType(finishFromUrl, false);
  } else {
    selectWrapType('gloss', false);
  }
}

function initConsultationModal() {
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('closeConsultModalBtn');
  const form = document.getElementById('consultationModalForm');
  const notesField = document.getElementById('modalUserNotes');

  if (!modal) return;

  const closeModal = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  const openModal = (defaultNotes = '') => {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    if (notesField && defaultNotes) {
      notesField.value = defaultNotes;
    }

    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.modal-submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Submitting Request...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        closeModal();
        showWrapToast('Consultation request received. Our studio director will contact you within 24 hours.', 'success');
      }, 800);
    });
  }

  window.openWrapConsultationModal = openModal;
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function showWrapToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.id = 'toastContainer';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}
