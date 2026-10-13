

document.addEventListener('DOMContentLoaded', () => {
  initBlogCategoryFilter();
  initBlogSearch();
  initBlogBookmarks();
  initArticleReaderModal();
  initBlogNewsletter();
  initBlogSmoothScroll();
});

function initBlogCategoryFilter() {
  const filterTabs = document.querySelectorAll('.blg-filter-tab');
  const cards = document.querySelectorAll('.blg-card');
  const noResults = document.getElementById('blgNoResults');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedCategory = tab.getAttribute('data-category');

filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      let visibleCount = 0;

      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          card.style.animation = 'blgFadeIn 0.35s ease forwards';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.hidden = visibleCount > 0;
      }
    });
  });

  const resetBtn = document.getElementById('blgResetSearchBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const allTab = document.querySelector('.blg-filter-tab[data-category="all"]');
      if (allTab) allTab.click();
      const searchInput = document.getElementById('blgSearchInput');
      if (searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
      }
    });
  }
}

function initBlogSearch() {
  const searchInput = document.getElementById('blgSearchInput');
  const searchClear = document.getElementById('blgSearchClear');
  const cards = document.querySelectorAll('.blg-card');
  const noResults = document.getElementById('blgNoResults');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (searchClear) searchClear.hidden = query.length === 0;

    let matchCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector('.blg-card-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.blg-card-desc')?.textContent.toLowerCase() || '';
      const category = card.getAttribute('data-category')?.toLowerCase() || '';

      const isMatch = title.includes(query) || desc.includes(query) || category.includes(query);

      if (isMatch) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.hidden = matchCount > 0;
    }
  });

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.hidden = true;
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    });
  }
}

function initBlogBookmarks() {
  const bookmarkBtns = document.querySelectorAll('.blg-card-bookmark-btn');

  bookmarkBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isBookmarked = btn.classList.toggle('bookmarked');
      const icon = btn.querySelector('i');

      if (icon) {
        if (isBookmarked) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
          showBlogToast('Article saved to your private studio bookmarks.', 'success');
        } else {
          icon.classList.remove('fa-solid');
          icon.classList.add('fa-regular');
          showBlogToast('Article removed from bookmarks.', 'info');
        }
      }
    });
  });
}

