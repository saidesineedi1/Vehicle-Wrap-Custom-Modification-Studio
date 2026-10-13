

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtlToggle();
  initPasswordToggle();
  initLoginForm();
  initSocialLogins();
  initForgotModal();
});

function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

const savedTheme = localStorage.getItem('aureon_theme');
  if (savedTheme === 'light') {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Dark Theme');
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Light Theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('theme-dark');
      body.classList.toggle('theme-light', !isDark);
      localStorage.setItem('aureon_theme', isDark ? 'dark' : 'light');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  }
}

function initRtlToggle() {
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const html = document.documentElement;

const savedDir = localStorage.getItem('aureon_direction') || 'ltr';
  html.setAttribute('dir', savedDir);
  if (rtlToggleBtn) {
    rtlToggleBtn.setAttribute('title', savedDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
  }

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = html.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

      html.setAttribute('dir', newDir);
      localStorage.setItem('aureon_direction', newDir);
      rtlToggleBtn.setAttribute('title', newDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    });
  }
}

function initPasswordToggle() {
  const toggleBtn = document.getElementById('togglePasswordBtn');
  const passwordInput = document.getElementById('loginPassword');
  const eyeIcon = document.getElementById('passwordEyeIcon');

  if (toggleBtn && passwordInput && eyeIcon) {
    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeIcon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
      toggleBtn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    });
  }
}

function initLoginForm() {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const groupEmail = document.getElementById('groupEmail');
  const groupPassword = document.getElementById('groupPassword');
  const submitBtn = document.getElementById('submitLoginBtn');

  if (!form) return;

if (emailInput) {
    emailInput.addEventListener('input', () => {
      groupEmail.classList.remove('has-error');
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      groupPassword.classList.remove('has-error');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const emailVal = emailInput.value.trim();
    const passVal = passwordInput.value;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      groupEmail.classList.add('has-error');
      isValid = false;
    } else {
      groupEmail.classList.remove('has-error');
    }

if (!passVal || passVal.length < 6) {
      groupPassword.classList.add('has-error');
      isValid = false;
    } else {
      groupPassword.classList.remove('has-error');
    }

    if (!isValid) {
      showToast('Please check your login details and try again.', 'triangle-exclamation');
      return;
    }

submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-circle-notch fa-spin"></i>
      <span>Authenticating VIP...</span>
    `;

    setTimeout(() => {
      showToast('Welcome back, VIP Client. Accessing studio bay...', 'circle-check');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    }, 1000);
  });
}

function initSocialLogins() {
  const googleBtn = document.getElementById('googleLoginBtn');
  const appleBtn = document.getElementById('appleLoginBtn');

  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      showToast('Connecting to Google Workspace Single Sign-On...', 'brands fa-google');
      setTimeout(() => {
        showToast('Google account linked! Redirecting to studio...', 'circle-check');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 900);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      showToast('Authorizing with Apple FaceID / Passkey...', 'brands fa-apple');
      setTimeout(() => {
        showToast('Apple ID verified! Welcome to Aureon Customs.', 'circle-check');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 900);
    });
  }
}

function initForgotModal() {
  const link = document.getElementById('forgotPasswordLink');
  const modal = document.getElementById('forgotModal');
  const closeBtn = document.getElementById('closeForgotModalBtn');
  const forgotForm = document.getElementById('forgotForm');
  const resetEmail = document.getElementById('resetEmail');

  if (!modal) return;

  function openModal() {
    modal.removeAttribute('hidden');
    if (resetEmail) resetEmail.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
  }

  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = resetEmail.value.trim();
      if (!email) return;

      closeModal();
      showToast(`Recovery dispatch sent to ${email}`, 'paper-plane');
      forgotForm.reset();
    });
  }
}

function showToast(message, iconName = 'circle-info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
