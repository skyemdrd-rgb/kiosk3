function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");

    // pause videos
    const v = s.querySelector("video");
    if (v) v.pause();
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add("active");

  // play video if exists
  const vid = target.querySelector("video");
  if (vid) {
    vid.currentTime = 0;
    vid.play().catch(() => {});
  }

  resetIdle();
}

/* NAV */
const goHome = () => showScreen("homeScreen");
const goGuide = () => showScreen("guideScreen");
const goAbout = () => showScreen("aboutScreen");
const goResto = () => showScreen("restoScreen");
const goDept = () => showScreen("deptScreen");

/* START ALWAYS */
window.onload = () => {
  showScreen("startScreen");
};

/* IDLE RESET */
let idleTimer;

function resetIdle() {
  clearTimeout(idleTimer);

  idleTimer = setTimeout(() => {
    showScreen("startScreen");
  }, 30000);
}

document.addEventListener("click", resetIdle);
document.addEventListener("touchstart", resetIdle);

/* SLIDER */
let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector("#chaplainScreen .slider");
  const slides = document.querySelectorAll("#chaplainScreen .slide");

  const total = slides.length;

  // loop properly
  currentSlide = (index + total) % total;

  // move EXACTLY 100% per slide
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* SWIPE ONLY ON SLIDER */
const slider = document.querySelector(".slider");

if (slider) {
  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) showSlide(currentSlide - 1);
    if (startX - endX > 50) showSlide(currentSlide + 1);
  });
}