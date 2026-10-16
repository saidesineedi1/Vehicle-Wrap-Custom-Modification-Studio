
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRtlToggle();
  initInteractiveParallax();
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

function initInteractiveParallax() {
  const stage = document.getElementById('errorStage');
  const digitsStage = document.getElementById('digitsStage');
  const groundShadow = document.querySelector('.kinetic-ground-shadow');

  if (!stage || !digitsStage) return;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovered = false;

  window.addEventListener('mousemove', (e) => {
    isHovered = true;
    const { innerWidth, innerHeight } = window;
    mouseX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    mouseY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    isHovered = false;
  });

function render() {
    if (isHovered) {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      const rotY = currentX * 12; 
      const rotX = -currentY * 10; 
      const transX = currentX * 8;

      digitsStage.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateX(${transX.toFixed(2)}px)`;

      if (groundShadow) {
        groundShadow.style.transform = `translateX(${(-transX * 0.8).toFixed(2)}px) scale(${1 - Math.abs(currentY) * 0.1})`;
      }
    } else {
      currentX += (0 - currentX) * 0.08;
      currentY += (0 - currentY) * 0.08;
      if (Math.abs(currentX) > 0.001 || Math.abs(currentY) > 0.001) {
        digitsStage.style.transform = `perspective(1000px) rotateX(${(-currentY * 10).toFixed(2)}deg) rotateY(${(currentX * 12).toFixed(2)}deg)`;
      } else {
        digitsStage.style.transform = '';
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
