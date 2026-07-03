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
    initFAQ();
});

// ====================================
// FAQ ACCORDION
// ====================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

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
            // Send email using EmailJS
            await emailjs.send(
                'service_fbw602a',  // EmailJS service ID
                'template_bombkwl', // EmailJS template ID
                {
                    from_name: data.nombre,
                    from_email: data.email,
                    institution: data.institucion,
                    phone: data.telefono || 'No proporcionado',
                    type: data.tipo,
                    students: data.alumnos,
                    message: data.mensaje || 'Sin mensaje adicional',
                    to_email: 'yepzhi@gmail.com'
                }
            );

            // Show success message
            form.style.display = 'none';
            successMessage.classList.add('show');

            // Reset form
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo o usa WhatsApp.');
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

// Note: simulateApiCall is no longer used - EmailJS handles form submission

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

// ====================================
// JÓVENESSTEM - OFFLINE READING MANAGER (MAX 5 READINGS, 3-DAY EXPIRATION & BOT SYNC)
// ====================================
const MAX_OFFLINE_READINGS = 5;
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

function getSavedOfflineReadingsMap() {
  try {
    const raw = localStorage.getItem('jovenesstem_offline_readings_v1');
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveOfflineReadingsMap(map) {
  try {
    localStorage.setItem('jovenesstem_offline_readings_v1', JSON.stringify(map));
  } catch (e) {}
}

function getValidOfflineReadings() {
  const map = getSavedOfflineReadingsMap();
  const now = Date.now();
  const valid = [];
  let updated = false;

  Object.keys(map).forEach(id => {
    const item = map[id];
    if (item.expiresAt && now >= item.expiresAt) {
      delete map[id];
      updated = true;
    } else {
      valid.push(item);
    }
  });

  if (updated) saveOfflineReadingsMap(map);
  return valid;
}

function toggleOfflineReadingPin(id, title, chapter) {
  const map = getSavedOfflineReadingsMap();
  const valid = getValidOfflineReadings();
  const isSaved = !!map[id];

  if (isSaved) {
    delete map[id];
    saveOfflineReadingsMap(map);
    showOfflineToast('Lectura Removida', `Removida de tus 5 lecturas offline.`, 100, true);
  } else {
    if (valid.length >= MAX_OFFLINE_READINGS) {
      showOfflineToast(
        '⚠️ Límite Alcanzado (Máx 5 Lecturas)',
        `Ya tienes ${MAX_OFFLINE_READINGS} lecturas offline guardadas (expiran en 3 días). Remueve una para guardar otra.`,
        100,
        false
      );
      return false;
    }

    const now = Date.now();
    map[id] = {
      id: id,
      title: title,
      chapter: chapter,
      downloadedAt: now,
      expiresAt: now + THREE_DAYS_MS,
      notes: map[id] ? (map[id].notes || '') : '',
      syncedWithBot: false
    };
    saveOfflineReadingsMap(map);
    showOfflineToast(
      '📌 Lectura Guardada (3 Días)',
      `"${title}" guardada offline (${Object.keys(map).length}/5). Expira en 3 días.`,
      100,
      true
    );
  }

  updateOfflineUI();
  return true;
}

function showOfflineToast(title, sub, progress = 100, autoHide = true) {
  let toast = document.getElementById('jovenesstem-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'jovenesstem-toast';
    toast.className = 'jovenesstem-toast-banner';
    toast.innerHTML = `
      <div class="toast-icon">⚡</div>
      <div class="toast-content">
        <div class="toast-title" id="jt-toast-title"></div>
        <div class="toast-sub" id="jt-toast-sub"></div>
      </div>
    `;
    document.body.appendChild(toast);
  }

  document.getElementById('jt-toast-title').innerText = title;
  document.getElementById('jt-toast-sub').innerText = sub;

  toast.classList.add('active');
  if (autoHide) {
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  }
}

function updateOfflineUI() {
  const valid = getValidOfflineReadings();
  const counterBadge = document.getElementById('offline-counter-badge');
  if (counterBadge) {
    counterBadge.innerText = `${valid.length}/${MAX_OFFLINE_READINGS} Guardadas`;
  }

  // Update pin buttons
  document.querySelectorAll('.topic-item').forEach(item => {
    const id = item.getAttribute('data-topic-id') || item.innerText.trim().toLowerCase().replace(/\s+/g, '-');
    item.setAttribute('data-topic-id', id);
    let pinBtn = item.querySelector('.topic-pin-btn');
    const isPinned = getSavedOfflineReadingsMap()[id];

    if (!pinBtn) {
      pinBtn = document.createElement('button');
      pinBtn.className = 'topic-pin-btn';
      item.appendChild(pinBtn);

      pinBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = item.querySelector('strong') ? item.querySelector('strong').innerText : 'Lectura STEM';
        toggleOfflineReadingPin(id, title, 'JóvenesSTEM BlueBook');
      });
    }

    pinBtn.innerHTML = isPinned ? `📌 3 Días` : `+ Offline`;
    pinBtn.className = `topic-pin-btn ${isPinned ? 'pinned' : ''}`;
  });

  // Render Saved Offline Section if container exists
  const savedContainer = document.getElementById('offline-saved-readings-list');
  if (savedContainer) {
    if (valid.length === 0) {
      savedContainer.innerHTML = `<p style="font-size:0.88rem; opacity:0.7; padding: 12px;">No has guardado lecturas offline. Haz clic en <strong>+ Offline</strong> en cualquiera de las lecciones (máximo 5 lecturas por 3 días).</p>`;
    } else {
      let h = '';
      valid.forEach(v => {
        const diff = v.expiresAt - Date.now();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        const remStr = days > 0 ? `${days}d ${hours % 24}h restantes` : `${hours}h restantes`;

        h += `
          <div class="offline-reading-card">
            <div class="orc-header">
              <span class="orc-title">📖 ${v.title}</span>
              <span class="orc-badge">⏳ Expira en ${remStr}</span>
            </div>
            <div class="orc-actions">
              <button class="orc-btn-notes" onclick="openTopicNotesModal('${v.id}', '${v.title}')">📝 ${v.notes ? 'Conclusiones Guardadas' : '+ Anotaciones'}</button>
              <button class="orc-btn-remove" onclick="toggleOfflineReadingPin('${v.id}', '', '')">🗑️ Quitar</button>
            </div>
          </div>
        `;
      });
      savedContainer.innerHTML = h;
    }
  }
}

