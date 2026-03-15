// Navbar Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon
    if(navMenu.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Scroll Spy for Active Link Highlighting
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger reveal immediately for hero section
reveal();

// Animated Counter for Achievements
const counters = document.querySelectorAll('.counter');
let hasCounted = false;

const startCounters = () => {
    const achievementsSection = document.querySelector('.achievements-content');
    
    if(!achievementsSection) return;
    
    const sectionTop = achievementsSection.getBoundingClientRect().top;
    
    if (sectionTop < window.innerHeight && !hasCounted) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        hasCounted = true;
    }
}

window.addEventListener('scroll', startCounters);

// Video Play Button (Mock functionality)
const playBtn = document.querySelector('.play-btn');
if(playBtn) {
    playBtn.addEventListener('click', () => {
        alert("Video player modal would open here to play the tutor's introduction video!");
    });
}
