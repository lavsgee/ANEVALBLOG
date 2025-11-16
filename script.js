document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle-mode');
    const body = document.body;

    btn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});