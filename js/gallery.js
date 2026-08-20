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
    if (!grid || !lightbox) return;

    grid.innerHTML = artworks.map(galleryItemTemplate).join('');

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
