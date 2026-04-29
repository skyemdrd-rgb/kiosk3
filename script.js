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
