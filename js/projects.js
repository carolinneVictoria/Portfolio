import { projects, CATEGORIES, getProjectById } from '../data/projects.js';

function projectCardTemplate(project) {
    const demoLink = project.demoUrl
        ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-icon">
             <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Demo
           </a>`
        : '';

    return `
        <article class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="Captura de tela do projeto ${project.name}" loading="lazy">
                ${project.featured ? '<span class="project-badge"><i class="fas fa-star" aria-hidden="true"></i> Destaque</span>' : ''}
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.shortDescription}</p>
                <ul class="project-tags" aria-label="Tecnologias utilizadas">
                    ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
                </ul>
                <div class="project-links">
                    ${demoLink}
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-icon">
                        <i class="fab fa-github" aria-hidden="true"></i> GitHub
                    </a>
                    <button type="button" class="project-details-btn" data-project-id="${project.id}">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </article>
    `;
}

const PROJECTS_PAGE_SIZE = 6;

function renderProjects(grid, category, visibleCount) {
    const filtered = category === 'all' ? projects : projects.filter((p) => p.category === category);
    grid.innerHTML = filtered.slice(0, visibleCount).map(projectCardTemplate).join('');

    const loadMoreBtn = document.querySelector('.project-loadmore-btn');
    if (loadMoreBtn) {
        loadMoreBtn.hidden = visibleCount >= filtered.length;
    }

    return filtered.length;
}

function initFilters(grid, state) {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            state.category = button.dataset.filter;
            state.visibleCount = PROJECTS_PAGE_SIZE;
            renderProjects(grid, state.category, state.visibleCount);
        });
    });
}

function initLoadMore(grid, state) {
    const loadMoreBtn = document.querySelector('.project-loadmore-btn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        state.visibleCount += PROJECTS_PAGE_SIZE;
        renderProjects(grid, state.category, state.visibleCount);
    });
}

function detailModalTemplate(project) {
    const { details } = project;
    return `
        <button type="button" class="modal-close" aria-label="Fechar detalhes do projeto">
            <i class="fas fa-xmark" aria-hidden="true"></i>
        </button>
        <div class="modal-body">
            <img src="${project.image}" alt="Captura de tela do projeto ${project.name}" class="modal-image">
            <h2 id="project-modal-title">${project.name}</h2>

            <ul class="project-tags" aria-label="Tecnologias utilizadas">
                ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>

            <div class="modal-section">
                <h3>Contexto</h3>
                <p>${details.context}</p>
            </div>
            <div class="modal-section">
                <h3>Problema</h3>
                <p>${details.problem}</p>
            </div>
            <div class="modal-section">
                <h3>Solução</h3>
                <p>${details.solution}</p>
            </div>
            <div class="modal-section">
                <h3>Principais funcionalidades</h3>
                <ul class="modal-list">
                    ${details.features.map((feature) => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-section">
                <h3>Desafios encontrados</h3>
                <p>${details.challenges}</p>
            </div>
            <div class="modal-section">
                <h3>Aprendizados</h3>
                <p>${details.learnings}</p>
            </div>

            <div class="modal-links">
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="call-to-action">Ver demonstração</a>` : ''}
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="call-to-action-two">Ver no GitHub</a>
            </div>
        </div>
    `;
}

function initModal(grid) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    let lastFocusedElement = null;

    grid.addEventListener('click', (event) => {
        const trigger = event.target.closest('.project-details-btn');
        if (!trigger) return;

        const project = getProjectById(trigger.dataset.projectId);
        if (!project) return;

        lastFocusedElement = trigger;
        modal.innerHTML = detailModalTemplate(project);
        modal.showModal();
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.closest('.modal-close')) {
            modal.close();
        }
    });

    modal.addEventListener('close', () => {
        lastFocusedElement?.focus();
    });
}

export function initProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const state = { category: 'all', visibleCount: PROJECTS_PAGE_SIZE };

    renderProjects(grid, state.category, state.visibleCount);
    initFilters(grid, state);
    initLoadMore(grid, state);
    initModal(grid);
}

export { CATEGORIES };
