// ================= SCREEN NAVIGATION =================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(id);

  if (!target) {
    console.error("Screen not found:", id);
    return;
  }

  target.classList.add('active');
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
  if (slides.length === 0) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  currentSlide = index;

  const slider = document.querySelector('.slider');
  if (slider) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
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
  // scale UI
  scaleApp();

  // hide loader
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

window.addEventListener("resize", scaleApp);