const ARTICLE_DATABASE = {
  'cover-story': {
    category: 'AEROSPACE MATERIALS',
    title: 'Cast PVC vs. Polyurethane: The Engineering Principles Behind 7-Year Wrap Durability.',
    author: 'Marcus Vance',
    role: 'Founder & Master Livery Director',
    authorImg: 'assets/images/team-marcus.jpg',
    date: 'October 2026',
    readTime: '7 Min Read',
    content: `
      <p>When selecting a transformation film for a vehicle in excess of $200,000, understanding the difference between calendered and cast PVC is not an academic exercise—it is the difference between paint preservation and catastrophic clearcoat damage.</p>
      <h4>1. The Molecular Difference: Cast vs. Calendered</h4>
      <p>Calendered vinyl is produced by extruding a PVC dough through rolling pins under tension. This imparts physical stress into the molecular chain. When subjected to UV radiation and thermal cycling (such as parked in 35°C sunlight followed by 10°C nights), calendered film attempts to shrink back to its original dough form, pulling back from edges and lifting on recesses.</p>
      <p>In contrast, aerospace cast vinyl is formulated as a liquid organosol poured onto a casting sheet and cured in an oven with zero physical tension. The resulting film possesses isotropic molecular balance, yielding zero memory pull-back.</p>
      <h4>2. The 95°C Post-Heating Memory Threshold</h4>
      <p>Once a panel is wrapped, the vinyl is subjected to infrared pyrometer-controlled post-heating at 90°C–95°C. This alters the plasticizer crystalline matrix, permanently resetting its relaxation state to the exact contours of the vehicle's fender or body crease.</p>
      <h4>3. Safe Removal Guarantee</h4>
      <p>Because premium cast films employ low-tack, cross-linked acrylic adhesive systems with air-egress microchannels, thermal release leaves zero chemical residue upon decommissioning 5 to 7 years later, revealing pristine factory paint.</p>
    `
  },
  'knife-free-standard': {
    category: 'WRAP TECH',
    title: 'Why 100% Knife-Free Tape is the Only Acceptable Standard on Factory Supercar Paint.',
    author: 'Stefan Rossi',
    role: 'Lead Vinyl & PPF Master Craftsperson',
    authorImg: 'assets/images/team-stefan.jpg',
    date: 'Oct 04, 2026',
    readTime: '5 Min Read',
    content: `
      <p>Even among experienced installers, the human hand cannot guarantee a consistent 0.05mm blade depth control across compound curves. A single micro-score on factory clearcoat initiates galvanic corrosion, rust creep, and permanent finish damage.</p>
      <h4>The Filament Tape Protocol</h4>
      <p>Aureon Customs was founded on an absolute Blade-Zero mandate. Before vinyl ever touches the vehicle, high-tensile ultra-fine polymer filament tape (Knifeless Tape) is mapped along panel seams, emblem returns, and bodylines.</p>
      <p>Once the cast film is squeegeed over the filament, the technician pulls the thread upward through the film. The filament shears the vinyl from underneath with microscopic precision, resulting in perfectly uniform, blade-free cutlines.</p>
    `
  },
  'digital-to-carbon': {
    category: 'LIVERY DESIGN',
    title: 'From Digital CAD to Carbon: Translating FIA Motorsport Heritage to Street Exotics.',
    author: 'Marcus Vance',
    role: 'Founder & Master Livery Director',
    authorImg: 'assets/images/team-marcus.jpg',
    date: 'Sep 28, 2026',
    readTime: '6 Min Read',
    content: `
      <p>Designing a racing livery in 2D Adobe Illustrator and applying it onto a three-dimensional sculpted quarter panel always leads to severe graphic distortion without mathematical compensation.</p>
      <h4>3D Photorealistic Pre-Visualization</h4>
      <p>At Aureon, every custom livery begins with a millimeter-accurate 3D CAD scan of your vehicle. Graphic elements, racing stripes, and sponsorship typography are mapped in 3D Blender space, previewing how daylight and shadow play across body contours.</p>
      <p>Stretch-compensation algorithms then unroll the 3D surface into flat print files, ensuring that when the vinyl stretches over rear wheel arches, geometric patterns remain razor-sharp and proportional.</p>
    `
  },
  'cfd-aero-science': {
    category: 'AERODYNAMICS',
    title: 'Computational Fluid Dynamics: Balancing Front Splitters with Rear Downforce.',
    author: 'Elena Chen',
    role: 'Head of Aerodynamics & Composites',
    authorImg: 'assets/images/team-elena.jpg',
    date: 'Sep 19, 2026',
    readTime: '8 Min Read',
    content: `
      <p>Aerodynamic modifications must never be purely cosmetic. Installing an oversized rear GT wing without corresponding front splitter downforce induces high-speed aerodynamic imbalance and severe high-speed understeer.</p>
      <h4>Autoclave Dry Carbon Composite Process</h4>
      <p>We craft our aero packages using aerospace pre-preg carbon fiber cured under 6 bars of pressure inside high-temperature autoclaves. This maximizes resin-to-fiber ratio, delivering maximum rigidity with minimum weight.</p>
      <p>Every aero package is tested across digital CFD wind tunnels simulating 100 to 200 MPH airflows to ensure factory-calibrated aerodynamic center of pressure.</p>
    `
  },
  'self-healing-ppf': {
    category: 'PAINT PROTECTION',
    title: 'The Self-Healing Phenomenon: How Elastomeric PPF Erases Swirl Marks Under Sun.',
    author: 'Lucas Miller',
    role: 'Senior QA & Surface Detailing Lead',
    authorImg: 'assets/images/team-lucas.jpg',
    date: 'Sep 11, 2026',
    readTime: '5 Min Read',
    content: `
      <p>Modern Paint Protection Film is not simply thick plastic. It is an intricate multi-layer elastomeric polymer composite engineered with an active self-healing clearcoat.</p>
      <h4>How Self-Healing Works</h4>
      <p>The top layer comprises low-crosslink density thermoplastic polyurethane (TPU). When rock chips or wash swirl marks scratch the surface, the polymers rearrange under ambient heat (such as direct sunlight or hot tap water), flowing back into flat optical perfection.</p>
      <p>Infused with hydrophobic ceramic ceramic nanoparticles, the surface repels water, brake dust, and tree sap with a 110° water contact angle.</p>
    `
  },
  'finish-selection-guide': {
    category: 'COLOR ARCHITECTURE',
    title: 'Liquid Metallic vs. Ultra-Matte: Selecting the Correct Finish for Sculptural Bodylines.',
    author: 'Marcus Vance',
    role: 'Founder & Master Livery Director',
    authorImg: 'assets/images/team-marcus.jpg',
    date: 'Aug 29, 2026',
    readTime: '4 Min Read',
    content: `
      <p>Automotive designers use light reflection to define a car's character. Choosing between high gloss, liquid metallic, and ultra-matte determines whether bodylines stand out or soften.</p>
      <h4>Choosing for Your Silhouette</h4>
      <p>For angular vehicles with sharp geometric folds (like modern Lamborghini, McLaren, or BMW M), satin and ultra-matte finishes diffuse light, emphasizing hard creases that would otherwise blow out in direct sunlight.</p>
      <p>For curvaceous, organic forms (like Porsche 911 or Aston Martin), liquid metallic and gloss finishes amplify depth, flowing over fender bulges with dramatic specular highlights.</p>
    `
  },
  'wrap-maintenance-rules': {
    category: 'CARE GUIDES',
    title: 'The 7 Golden Commandments of Washing and Preserving Wrapped Vehicles.',
    author: 'Lucas Miller',
    role: 'Senior QA & Surface Detailing Lead',
    authorImg: 'assets/images/team-lucas.jpg',
    date: 'Aug 18, 2026',
    readTime: '6 Min Read',
    content: `
      <p>A master wrap deserves master care. Follow these 7 golden rules to ensure your Aureon build maintains its pristine studio showroom luster for 5+ years:</p>
      <ul>
        <li><strong>Rule 1:</strong> Always hand wash using pH-neutral automotive shampoos without gloss-enhancers or aggressive solvents.</li>
        <li><strong>Rule 2:</strong> Never pressure-wash closer than 18 inches to panel seams, badges, or door edge returns.</li>
        <li><strong>Rule 3:</strong> Spray high-impact bugs, bird droppings, and tree sap promptly with warm water and microfiber.</li>
        <li><strong>Rule 4:</strong> Avoid automatic brush car washes under all circumstances.</li>
        <li><strong>Rule 5:</strong> Use dedicated matte or vinyl detailer sprays; avoid standard paste carnauba waxes on matte wraps.</li>
        <li><strong>Rule 6:</strong> Dry thoroughly with plush twisted-loop microfiber towels to prevent water spotting.</li>
        <li><strong>Rule 7:</strong> Attend your complimentary 14-day post-installation studio inspection for edge retightening.</li>
      </ul>
    `
  }
};

