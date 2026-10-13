

document.addEventListener('DOMContentLoaded', () => {
  initHome2HeroInteractions();
  initHome2ServiceCardRouting();
  initHome2GalleryFilters();
  initHome2Lightbox();
  initHome2CtaHandlers();
  initHome2NavSmoothScroll();
  initHome2StickyHeader();
});

function initHome2HeroInteractions() {
  const scrollIndicator = document.querySelector('.h2-hero-scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

const watchVideoBtn = document.getElementById('heroWatchVideoBtn');
  const videoModal = document.getElementById('videoModal');
  if (watchVideoBtn && videoModal) {
    watchVideoBtn.addEventListener('click', () => {
      videoModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
}

function initHome2ServiceCardRouting() {
  const serviceCards = document.querySelectorAll('.h2-service-card');
  const consultModal = document.getElementById('consultationModal');
  const modalServiceType = document.getElementById('modalServiceType');

  serviceCards.forEach((card) => {
    card.addEventListener('click', () => {
      const serviceType = card.getAttribute('data-service-type');
      if (consultModal) {
        consultModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';

        if (modalServiceType && serviceType) {
          modalServiceType.value = serviceType;
        }
      }
    });
  });
}

function initHome2GalleryFilters() {
  const filterBtns = document.querySelectorAll('.h2-filter-btn');
  const galleryItems = document.querySelectorAll('.h2-gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

galleryItems.forEach((item) => {
        const category = item.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          item.style.display = 'block';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initHome2Lightbox() {
  const galleryThumbs = document.querySelectorAll('.h2-gallery-thumb');
  const lightboxModal = document.getElementById('h2LightboxModal');
  const lightboxFullImg = document.getElementById('lightboxFullImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  if (!lightboxModal || !galleryThumbs.length) return;

  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const img = thumb.querySelector('.h2-gallery-img');
      const title = thumb.querySelector('.h2-gallery-title');
      const caption = thumb.querySelector('.h2-gallery-caption');

      if (img && lightboxFullImg) {
        lightboxFullImg.src = img.src;
        lightboxFullImg.alt = img.alt || 'Enlarged vehicle preview';
      }

      if (lightboxCaption) {
        const titleText = title ? title.textContent : '';
        const capText = caption ? caption.textContent : '';
        lightboxCaption.innerHTML = `<strong>${titleText}</strong> — ${capText}`;
      }

      lightboxModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', () => {
      lightboxModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    });
  }

lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });
}

function initHome2CtaHandlers() {
  const startProjectBtn = document.getElementById('h2StartProjectBtn');
  const premiumConsultBtn = document.getElementById('premiumConsultBtn');
  const consultModal = document.getElementById('consultationModal');

  function openConsultModal(e) {
    if (e) e.preventDefault();
    if (consultModal) {
      consultModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  if (startProjectBtn) {
    startProjectBtn.addEventListener('click', openConsultModal);
  }

  if (premiumConsultBtn) {
    premiumConsultBtn.addEventListener('click', openConsultModal);
  }
}

function initHome2NavSmoothScroll() {
  const internalNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const header = document.getElementById('mainHeader');

  internalNavLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (navMenu && navMenu.classList.contains('mobile-active')) {
          navMenu.classList.remove('mobile-active');
          if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
          }
          document.body.style.overflow = '';
        }
      }
    });
  });
}

function initHome2StickyHeader() {
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
