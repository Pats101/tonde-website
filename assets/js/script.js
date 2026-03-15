$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        } 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Toggle menu/navbar script
    $('button.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        const expanded = $('.navbar .menu').hasClass('active');
        $(this).attr('aria-expanded', expanded);
    });
    
    // typing animation script
    const typedHome = new Typed(".typing", {
        strings: [
            "a Backend & Cloud Engineer",
            "designing scalable distributed systems",
            "building AI-powered platforms"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typedAbout = new Typed(".typing-2", {
        strings: [
            "a Backend & Cloud Engineer",
            "designing scalable distributed systems",
            "building AI-powered platforms"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Qualification Section
const qualTabs = document.querySelectorAll('.qual-tab');
const qualTimelines = document.querySelectorAll('.qual-timeline');

qualTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        qualTimelines.forEach(tl => tl.classList.remove('qual-timeline--active'));
        target.classList.add('qual-timeline--active');

        qualTabs.forEach(t => t.classList.remove('qual-tab--active'));
        tab.classList.add('qual-tab--active');
    });
});

// Portfolio Swiper
const swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".portfolio_container .swiper-button-next",
      prevEl: ".portfolio_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function(response) {
            formStatus.className = response.ok ? 'visible success' : 'visible error';
            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Something went wrong. Please try again.';
            }
        }).catch(function() {
            formStatus.className = 'visible error';
            formStatus.textContent = 'Something went wrong. Please try again.';
        });
    });
}

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentGalleryIndex = 0;

const galleryImages = Array.from(galleryItems).map(function(item) {
    return item.querySelector('img');
});

galleryItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
        currentGalleryIndex = index;
        openLightbox(index);
    });
});

function openLightbox(index) {
    const img = galleryImages[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function showPrev() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentGalleryIndex);
}

function showNext() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    openLightbox(currentGalleryIndex);
}

if (lightbox) {
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', showPrev);
    document.querySelector('.lightbox-next').addEventListener('click', showNext);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (!themeToggle) { console.warn('Theme toggle element not found'); }
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.classList.remove('uil-moon');
            themeIcon.classList.add('uil-sun');
        } else {
            themeIcon.classList.remove('uil-sun');
            themeIcon.classList.add('uil-moon');
        }
    }
}

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    setTheme('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });
}

// Scroll Reveal Animations (Intersection Observer)
const revealElements = document.querySelectorAll('.scroll-reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });
} else {
    // Fallback: show everything if IntersectionObserver is not supported
    revealElements.forEach(function(el) {
        el.classList.add('revealed');
    });
}