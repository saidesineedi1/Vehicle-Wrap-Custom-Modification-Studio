

document.addEventListener('DOMContentLoaded', () => {
  initContactCommissionForm();
  initContactFaqAccordion();
  initContactModalTriggers();
  initContactSmoothScroll();
});

function initContactCommissionForm() {
  const form = document.getElementById('contactCommissionForm');
  if (!form) return;

  const nameInput = document.getElementById('cntFullName');
  const emailInput = document.getElementById('cntEmailAddress');
  const phoneInput = document.getElementById('cntPhoneNumber');
  const vehicleInput = document.getElementById('cntVehicleModel');
  const serviceSelect = document.getElementById('cntServiceType');
  const submitBtn = document.getElementById('cntSubmitBtn');

  function validateField(input, groupSelector, errorId) {
    const parentGroup = input.closest(groupSelector);
    const value = input.value.trim();

    if (!value) {
      if (parentGroup) parentGroup.classList.add('has-error');
      return false;
    }

    if (input.type === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        if (parentGroup) parentGroup.classList.add('has-error');
        return false;
      }
    }

    if (parentGroup) parentGroup.classList.remove('has-error');
    return true;
  }

[nameInput, emailInput, phoneInput, vehicleInput, serviceSelect].forEach((el) => {
    if (el) {
      el.addEventListener('input', () => {
        const group = el.closest('.cnt-input-group');
        if (group) group.classList.remove('has-error');
      });
      el.addEventListener('change', () => {
        const group = el.closest('.cnt-input-group');
        if (group) group.classList.remove('has-error');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateField(nameInput, '.cnt-input-group', 'cntNameError')) isValid = false;
    if (!validateField(emailInput, '.cnt-input-group', 'cntEmailError')) isValid = false;
    if (!validateField(phoneInput, '.cnt-input-group', 'cntPhoneError')) isValid = false;
    if (!validateField(vehicleInput, '.cnt-input-group', 'cntVehicleError')) isValid = false;
    if (!validateField(serviceSelect, '.cnt-input-group', 'cntServiceError')) isValid = false;

    if (!isValid) {
      showContactToast('Please complete all required fields indicated in red.', 'error');
      return;
    }

if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>Transmitting Commission Request...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Submit Commission Request</span>
          <i class="fa-solid fa-arrow-right"></i>
        `;
      }

      showContactToast(
        `Thank you, ${nameInput.value.trim()}! Your commission request has been received. Our Master Livery Director will contact you within 24 hours.`,
        'success'
      );

      form.reset();
    }, 1200);
  });
}

function initContactFaqAccordion() {
  const faqItems = document.querySelectorAll('.cnt-faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.cnt-faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.cnt-faq-question');
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

function initContactModalTriggers() {
  const consultModal = document.getElementById('consultationModal');
  const openModalBtn = document.getElementById('cntOpenConsultModalBtn');
  const vaultBtn = document.getElementById('cntVaultBookBtn');

  function openConsultModal(e) {
    if (e) e.preventDefault();
    if (consultModal) {
      consultModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openConsultModal);
  if (vaultBtn) vaultBtn.addEventListener('click', openConsultModal);
}

function initContactSmoothScroll() {
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

function showContactToast(message, type = 'info') {
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
      <span class="toast-title">${type === 'success' ? 'Commission Received' : type === 'error' ? 'Notice' : 'Studio Concierge'}</span>
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
