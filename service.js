

document.addEventListener('DOMContentLoaded', () => {
  initServiceFaqAccordion();
  initServiceSmoothScroll();
  initServiceModalTriggers();
});

function initServiceFaqAccordion() {
  const faqItems = document.querySelectorAll('.srv-faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.srv-faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.srv-faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initServiceSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('mainHeader');

  internalLinks.forEach((link) => {
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

function initServiceModalTriggers() {
  const consultModal = document.getElementById('consultationModal');
  const consultBtn = document.getElementById('srvConsultBtn');
  const inspectionBtn = document.getElementById('srvBookInspectionBtn');
  const smallCtaBtn = document.getElementById('srvOpenConsultModalBtn');

  function openConsultationModal(e) {
    if (e) e.preventDefault();
    if (consultModal) {
      consultModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  if (consultBtn) consultBtn.addEventListener('click', openConsultationModal);
  if (inspectionBtn) inspectionBtn.addEventListener('click', openConsultationModal);
  if (smallCtaBtn) smallCtaBtn.addEventListener('click', openConsultationModal);
}
