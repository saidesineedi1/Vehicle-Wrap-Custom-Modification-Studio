
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRtlToggle();
  initHeroSlider();
  initGalleryFilterAndLightbox();
  initTimelineSection();
  initModals();
  initFormHandlers();
  initMobileNav();
  initBackToTop();
  initStickyHeader();
});

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeStatusText = document.getElementById('themeStatusText');
  const body = document.body;

const savedTheme = localStorage.getItem('aureon_theme');
  if (savedTheme === 'dark') {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (themeStatusText) themeStatusText.textContent = 'Light';
    if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Light Theme');
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (themeStatusText) themeStatusText.textContent = 'Dark';
    if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Dark Theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('theme-dark');
      body.classList.toggle('theme-light', !isDark);

      if (isDark) {
        localStorage.setItem('aureon_theme', 'dark');
        if (themeStatusText) themeStatusText.textContent = 'Light';
        themeToggleBtn.setAttribute('title', 'Switch to Light Theme');
      } else {
        localStorage.setItem('aureon_theme', 'light');
        if (themeStatusText) themeStatusText.textContent = 'Dark';
        themeToggleBtn.setAttribute('title', 'Switch to Dark Theme');
      }
    });
  }
}

function initRtlToggle() {
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlStatusText = document.getElementById('rtlStatusText');
  const html = document.documentElement;

  const savedDir = localStorage.getItem('aureon_direction') || 'ltr';
  html.setAttribute('dir', savedDir);
  if (rtlStatusText) rtlStatusText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
  if (rtlToggleBtn) rtlToggleBtn.setAttribute('title', savedDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = html.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

      html.setAttribute('dir', newDir);
      localStorage.setItem('aureon_direction', newDir);

      if (rtlStatusText) rtlStatusText.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
      rtlToggleBtn.setAttribute('title', newDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    });
  }
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const navButtons = document.querySelectorAll('.slider-nav-num');
  const progressFill = document.getElementById('sliderProgressFill');

  if (!slides.length || !navButtons.length) return;

  let currentSlide = 0;
  let autoplayTimer = null;

  function goToSlide(index) {
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    if (progressFill) {
      const percentage = ((index + 1) / slides.length) * 100;
      progressFill.style.height = `${percentage}%`;
    }
  }

  navButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 6000);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

function initGalleryFilterAndLightbox() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const viewMosaicBtn = document.getElementById('viewMosaicBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');

  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxConsultBtn = document.getElementById('lightboxConsultBtn');

  let activeVisibleItems = [...galleryItems];
  let currentActiveIndex = 0;

if (viewMosaicBtn && viewGridBtn && galleryGrid) {
    viewMosaicBtn.addEventListener('click', () => {
      viewMosaicBtn.classList.add('active');
      viewMosaicBtn.setAttribute('aria-pressed', 'true');
      viewGridBtn.classList.remove('active');
      viewGridBtn.setAttribute('aria-pressed', 'false');
      galleryGrid.classList.remove('mode-grid');
      galleryGrid.classList.add('mode-mosaic');
      showToast('Switched to Editorial Bento Mosaic view', 'table-cells-large');
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewGridBtn.setAttribute('aria-pressed', 'true');
      viewMosaicBtn.classList.remove('active');
      viewMosaicBtn.setAttribute('aria-pressed', 'false');
      galleryGrid.classList.remove('mode-mosaic');
      galleryGrid.classList.add('mode-grid');
      showToast('Switched to Uniform Grid view', 'border-all');
    });
  }

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');
      activeVisibleItems = [];

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.4s ease forwards';
          activeVisibleItems.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

function updateLightboxContent(index) {
    if (!activeVisibleItems.length) return;
    currentActiveIndex = (index + activeVisibleItems.length) % activeVisibleItems.length;
    const currentItem = activeVisibleItems[currentActiveIndex];

    const imgSrc = currentItem.getAttribute('data-image');
    const title = currentItem.getAttribute('data-title');
    const desc = currentItem.getAttribute('data-desc');
    const meta = currentItem.getAttribute('data-meta') || 'Aureon Atelier Master Spec';

    if (lightboxImg) {
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      }, 140);
    }

    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    if (lightboxMeta) lightboxMeta.innerHTML = meta;
    if (lightboxCounter) {
      const currentNum = String(currentActiveIndex + 1).padStart(2, '0');
      const totalNum = String(activeVisibleItems.length).padStart(2, '0');
      lightboxCounter.textContent = `${currentNum} / ${totalNum}`;
    }
  }

  function openLightbox(item) {
    const itemIndex = activeVisibleItems.indexOf(item);
    currentActiveIndex = itemIndex !== -1 ? itemIndex : 0;
    updateLightboxContent(currentActiveIndex);

    if (lightbox) {
      lightbox.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(item);
    });
  });

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxContent(currentActiveIndex - 1);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxContent(currentActiveIndex + 1);
    });
  }

