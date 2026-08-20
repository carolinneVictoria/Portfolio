// Formulário de contato e botão "copiar e-mail".

export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');
    if (!contactForm || !formStatus) return;

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
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                formStatus.textContent = 'Mensagem enviada com sucesso! Obrigada por entrar em contato.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Falha ao enviar');
            }
        } catch {
            formStatus.textContent = 'Não foi possível enviar agora. Tente novamente ou use o e-mail diretamente.';
            formStatus.className = 'form-status error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

export function initCopyEmail() {
    const copyButton = document.getElementById('copy-email-btn');
    if (!copyButton) return;

    const email = copyButton.dataset.email;
    const feedback = document.getElementById('copy-email-feedback');

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Fallback para navegadores sem suporte à Clipboard API.
            const textarea = document.createElement('textarea');
            textarea.value = email;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

        if (feedback) {
            feedback.textContent = 'E-mail copiado!';
            feedback.classList.add('visible');
            setTimeout(() => {
                feedback.classList.remove('visible');
            }, 2000);
        }
    });
}
