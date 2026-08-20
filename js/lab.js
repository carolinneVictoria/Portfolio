import { experiments } from '../data/lab-experiments.js';

export function initLab() {
    const container = document.getElementById('lab-grid');
    if (!container) return;

    container.innerHTML = experiments
        .map(
            (experiment) => `
        <div class="lab-card">
            <h3>${experiment.title}</h3>
            <p>${experiment.description}</p>
            <div class="lab-demo" id="lab-demo-${experiment.id}"></div>
        </div>
    `
        )
        .join('');

    experiments.forEach((experiment) => {
        const mountPoint = document.getElementById(`lab-demo-${experiment.id}`);
        if (mountPoint) experiment.mount(mountPoint);
    });
}
