alert("NEW JS RUNNING");

// ================= SCREEN NAVIGATION =================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  } else {
    console.error("Missing screen:", id);
  }
}

// ================= MAIN NAV =================
function goHome() { showScreen('homeScreen'); }
function goGuide() { showScreen('guideScreen'); }
function goAbout() { showScreen('aboutScreen'); }
function goResto() { showScreen('restoScreen'); }
function goDept() { showScreen('deptScreen'); }

// ================= SLIDER =================
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

// ================= SCALE =================
function scaleApp() {
  const app = document.getElementById("app");
  if (!app) return;

  const scale = Math.min(
    window.innerWidth / 3840,
    window.innerHeight / 2160
  );

  app.style.transform = `scale(${scale})`;
}

// ================= INIT =================
window.addEventListener("load", function () {

  // force start screen
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const start = document.getElementById("startScreen");
  if (start) start.classList.add("active");

  // hide loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // scale app
  scaleApp();
});

window.addEventListener("resize", scaleApp);