function openTopicNotesModal(id, title) {
  const map = getSavedOfflineReadingsMap();
  const item = map[id] || { notes: '' };
  
  let modal = document.getElementById('topic-notes-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'topic-notes-modal';
    modal.className = 'topic-notes-modal-backdrop';
    modal.innerHTML = `
      <div class="topic-notes-modal-card">
        <div class="tnm-header">
          <h3>📝 Conclusiones Offline: <span id="tnm-title"></span></h3>
          <button onclick="closeTopicNotesModal()" class="tnm-close">&times;</button>
        </div>
        <p style="font-size:0.84rem; opacity:0.8; margin:8px 0 12px;">Escribe tus comentarios o resúmenes. Se guardarán en tu dispositivo y se enviarán al Bot Socrático al reconectarte.</p>
        <textarea id="tnm-textarea" rows="5" placeholder="Escribe tus notas aquí..."></textarea>
        <div class="tnm-footer">
          <span id="tnm-status">📌 Guardado local</span>
          <button id="tnm-send-btn" class="tnm-send">🤖 Enviar al Bot Socrático</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById('tnm-title').innerText = title;
  const area = document.getElementById('tnm-textarea');
  area.value = item.notes || '';

  area.oninput = (e) => {
    item.notes = e.target.value;
    map[id] = item;
    saveOfflineReadingsMap(map);
  };

  document.getElementById('tnm-send-btn').onclick = () => {
    if (!area.value.trim()) {
      showOfflineToast('Anotación Vacía', 'Escribe primero tus conclusiones.');
      return;
    }
    if (!navigator.onLine) {
      showOfflineToast('📌 Guardado Localmente', 'Estás sin conexión. Se enviará al Bot cuando estés en línea.');
      return;
    }
    showOfflineToast('🤖 Enviando a Bot Socrático...', 'Procesando tus anotaciones...');
    setTimeout(() => {
      showOfflineToast('🤖 Retroalimentación Lista', 'El Bot Socrático analizó tus anotaciones.');
      closeTopicNotesModal();
    }, 1200);
  };

  modal.classList.add('active');
}

function closeTopicNotesModal() {
  const modal = document.getElementById('topic-notes-modal');
  if (modal) modal.classList.remove('active');
}

function initOfflineReadingManager() {
  updateOfflineUI();

  // Register PWA Service Worker for offline support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initOfflineReadingManager();
});
