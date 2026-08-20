import { stack } from '../data/stack.js';

function stackCategoryTemplate(group) {
    return `
        <div class="stack-category">
            <h3><i class="${group.icon}" aria-hidden="true"></i> ${group.category}</h3>
            <ul class="stack-items">
                ${group.items
                    .map(
                        (item) => `
                    <li class="stack-item">
                        <i class="${item.icon}" aria-hidden="true"></i>
                        <span>${item.name}</span>
                    </li>`
                    )
                    .join('')}
            </ul>
        </div>
    `;
}

export function initStack() {
    const container = document.getElementById('stack-grid');
    if (!container) return;
    container.innerHTML = stack.map(stackCategoryTemplate).join('');
}
