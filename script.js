let currentIndex = 0;
const carousel = document.querySelector('.projects-carousel');
const cards = document.querySelectorAll('.project-card');
const cardsPerView = 1;

function moveCarousel(direction) {
    const totalCards = cards.length;
    const maxIndex = totalCards - cardsPerView;
    
    currentIndex += direction;
    
    // Loop infinito
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }
    
    const scrollAmount = currentIndex * (cards[0].offsetWidth + 30); // 30 é o gap
    carousel.scrollLeft = scrollAmount;
}

//autoplay
setInterval(() => moveCarousel(1), 5000);
