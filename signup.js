

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtlToggle();
  initPasswordToggles();
  initSignupForm();
  initSocialSignups();
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

function initPasswordToggles() {
  
  const togglePassBtn = document.getElementById('togglePasswordBtn');
  const passInput = document.getElementById('signupPassword');
  const passEyeIcon = document.getElementById('passwordEyeIcon');

  if (togglePassBtn && passInput && passEyeIcon) {
    togglePassBtn.addEventListener('click', () => {
      const isPassword = passInput.getAttribute('type') === 'password';
      passInput.setAttribute('type', isPassword ? 'text' : 'password');
      passEyeIcon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
      togglePassBtn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    });
  }

const toggleConfirmBtn = document.getElementById('toggleConfirmPasswordBtn');
  const confirmInput = document.getElementById('signupConfirmPassword');
  const confirmEyeIcon = document.getElementById('confirmPasswordEyeIcon');

  if (toggleConfirmBtn && confirmInput && confirmEyeIcon) {
    toggleConfirmBtn.addEventListener('click', () => {
      const isPassword = confirmInput.getAttribute('type') === 'password';
      confirmInput.setAttribute('type', isPassword ? 'text' : 'password');
      confirmEyeIcon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
      toggleConfirmBtn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    });
  }
}

function initSignupForm() {
  const form = document.getElementById('signupForm');
  const fullNameInput = document.getElementById('signupFullName');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const confirmPasswordInput = document.getElementById('signupConfirmPassword');
  const termsCheckbox = document.getElementById('termsCheckbox');

  const groupFullName = document.getElementById('groupFullName');
  const groupEmail = document.getElementById('groupEmail');
  const groupPassword = document.getElementById('groupPassword');
  const groupConfirmPassword = document.getElementById('groupConfirmPassword');
  const submitBtn = document.getElementById('submitSignupBtn');

  if (!form) return;

[
    { input: fullNameInput, group: groupFullName },
    { input: emailInput, group: groupEmail },
    { input: passwordInput, group: groupPassword },
    { input: confirmPasswordInput, group: groupConfirmPassword }
  ].forEach(({ input, group }) => {
    if (input && group) {
      input.addEventListener('input', () => {
        group.classList.remove('has-error');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameVal = fullNameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const passVal = passwordInput.value;
    const confirmVal = confirmPasswordInput.value;

if (!nameVal || nameVal.length < 2) {
      groupFullName.classList.add('has-error');
      isValid = false;
    } else {
      groupFullName.classList.remove('has-error');
    }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      groupEmail.classList.add('has-error');
      isValid = false;
    } else {
      groupEmail.classList.remove('has-error');
    }

if (!passVal || passVal.length < 8) {
      groupPassword.classList.add('has-error');
      isValid = false;
    } else {
      groupPassword.classList.remove('has-error');
    }

if (!confirmVal || confirmVal !== passVal) {
      groupConfirmPassword.classList.add('has-error');
      isValid = false;
    } else {
      groupConfirmPassword.classList.remove('has-error');
    }

if (termsCheckbox && !termsCheckbox.checked) {
      showToast('Please agree to the Terms of Service to continue.', 'triangle-exclamation');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please correct the highlighted fields.', 'triangle-exclamation');
      return;
    }

submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-circle-notch fa-spin"></i>
      <span>Provisioning VIP Registry...</span>
    `;

    setTimeout(() => {
      showToast(`Welcome to Aureon Customs, ${nameVal}! Account established.`, 'circle-check');

      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1400);
    }, 1100);
  });
}

function initSocialSignups() {
  const googleBtn = document.getElementById('googleSignupBtn');
  const appleBtn = document.getElementById('appleSignupBtn');

  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      showToast('Linking Google Account with Aureon Registry...', 'brands fa-google');
      setTimeout(() => {
        showToast('Google ID successfully registered! Welcome.', 'circle-check');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 900);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      showToast('Authorizing with Apple Passkey & iCloud Keychain...', 'brands fa-apple');
      setTimeout(() => {
        showToast('Apple ID registered! Welcome to Aureon Customs.', 'circle-check');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 900);
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
