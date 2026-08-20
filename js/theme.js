// Alternância de tema claro/escuro para as seções de conteúdo (about, projects, stack, gallery, lab).
// A aplicação do tema inicial (sem flash) acontece em um script inline no <head> do index.html;
// este módulo cuida apenas da interação do botão depois que a página carrega.

const STORAGE_KEY = 'theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

export function initThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    function syncButton() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        toggleButton.setAttribute('aria-pressed', String(current === 'dark'));
        toggleButton.querySelector('i').className = current === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    syncButton();

    toggleButton.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* localStorage indisponível (modo privado, etc.) — tema muda só nesta sessão. */
        }
        syncButton();
    });
}
