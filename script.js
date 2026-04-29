// ================= SCREEN NAVIGATION =================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

// ================= MAIN NAV =================
function goHome() {
  showScreen('homeScreen');
}

function goGuide() {
  showScreen('guideScreen');
}

function goAbout() {
  showScreen('aboutScreen');
}

function goResto() {
  showScreen('restoScreen');
}

function goDept() {
  showScreen('deptScreen');
}

// ================= CHAPLAIN SLIDER =================
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentSlide = index;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// ================= AUTO SCALE (FIXES SMALL SCREEN ISSUE) =================
function scaleApp() {
  const app = document.getElementById("app");

  if (!app) return;

  const baseWidth = 3840;
  const baseHeight = 2160;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;

  const scale = Math.min(scaleX, scaleY);

  // prevent scale from going too small
  if (scale <= 0) return;

  app.style.transform = `scale(${scale})`;
}

// ================= INIT =================
window.addEventListener("load", () => {
  scaleApp();
});

window.addEventListener("resize", scaleApp);