document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.hasAttribute('hidden')) {
      if (e.key === 'ArrowLeft') {
        updateLightboxContent(currentActiveIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateLightboxContent(currentActiveIndex + 1);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

if (lightboxConsultBtn) {
    lightboxConsultBtn.addEventListener('click', () => {
      const currentItem = activeVisibleItems[currentActiveIndex];
      const title = currentItem ? currentItem.getAttribute('data-title') : '';
      closeLightbox();

      const consultModal = document.getElementById('consultationModal');
      const vehicleInput = document.getElementById('modalVehicleModel');
      if (consultModal) {
        consultModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        if (vehicleInput && title) {
          vehicleInput.value = `Inquiry regarding: ${title}`;
        }
      } else {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      showToast(`Design consultation opened for ${title}`, 'calendar-check');
    });
  }
}

function initModals() {

    const openCustomiseBtn = document.getElementById('openCustomiseBtn');
    if (openCustomiseBtn) {
      openCustomiseBtn.addEventListener('click', (e) => {

        window.location.href = 'customise.html';
      });
    }

const openConsultModalBtn = document.getElementById('openConsultModalBtn');
    const aboutGuaranteeBtn = document.getElementById('aboutGuaranteeBtn');
    const consultationModal = document.getElementById('consultationModal');
    const closeConsultModalBtn = document.getElementById('closeConsultModalBtn');
    const consultationModalForm = document.getElementById('consultationModalForm');

    if (openConsultModalBtn && consultationModal) {
      openConsultModalBtn.addEventListener('click', () => {
        consultationModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      });
    }

    if (aboutGuaranteeBtn && consultationModal) {
      aboutGuaranteeBtn.addEventListener('click', () => {
        consultationModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeConsultModalBtn && consultationModal) {
      closeConsultModalBtn.addEventListener('click', () => {
        consultationModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      });
    }

    if (consultationModal) {
      consultationModal.addEventListener('click', (e) => {
        if (e.target === consultationModal) {
          consultationModal.setAttribute('hidden', '');
          document.body.style.overflow = '';
        }
      });
    }

    if (consultationModalForm) {
      consultationModalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('modalUserName').value.trim();
        const model = document.getElementById('modalVehicleModel').value.trim();

        consultationModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        showToast(`Thank you ${name || 'Valued Client'}! Consultation reserved for ${model || 'your vehicle'}.`, 'calendar-check');
        consultationModalForm.reset();
      });
    }

const heroWatchVideoBtn = document.getElementById('heroWatchVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');

    if (heroWatchVideoBtn && videoModal) {
      heroWatchVideoBtn.addEventListener('click', () => {
        videoModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeVideoModalBtn && videoModal) {
      closeVideoModalBtn.addEventListener('click', () => {
        videoModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      });
    }

    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
          videoModal.setAttribute('hidden', '');
          document.body.style.overflow = '';
        }
      });
    }

document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal-backdrop:not([hidden])');
        modals.forEach(m => m.setAttribute('hidden', ''));
        document.body.style.overflow = '';
      }
    });
  }

function initFormHandlers() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        if (input && input.value.trim()) {
          showToast('Subscribed to Aureon VIP Studio drops & releases!', 'envelope-circle-check');
          newsletterForm.reset();
        }
      });
    }
  }

function initMobileNav() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navHomeItem = document.getElementById('navHomeItem');
    const navHomeLink = document.getElementById('navHomeLink');

if (navHomeLink && navHomeItem) {
      navHomeLink.addEventListener('click', (e) => {

        e.preventDefault();
        const isOpen = navHomeItem.classList.toggle('dropdown-open');
        navHomeLink.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

document.addEventListener('click', (e) => {
        if (!navHomeItem.contains(e.target)) {
          navHomeItem.classList.remove('dropdown-open');
          navHomeLink.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      });

const clickableNavLinks = navMenu.querySelectorAll('.nav-link:not(#navHomeLink), .dropdown-link');
      clickableNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          if (navHomeItem) {
            navHomeItem.classList.remove('dropdown-open');
          }
        });
      });
    }
  }

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

function showToast(message, iconName = 'circle-info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
    <i class="fa-solid fa-${iconName} toast-icon"></i>
    <span class="toast-message">${message}</span>
  `;

    container.appendChild(toast);

requestAnimationFrame(() => {
      toast.classList.add('show');
    });

setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode === container) {
          container.removeChild(toast);
        }
      }, 400);
    }, 3800);
  }

function initTimelineSection() {
    const timelineSection = document.getElementById('timeline');
    if (!timelineSection) return;

    const milestones = timelineSection.querySelectorAll('.timeline-milestone');
    if (!milestones.length) return;

milestones.forEach((milestone) => {
      milestone.classList.add('is-visible');
    });

if ('IntersectionObserver' in window) {
      const milestoneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-node');
          } else {
            entry.target.classList.remove('active-node');
          }
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
      });

      milestones.forEach((milestone) => {
        milestoneObserver.observe(milestone);
      });
    }

milestones.forEach((milestone) => {
      const node = milestone.querySelector('.milestone-node');
      const year = milestone.querySelector('.milestone-year-text')?.textContent || '';
      const title = milestone.querySelector('.milestone-title')?.textContent || '';

      if (node) {
        node.addEventListener('click', () => {
          milestones.forEach(m => m.classList.remove('active-node'));
          milestone.classList.add('active-node');
          milestone.scrollIntoView({ behavior: 'smooth', block: 'center' });
          showToast(`${year} Era: ${title}`, 'compass-drafting');
        });
      }

const pills = milestone.querySelectorAll('.milestone-pills span');
      pills.forEach((pill) => {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          const text = pill.textContent.trim();
          showToast(`Specification: ${text}`, 'check-circle');
        });
      });
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
