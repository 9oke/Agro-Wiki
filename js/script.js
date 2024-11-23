document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-btn');
    const box = document.getElementById('content-box');
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');

    // Инициализируем Bootstrap Carousel
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Автопрокрутка каждые 3 секунды
        ride: 'carousel'
    });

    // Контент для каждого слайда
    const slideContent = [
        {
            title: "Слайд 1",
            description: "Информация о первом слайде. Узнайте больше о библиотеке агрономии.",
        },
        {
            title: "Слайд 2",
            description: "Второй слайд представляет инновации и технологии в агрономии.",
        },
        {
            title: "Слайд 3",
            description: "Третий слайд рассказывает об образовательных ресурсах для агрономов.",
        },
    ];// Функция обновления содержимого контейнера
    const updateContent = () => {
        const activeSlide = document.querySelector('.carousel-item.active');
        const slideIndex = [...document.querySelectorAll('.carousel-item')].indexOf(activeSlide);
        const currentContent = slideContent[slideIndex];

        box.innerHTML = `
            <h2>${currentContent.title}</h2>
            <p>${currentContent.description}</p>
            `
            ;
    };

    // Обновляем контент при смене слайда
    carouselElement.addEventListener('slid.bs.carousel', updateContent);

    // Переключение видимости контейнера и управление автопрокруткой
    button.addEventListener('click', () => {
        box.classList.toggle('active');
        if (box.classList.contains('active')) {
            carousel.pause(); // Останавливаем автопрокрутку
            updateContent(); // Обновляем содержимое при открытии
        } else {
            carousel.cycle(); // Возобновляем автопрокрутку
        }
    });
});