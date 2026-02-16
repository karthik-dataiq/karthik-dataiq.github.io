/**
 * Karthik DataIQ — Portfolio Script
 * Vanilla JS, zero dependencies
 */

(function () {
    'use strict';

    // ═══════════════════════ DARK MODE ═══════════════════════
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Initialise theme from localStorage or system preference
    function initTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }

    initTheme();

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // ═══════════════════════ MOBILE MENU ═══════════════════════
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function () {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            if (menuIcon) {
                menuIcon.className = isOpen ? 'fas fa-bars' : 'fas fa-times';
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.className = 'fas fa-bars';
                }
            });
        });
    }

    // ═══════════════════════ NAVBAR SCROLL EFFECT ═══════════════════════
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ═══════════════════════ SMOOTH SCROLL (OFFSET FOR FIXED NAV) ═══════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ═══════════════════════ SCROLL REVEAL ═══════════════════════
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        var windowHeight = window.innerHeight;

        reveals.forEach(function (el) {
            var revealTop = el.getBoundingClientRect().top;
            var revealPoint = 120;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    }

    // Add .reveal class to major content sections
    function initReveal() {
        var sections = document.querySelectorAll(
            '.skill-category, .timeline-item, .project-card, #about .lg\\:col-span-2, #about .lg\\:col-span-3, #publications > div > div > div, #contact > div > div'
        );
        sections.forEach(function (el) {
            el.classList.add('reveal');
        });
        revealOnScroll();
    }

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('DOMContentLoaded', initReveal);

    // Run once in case the page is already loaded
    if (document.readyState !== 'loading') {
        initReveal();
    }

    // ═══════════════════════ ACTIVE NAV HIGHLIGHT ═══════════════════════
    function highlightActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-link');
        var scrollPos = window.scrollY + 100;

        var currentSection = '';
        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('!text-primary-600', 'dark:!text-primary-400');
            var href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('!text-primary-600', 'dark:!text-primary-400');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav, { passive: true });

})();
