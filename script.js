let REMEMBER_SCREEN = false; // 🔁 turn ON/OFF here
// ================= SCREEN NAVIGATION =================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');

    // ✅ SAVE CURRENT SCREEN
    if (REMEMBER_SCREEN) {
      localStorage.setItem('lastScreen', id);
    }

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
if (typeof currentSlide === "undefined") {
  var currentSlide = 0; // 🔥 prevents redeclaration error
}

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

  // hide loader safely
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  // show start screen
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const start = document.getElementById("startScreen");
  if (start) start.classList.add("active");

  // scale
  scaleApp();
});

window.addEventListener("resize", scaleApp);

window.addEventListener('load', () => {
  if (REMEMBER_SCREEN) {
    const last = localStorage.getItem('lastScreen');
    if (last) {
      showScreen(last);
    }
  }
});

let idleTimer;
const IDLE_TIME = 30000; // 60 seconds

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    showScreen('startScreen');
  }, IDLE_TIME);
}

['click', 'touchstart'].forEach(evt => {
  document.addEventListener(evt, resetIdleTimer);
});

let startY = 0;
let endY = 0;

const floor2 = document.getElementById("floor2");

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

function showFloor(floor) {
  const f1 = document.getElementById("floor1");
  const f2 = document.getElementById("floor2");

  if (floor === 1) {
    f1.classList.add("active");
    f2.classList.remove("active");
  }

  if (floor === 2) {
    f2.classList.add("active");
    f1.classList.remove("active");
  }
}
