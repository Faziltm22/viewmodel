document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasNavbar = new bootstrap.Offcanvas('#offcanvasNavbar');
    
    navbarToggler.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        offcanvasNavbar.toggle();
      }
    });
    
    // Close sidebar when clicking a link
    const navLinks = document.querySelectorAll('.offcanvas-body .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          offcanvasNavbar.hide();
        }
      });
    });
  });
  
const images = [
  "images/images__2_-removebg-preview (2).png",
  "images/images__3_-removebg-preview.png",
  "images/s-l1200-removebg-preview.png"
];

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
}, 2000); // 2000 ms = 2 seconds;




// Create random bubbles
function createBubbles() {
  const blueSection = document.querySelector('.blue-section');
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 50 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubble.style.opacity = Math.random() * 0.5 + 0.1;
    blueSection.appendChild(bubble);
  }
}

// Animate the divider shape
function animateDivider() {
  const divider = document.querySelector('.shape-divider svg path');
  let morph = [
    "M0,0 C300,100 700,0 1200,100 L1440,0 L0,0 Z",
    "M0,0 C400,150 800,50 1200,120 L1440,0 L0,0 Z",
    "M0,0 C200,80 900,30 1200,90 L1440,0 L0,0 Z"
  ];
  let counter = 0;
  setInterval(() => {
    divider.setAttribute('d', morph[counter % morph.length]);
    counter++;
  }, 2000);
}

window.addEventListener('load', () => {
  createBubbles();
  animateDivider();
});








 window.onload = function() {
    const imagess = document.querySelectorAll('.imgcont img');
    let currentIndexx = 0;

    setInterval(() => {
        imagess[currentIndexx].classList.remove('active');
        currentIndexx = (currentIndexx + 1) % imagess.length;
        imagess[currentIndexx].classList.add('active');
    }, 2000);
  };
