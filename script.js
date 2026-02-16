// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Backend Architect',
    'Problem Solver',
    'Cloud Engineer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next phrase
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
setTimeout(typeEffect, 1000);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 23, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 23, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.about-section, .experience-section, .projects-section, .contact-section, .project-card, .timeline-item, .skill-category');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Project Card Glow Effect Following Mouse
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const glow = card.querySelector('.card-glow');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.15) 0%, transparent 50%)`;
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect for Background Grid
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gridOverlay = document.querySelector('.grid-overlay');
    if (gridOverlay) {
        gridOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Terminal Window Typing Effect on View
const terminalWindows = document.querySelectorAll('.terminal-window');

const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
            const lines = entry.target.querySelectorAll('.terminal-line');
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '0';
                    line.style.animation = `fadeInLeft 0.5s ease forwards`;
                    line.style.animationDelay = `${index * 0.1}s`;
                }, 100);
            });
            entry.target.classList.add('typed');
        }
    });
}, { threshold: 0.5 });

terminalWindows.forEach(terminal => {
    terminalObserver.observe(terminal);
});

// Add fadeInLeft animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-link.active {
        color: var(--neon-cyan);
        text-shadow: 0 0 10px var(--neon-cyan);
    }
    
    .nav-link.active::before {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Add smooth reveal for skill tags
const skillTags = document.querySelectorAll('.skill-tag');
const techBadges = document.querySelectorAll('.tech-badge');

const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 50);
        }
    });
}, { threshold: 0.5 });

[...skillTags, ...techBadges].forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    tagObserver.observe(tag);
});

// Timeline marker pulse on view
const timelineMarkers = document.querySelectorAll('.timeline-marker');

const markerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'pulse 2s ease-in-out infinite';
        }
    });
}, { threshold: 0.5 });

timelineMarkers.forEach(marker => {
    markerObserver.observe(marker);
});

// Contact items stagger animation
const contactItems = document.querySelectorAll('.contact-item');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.3 });

contactItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    contactObserver.observe(item);
});

// Add dynamic cursor trail effect (optional - cyberpunk aesthetic)
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Performance optimization: Lazy load images if any
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Prevent FOUC (Flash of Unstyled Content)
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// Add initial visibility hidden to prevent FOUC
document.body.style.visibility = 'visible';

console.log('%c🚀 Welcome to Vinith\'s Portfolio! 🚀', 'color: #00ffff; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #ff00ff; font-size: 14px;');
console.log('%cEmail: vinithsridhar2@gmail.com', 'color: #00ff88; font-size: 12px;');
