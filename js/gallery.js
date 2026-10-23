import { artworks } from '../data/gallery.js';

function galleryItemTemplate(artwork, index) {
    return `
        <button type="button" class="gallery-item" data-index="${index}" aria-label="Ampliar ilustração: ${artwork.title}">
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        </button>
    `;
}

export function initGallery() {
    const grid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('gallery-lightbox');
    const previousButton = document.getElementById('gallery-previous');
    const nextButton = document.getElementById('gallery-next');
    const status = document.getElementById('gallery-status');
    if (!grid || !lightbox || !previousButton || !nextButton || !status) return;

    grid.innerHTML = artworks.map(galleryItemTemplate).join('');

    function updateCarousel() {
        const item = grid.querySelector('.gallery-item');
        const gap = Number.parseFloat(getComputedStyle(grid).columnGap) || 0;
        const step = item ? item.offsetWidth + gap : grid.clientWidth;
        const visibleCount = step ? Math.max(1, Math.round((grid.clientWidth + gap) / step)) : 1;
        const lastIndex = Math.max(0, artworks.length - visibleCount);
        const currentIndex = step
            ? Math.min(lastIndex, Math.round(grid.scrollLeft / step))
            : 0;

        status.textContent = artworks.length
            ? `${currentIndex + 1}–${Math.min(currentIndex + visibleCount, artworks.length)} / ${artworks.length}`
            : '0 / 0';
        previousButton.disabled = lastIndex === 0;
        nextButton.disabled = lastIndex === 0;
    }

    function scrollArtwork(direction) {
        const item = grid.querySelector('.gallery-item');
        if (!item) return;

        const gap = Number.parseFloat(getComputedStyle(grid).columnGap) || 0;
        const step = item.offsetWidth + gap;
        const visibleCount = Math.max(1, Math.round((grid.clientWidth + gap) / step));
        const lastIndex = Math.max(0, artworks.length - visibleCount);
        if (lastIndex === 0) return;

        const currentIndex = Math.min(lastIndex, Math.round(grid.scrollLeft / step));
        const nextIndex = (currentIndex + direction + lastIndex + 1) % (lastIndex + 1);
        grid.scrollTo({
            left: nextIndex * step,
            behavior: 'smooth',
        });
    }

    previousButton.addEventListener('click', () => scrollArtwork(-1));
    nextButton.addEventListener('click', () => scrollArtwork(1));

    grid.addEventListener('scroll', updateCarousel);
    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    let lastFocusedElement = null;

    function openLightbox(index) {
        const artwork = artworks[index];
        if (!artwork) return;

        lightbox.innerHTML = `
            <button type="button" class="modal-close" aria-label="Fechar visualização">
                <i class="fas fa-xmark" aria-hidden="true"></i>
            </button>
            <img src="${artwork.image}" alt="${artwork.title}" class="lightbox-image">
            <p class="lightbox-caption">${artwork.description}</p>
        `;
        lightbox.showModal();
    }

    grid.addEventListener('click', (event) => {
        const item = event.target.closest('.gallery-item');
        if (!item) return;
        lastFocusedElement = item;
        openLightbox(Number(item.dataset.index));
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target.closest('.modal-close')) {
            lightbox.close();
        }
    });

    lightbox.addEventListener('close', () => {
        lastFocusedElement?.focus();
    });
}
