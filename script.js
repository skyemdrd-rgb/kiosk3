function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  localStorage.setItem("currentScreen", id);
}

/* NAVIGATION */
function goHome() { showScreen("homeScreen"); }
function goGuide() { showScreen("guideScreen"); }
function goAbout() { showScreen("aboutScreen"); }
function goResto() { showScreen("restoScreen"); }

/* HMO */
function showHMO(id) { showScreen(id); }

/* REMEMBER LAST SCREEN */
window.onload = function () {
  const saved = localStorage.getItem("currentScreen");
  if (saved) {
    showScreen(saved);
  } else {
    showScreen("homeScreen");
  }
};

function goDept() {
  showScreen("deptScreen");
}

function goAsianLife() {
  showScreen("asianlifeScreen");
}

function goAmaphil() {
  showScreen("amaphilScreen");
}

function goBenlife() {
  showScreen("benlifeScreen");
}

function goCarehealth() {
  showScreen("carehealthScreen");
}  

function goCaritas() {
  showScreen("caritasScreen");
}

function playHemoVideo() {
  showScreen("hemoVideoScreen");

  const video = document.getElementById("hemoVideo");
  video.currentTime = 0;
  video.play();
}

function backToDept() {
  const video = document.getElementById("hemoVideo");
  video.pause();

  showScreen("deptScreen");
}

function playCancerVideo() {
  showScreen("cancerVideoScreen");

  const video = document.getElementById("cancerVideo");
  video.currentTime = 0;
  video.play();
}

function backFromCancer() {
  const video = document.getElementById("cancerVideo");
  video.pause();

  showScreen("deptScreen");
}

function playRehabVideo() {
  showScreen("rehabVideoScreen");

  const video = document.getElementById("rehabVideo");
  video.currentTime = 0;
  video.play();
}

function backFromRehab() {
  const video = document.getElementById("rehabVideo");
  video.pause();

  showScreen("deptScreen");
}

let currentSlide = 0;
let slides = [];

function goChaplain() {
  showScreen("chaplainScreen");

  slides = document.querySelectorAll("#chaplainSlider .slide");
  currentSlide = 0;
  showSlide(currentSlide);
}

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

/* SWIPE SUPPORT */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (Math.abs(startX - endX) > 50) {
    if (startX > endX) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
});

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}