
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtlToggle();
  initCountdown();
  initNotifyModal();
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

function initCountdown() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const STORAGE_KEY = 'aureon_launch_target_timestamp';
  let targetTime = localStorage.getItem(STORAGE_KEY);

  const FIFTY_DAYS_MS = 50 * 24 * 60 * 60 * 1000;
  if (!targetTime || isNaN(Number(targetTime)) || Number(targetTime) <= Date.now()) {
    targetTime = Date.now() + FIFTY_DAYS_MS;
    localStorage.setItem(STORAGE_KEY, targetTime.toString());
  } else {
    targetTime = Number(targetTime);
  }

  function updateTimer() {
    const now = Date.now();
    let diff = targetTime - now;

    if (diff <= 0) {
      diff = 0;
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function initNotifyModal() {
  const notifyBtn = document.getElementById('notifyMeBtn');
  const modal = document.getElementById('notifyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const form = document.getElementById('notifyForm');
  const emailInput = document.getElementById('notifyEmailInput');
  const toast = document.getElementById('csToast');
  const toastMsg = document.getElementById('toastMessage');

  if (!notifyBtn || !modal) return;

  function openModal() {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    if (emailInput) setTimeout(() => emailInput.focus(), 150);
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
  }

  notifyBtn.addEventListener('click', openModal);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';

      if (email) {
        closeModal();
        showToast(`VIP Allocation reserved for ${email}. You will receive our launch dossier.`);
        form.reset();
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('is-visible');

    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 4500);
  }
}
