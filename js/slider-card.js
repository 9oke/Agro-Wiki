const track = document.querySelector('.merch-track');
const prevButton = document.getElementById('prev-merch');
const nextButton = document.getElementById('next-merch');
const cards = document.querySelectorAll('.merch-card');
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');
const addToCartMessage = document.querySelector('.add-to-cart-message');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cardWidth = cards[0].offsetWidth + 16;

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        addToCartMessage.style.display = 'block';
        setTimeout(() => {
            addToCartMessage.style.display = 'none';
        }, 2000);

        cartIcon.style.display = 'flex';
    });
});

cartIcon.addEventListener('click', () => {
    if (cartPopup.style.display === 'none' || cartPopup.style.display === '') {
        cartPopup.style.display = 'block';
    } else {
        cartPopup.style.display = 'none';
    }
});
