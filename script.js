// COUNTDOWN
const weddingDate = new Date("March 7, 2026 02:31:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  document.getElementById("countdown").innerHTML =
    diff > 0 ? `⏳ ${Math.floor(diff / (1000 * 60 * 60 * 24))} days to go`
             : "🎉 Wedding Day is Here!";
}, 1000);

// MUSIC
const music = document.getElementById("bgMusic");
let isPlaying = false;
function toggleMusic() {
  isPlaying ? music.pause() : music.play();
  isPlaying = !isPlaying;
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// BUTTERFLIES
const layer = document.getElementById("butterfly-layer");
for (let i = 0; i < 20; i++) {
  const b = document.createElement("div");
  b.className = "butterfly";
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = 10 + Math.random() * 10 + "s";
  b.style.animationDelay = Math.random() * 10 + "s";
  layer.appendChild(b);
}
