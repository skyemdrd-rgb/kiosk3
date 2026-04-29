let isTransitioning = false;
let currentSlide = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  // ✅ SAVE LAST SCREEN
  localStorage.setItem('lastScreen', id);
}
// NAVIGATION
function goHome() { showScreen('homeScreen'); }
function goGuide() { showScreen('guideScreen'); }
function goAbout() { showScreen('aboutScreen'); }
function goDept() { showScreen('deptScreen'); }
function goResto() { showScreen('restoScreen'); }

// CHAPLAIN SLIDER
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  currentSlide = index;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// LOADER + SCALE FIX
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  scaleApp();
});

function scaleApp() {
  const app = document.getElementById("app");
  const scaleX = window.innerWidth / 3840;
  const scaleY = window.innerHeight / 2160;
  const scale = Math.min(scaleX, scaleY);

  app.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleApp);

window.addEventListener('load', () => {
  const lastScreen = localStorage.getItem('lastScreen');

  if (lastScreen) {
    showScreen(lastScreen);
  }
});

function scaleApp() {
  const app = document.getElementById("app");

  const scaleX = window.innerWidth / 3840;
  const scaleY = window.innerHeight / 2160;

  const scale = Math.min(scaleX, scaleY);

  app.style.transform = `scale(${scale})`;
}

window.addEventListener("load", scaleApp);
window.addEventListener("resize", scaleApp);
