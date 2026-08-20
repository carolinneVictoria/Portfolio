// Experimentos do Lab / Playground.
// Cada experimento define seu próprio HTML e comportamento através de mount(container).
// Para adicionar um novo experimento, basta incluir um novo objeto neste array.

export const experiments = [
    {
        id: 'magic-switch',
        title: 'Interruptor com microinteração',
        description: 'Um toggle simples com animação de mola no thumb ao alternar o estado.',
        mount(container) {
            container.innerHTML = `
                <button type="button" class="lab-switch" role="switch" aria-checked="false" aria-label="Alternar interruptor de exemplo">
                    <span class="lab-switch-thumb"></span>
                </button>
                <p class="lab-switch-status">Desligado</p>
            `;
            const button = container.querySelector('.lab-switch');
            const status = container.querySelector('.lab-switch-status');
            button.addEventListener('click', () => {
                const isOn = button.getAttribute('aria-checked') === 'true';
                button.setAttribute('aria-checked', String(!isOn));
                button.classList.toggle('is-on', !isOn);
                status.textContent = !isOn ? 'Ligado' : 'Desligado';
            });
        },
    },
    {
        id: 'palette-generator',
        title: 'Gerador de paletas',
        description: 'Gera uma paleta de cores aleatória e permite copiar cada código hexadecimal.',
        mount(container) {
            container.innerHTML = `
                <button type="button" class="call-to-action-two lab-generate-btn">Gerar paleta</button>
                <div class="lab-palette" aria-live="polite"></div>
            `;
            const paletteEl = container.querySelector('.lab-palette');
            const button = container.querySelector('.lab-generate-btn');

            function randomHex() {
                return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
            }

            function render() {
                const colors = Array.from({ length: 4 }, randomHex);
                paletteEl.innerHTML = colors
                    .map(
                        (color) => `
                        <button type="button" class="lab-swatch" style="background:${color}" data-color="${color}" aria-label="Copiar cor ${color}">
                            <span>${color}</span>
                        </button>`
                    )
                    .join('');
            }

            container.addEventListener('click', async (event) => {
                const swatch = event.target.closest('.lab-swatch');
                if (!swatch) return;
                try {
                    await navigator.clipboard.writeText(swatch.dataset.color);
                    swatch.querySelector('span').textContent = 'Copiado!';
                    setTimeout(() => {
                        swatch.querySelector('span').textContent = swatch.dataset.color;
                    }, 1200);
                } catch {
                    /* Clipboard indisponível — ignora silenciosamente. */
                }
            });

            button.addEventListener('click', render);
            render();
        },
    },
    {
        id: 'tilt-card',
        title: 'Cartão com efeito 3D',
        description: 'Microinteração CSS de inclinação suave ao passar o mouse sobre o cartão.',
        mount(container) {
            container.innerHTML = `
                <div class="lab-tilt-card">
                    <i class="fas fa-cube"></i>
                    <p>Passe o mouse aqui</p>
                </div>
            `;
        },
    },
];
