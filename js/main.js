const toggleBtn = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLink = document.querySelector('link[href*="theme-"]');

const THEMES = {
  dark: 'css/theme-dark.css',
  light: 'css/theme-light.css'
};

function setTheme(theme) {
  themeLink.href = THEMES[theme];
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  toggleBtn.classList.add('rotate');
  setTheme(nextTheme);

  setTimeout(() => {
    toggleBtn.classList.remove('rotate');
  }, 400);
});
