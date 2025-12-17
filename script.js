// ====================================
// JóvenesSTEM - Interactive Scripts
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
    initContactForm();
    initBookExplorer();
    initSmoothScroll();
    initParallaxEffects();
});

// ====================================
// BOOK EXPLORER
// ====================================
function initBookExplorer() {
    const tabs = document.querySelectorAll('.explorer-tab');
    const panels = document.querySelectorAll('.explorer-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding panel
            const panelId = tab.getAttribute('data-tab');
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}


// ====================================
// NAVIGATION
// ====================================
function initNavigation() {
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const scrollY = window.scrollY;

        // Add scrolled class for compact nav
        if (scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide/show nav on scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    });
}

// ====================================
// MOBILE MENU
// ====================================
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Toggle animation
    toggle.addEventListener('click', function () {
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
}

// ====================================
// SCROLL ANIMATIONS
// ====================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);

                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Special animation for vision cards
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ====================================
// SMOOTH SCROLL
// ====================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ====================================
// CONTACT FORM
// ====================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-submit');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Simulate API call (replace with actual endpoint)
            await simulateApiCall(data);

            // Show success message
            form.style.display = 'none';
            successMessage.classList.add('show');

            // Reset form
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Input focus animations
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

// Simulate API call for form submission
function simulateApiCall(data) {
    return new Promise((resolve) => {
        console.log('Form data:', data);
        // Simulate network delay
        setTimeout(resolve, 1500);
    });
}

// ====================================
// PARALLAX EFFECTS
// ====================================
// Parallax Effects and Book Animation
// Parallax Effects and Book Animation
function initParallaxEffects() {
    const heroBook = document.getElementById('heroBook');
    const heroSection = document.getElementById('hero');
    const heroContent = document.querySelector('.hero-content');

    if (!heroBook || !heroSection) return;

    // Scroll Animation
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        // Calculate scroll progress within hero section (0 to 1)
        let progress = scrollY / (heroHeight * 0.8);
        progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

        if (window.innerWidth > 768) {
            // Desktop Animation
            // Rotate the whole book container slightly
            const rotationY = -15 + (progress * 5); // From -15deg to -10deg

            // Open the cover
            const coverRotation = progress * -140; // Open up to -140deg

            // Move book slightly to the right to see the inside
            const translateX = progress * 100;

            heroBook.style.transform = `translateX(${translateX}px) rotateY(${rotationY}deg) rotateX(10deg)`;

            const cover = heroBook.querySelector('.book-cover');
            if (cover) {
                cover.style.transform = `rotateY(${coverRotation}deg)`;
            }

            // Parallax for content
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                heroContent.style.opacity = 1 - progress * 1.5;
            }
        }
    });

    // Mouse Parallax (only at top)
    heroSection.addEventListener('mousemove', (e) => {
        if (window.scrollY > 100) return;

        // Simple parallax calculation
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroBook.style.transition = 'transform 0.1s ease-out';
        // Apply base rotation plus mouse offset
        heroBook.style.transform = `rotateY(${x - 15}deg) rotateX(${y + 10}deg)`;
    });

    // Reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        if (window.scrollY < 50) {
            heroBook.style.transition = 'transform 0.5s ease';
            heroBook.style.transform = 'rotateY(-15deg) rotateX(10deg)';
        }
    });
}

// ====================================
// UTILITY FUNCTIONS
// ====================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ====================================
// COUNTER ANIMATION
// ====================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ====================================
// TYPING EFFECT (Optional enhancement)
// ====================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ====================================
// PRELOADER (Optional)
// ====================================
window.addEventListener('load', () => {
    // Remove any preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 500);
    }

    // Trigger initial animations
    document.body.classList.add('loaded');
});

// ====================================
// SCROLL PROGRESS INDICATOR (Optional)
// ====================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress-bar').style.width = `${progress}%`;
    }, 50));
}

// Add scroll progress styles
const scrollProgressStyles = document.createElement('style');
scrollProgressStyles.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 1001;
        background: transparent;
    }
    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #007AFF, #5856D6);
        width: 0%;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(scrollProgressStyles);

// Initialize scroll progress
initScrollProgress();
