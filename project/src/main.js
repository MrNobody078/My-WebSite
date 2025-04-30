import KUTE from 'kute.js';

// Blob animation setup
const createBlob = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 800 500");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.zIndex = "-1";

  // Create gradient
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "gradient");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "100%");

  const stops = [
    { offset: "0%", color: "#FFD1DC", opacity: "0.6" },
    { offset: "50%", color: "#F8C8DC", opacity: "0.4" },
    { offset: "100%", color: "#FFB6C1", opacity: "0.6" }
  ];

  stops.forEach(({ offset, color, opacity }) => {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    stop.setAttribute("stop-opacity", opacity);
    gradient.appendChild(stop);
  });

  defs.appendChild(gradient);
  svg.appendChild(defs);

  // Create blob paths
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M430.7,294.5Q409,339,373.9,374.3Q338.8,409.7,284.2,423.9Q229.7,438,183.9,411.2Q138,384.3,120.8,340.7Q103.7,297,79.7,243.5Q55.7,190,94.9,145.7Q134,101.3,181,87Q228,72.7,282.2,56.7Q336.3,40.7,382.9,74.5Q429.5,108.3,440.9,154.2Q452.3,200,452.2,250Q452,300,430.7,294.5Z");
  path1.setAttribute("fill", "url(#gradient)");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M421.7,265.5Q380,331,325.9,374.8Q271.8,418.7,199.9,429.3Q128,440,94.4,380.2Q60.8,320.3,55.9,250.2Q51,180,111.9,140.3Q172.8,100.7,239.4,82.7Q306,64.7,348.4,111.7Q390.8,158.7,427.1,204.3Q463.3,250,421.7,265.5Z");
  path2.setAttribute("fill", "url(#gradient)");
  path2.style.visibility = "hidden";

  svg.appendChild(path1);
  svg.appendChild(path2);

  return { svg, path1, path2 };
};

// Initialize blob animation
const initBlobAnimation = () => {
  const blobContainer = document.querySelector('.blob-background');
  if (!blobContainer) return;

  const { svg, path1, path2 } = createBlob();
  blobContainer.appendChild(svg);

  const tween = KUTE.fromTo(
    path1,
    { path: path1.getAttribute('d') },
    { path: path2.getAttribute('d') },
    { repeat: Infinity, duration: 5000, yoyo: true, easing: 'easingCubicInOut' }
  );

  tween.start();
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initBlobAnimation();
});

// Intersection Observer for fade-in animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

observeElements();