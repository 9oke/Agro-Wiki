document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-btn');
    const box = document.getElementById('content-box');

    button.addEventListener('click', () => {
        if (box.classList.contains('active')) {
            box.classList.remove('active');
        } else {
            box.classList.add('active');
        }
    });
});

