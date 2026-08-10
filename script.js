let currentIndex = 0;
const carousel = document.querySelector('.projects-carousel');
const cards = document.querySelectorAll('.project-card');
const cardsPerView = 1;

function moveCarousel(direction) {
    const totalCards = cards.length;
    const maxIndex = totalCards - cardsPerView;

    currentIndex += direction;

    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    const scrollAmount = currentIndex * (cards[0].offsetWidth + 30);
    carousel.scrollLeft = scrollAmount;
}

if (carousel && cards.length) {
    setInterval(() => moveCarousel(1), 5000);
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector('.submit-btn');
        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        formStatus.textContent = 'Enviando sua mensagem...';
        formStatus.className = 'form-status sending';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Mensagem enviada com sucesso! Obrigada por entrar em contato.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Falha ao enviar');
            }
        } catch (error) {
            formStatus.textContent = 'Não foi possível enviar agora. Tente novamente ou use o e-mail diretamente.';
            formStatus.className = 'form-status error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}
