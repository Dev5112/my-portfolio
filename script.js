
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  window.scrollY > 50
    ? navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)'
    : navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

// Music toggle + autoplay after interaction
const music = document.getElementById('background-music');
const musicBtn = document.getElementById('music-toggle');

// Set initial volume
music.volume = 0.1;

// Try autoplay on load
window.addEventListener('DOMContentLoaded', () => {
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
      })
      .catch(() => {
        // Autoplay failed (browser blocked)
        document.addEventListener('click', tryAutoPlayOnce, { once: true });
      });
  }
});

function tryAutoPlayOnce() {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });
  }
}

// Manual toggle button
musicBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent triggering window click
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  }
});
