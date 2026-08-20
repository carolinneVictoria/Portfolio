// Navbar: menu mobile e destaque da seção visível (scrollspy).

export function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const list = document.querySelector('.nav-list');
    if (!toggle || !list) return;

    function closeMenu() {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
        const isOpen = list.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    list.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}

export function initScrollSpy() {
    const navLinks = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
    if (!navLinks.length) return;

    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const linkBySectionId = new Map(
        navLinks.map((link) => [link.getAttribute('href').slice(1), link])
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = linkBySectionId.get(entry.target.id);
                if (!link) return;
                if (entry.isIntersecting) {
                    navLinks.forEach((navLink) => navLink.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
}
