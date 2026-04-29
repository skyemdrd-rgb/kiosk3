// ================= SCREEN NAVIGATION =================
function showScreen(id) {
  const screens = document.querySelectorAll('.screen');
  let found = false;

  screens.forEach(screen => {
    if (screen.id === id) {
      screen.classList.add('active');
      found = true;
    } else {
      screen.classList.remove('active');
    }
  });

  // ❗ fallback to home if screen not found
  if (!found) {
    console.error("Screen not found:", id);
    document.getElementById("homeScreen")?.classList.add("active");
  }
}

// ================= MAIN NAV =================
function goHome() { showScreen('homeScreen'); }
function goGuide() { showScreen('guideScreen'); }
function goAbout() { showScreen('aboutScreen'); }
function goResto() { showScreen('restoScreen'); }
function goDept() { showScreen('deptScreen'); }

// ================= CHAPLAIN SLIDER =================
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');

  if (!slides.length || !slider) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentSlide = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// ================= AUTO SCALE =================
function scaleApp() {
  const app = document.getElementById("app");
  if (!app) return;

  const baseWidth = 3840;
  const baseHeight = 2160;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;

  const scale = Math.min(scaleX, scaleY);

  const offsetX = (window.innerWidth - baseWidth * scale) / 2;
  const offsetY = (window.innerHeight - baseHeight * scale) / 2;

  app.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

// ================= INIT =================
window.addEventListener("load", () => {
  scaleApp();

  // hide loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // ensure at least one screen is visible
  const active = document.querySelector('.screen.active');
  if (!active) {
    document.getElementById("startScreen")?.classList.add("active");
  }
});

window.addEventListener("resize", scaleApp);
