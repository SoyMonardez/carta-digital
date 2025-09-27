const fabContainer = document.querySelector('.social-fab-container');
const fabToggle = document.querySelector('.social-fab-toggle');

fabToggle.addEventListener('click', () => {
    fabContainer.classList.toggle('active');
});