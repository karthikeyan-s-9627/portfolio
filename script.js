// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  setTimeout(() => {
    mobileMenu.classList.toggle('active');
  }, 10);
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 300);
  });
});

// Typewriter effect
const text = "A Engineering Student currently living in Hosur, Tamil Nadu, India";
const typedTextElement = document.getElementById('typed-text');
let charIndex = 0;
let isTyping = true;

function typeWriter() {
  if (isTyping) {
    if (charIndex < text.length) {
      typedTextElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      isTyping = false;
      setTimeout(() => {
        isTyping = true;
        charIndex = 0;
        typedTextElement.textContent = '';
        typeWriter();
      }, 3000);
    }
  }
}

typeWriter();

// Particle background
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = ['#00f2ff', '#4d00e6', '#7f00ff'][Math.floor(Math.random() * 3)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width) this.x = 0;
    else if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    else if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const particles = [];
const particleCount = Math.min(100, (canvas.width * canvas.height) / 10000);

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(127, 0, 255, ${0.1 * (1 - distance / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  connectParticles();
  requestAnimationFrame(animate);
}

animate();

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('about-text')) {
        entry.target.classList.add('animate');
      } else if (entry.target.classList.contains('skill-item')) {
        entry.target.classList.add('animate');
        const progressLine = entry.target.querySelector('.progress-line');
        if (progressLine) {
          progressLine.style.width = progressLine.dataset.width;
        }
      } else if (entry.target.classList.contains('project-card')) {
        entry.target.classList.add('animate');
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.about-text, .skill-item, .project-card').forEach(element => {
  observer.observe(element);
});

// Contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for your message! This is a demo, so no message was actually sent.');
  contactForm.reset();
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();