function initArticleReaderModal() {
  const modal = document.getElementById('articleReaderModal');
  const closeBtn = document.getElementById('closeReaderModalBtn');
  const readBtns = document.querySelectorAll('.blg-read-article-btn, .blg-card-link-btn, .blg-card');
  const consultCtaBtn = document.getElementById('readerConsultCtaBtn');

  function openReader(key) {
    const article = ARTICLE_DATABASE[key] || ARTICLE_DATABASE['cover-story'];
    if (!modal || !article) return;

    document.getElementById('readerCategory').textContent = article.category;
    document.getElementById('readerModalTitle').textContent = article.title;
    document.getElementById('readerReadTime').textContent = article.readTime;
    document.getElementById('readerDate').textContent = article.date;
    document.getElementById('readerAuthorName').textContent = article.author;
    document.getElementById('readerAuthorRole').textContent = article.role;
    document.getElementById('readerAuthorImg').src = article.authorImg;
    document.getElementById('readerModalBody').innerHTML = article.content;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeReader() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

const coverStoryBtn = document.querySelector('.blg-read-article-btn[data-article-key="cover-story"]');
  if (coverStoryBtn && coverStoryBtn.tagName !== 'A') {
    coverStoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openReader('cover-story');
    });
  }

const cards = document.querySelectorAll('.blg-card');
  cards.forEach((card) => {
    const key = card.getAttribute('data-article-key');
    const readBtn = card.querySelector('.blg-card-link-btn');
    const title = card.querySelector('.blg-card-title');

if (readBtn && readBtn.tagName !== 'A') {
      readBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openReader(key);
      });
    }

    if (title) {
      title.addEventListener('click', (e) => {
        e.stopPropagation();
        openReader(key);
      });
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeReader);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReader();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeReader();
    }
  });

if (consultCtaBtn) {
    consultCtaBtn.addEventListener('click', () => {
      closeReader();
      const consultModal = document.getElementById('consultationModal');
      if (consultModal) {
        consultModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  }
}

function initBlogNewsletter() {
  const form = document.getElementById('blgNewsletterCardForm');
  const emailInput = document.getElementById('blgNlEmailInput');

  if (!form || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      showBlogToast('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    showBlogToast(`Welcome to the Atelier Dispatch! A confirmation was sent to ${email}`, 'success');
    emailInput.value = '';
  });
}

function initBlogSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('mainHeader');

  links.forEach((link) => {
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

function showBlogToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.animation = 'toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';

  const iconMap = {
    success: 'fa-circle-check',
    error: 'fa-circle-exclamation',
    info: 'fa-circle-info'
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-circle-info'} toast-icon"></i>
    <div class="toast-content">
      <span class="toast-title">${type === 'success' ? 'Confirmed' : type === 'error' ? 'Notice' : 'Aureon Journal'}</span>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close" aria-label="Close notification"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });
  }

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.animation = 'toastFadeOut 0.3s forwards';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}
