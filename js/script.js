document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-btn');
    const box = document.getElementById('content-box');
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');

    // Инициализация карусели
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000 // Оставляем автопрокрутку активной по умолчанию
    });

    const slideContent = [
        {
            title: "Слайд 1",
            description: "Информация о первом слайде. Узнайте больше о библиотеке агрономии.",
            img: "/img/farmer.png"
        },
        {
            title: "Слайд 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio, at beatae aperiam commodi officia officiis impedit quas mollitia cupiditate, eum voluptatem et ipsum ex deserunt magnam pariatur? Aut, molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio, at beatae aperiam commodi officia officiis impedit quas mollitia cupiditate, eum voluptatem et ipsum ex deserunt magnam pariatur? Aut, molestias.",
            img: "/img/area-farming.png"
        },
        {
            title: "Слайд 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio, at beatae aperiam commodi officia officiis impedit quas mollitia cupiditate, eum voluptatem et ipsum ex deserunt magnam pariatur? Aut, molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio, at beatae aperiam commodi officia officiis impedit quas mollitia cupiditate, eum voluptatem et ipsum ex deserunt magnam pariatur? Aut, molestias.",
            img: "/img/area-farming2.png"
        }
    ];

    // Функция обновления контента
    const updateContent = () => {
        const activeSlide = document.querySelector('.carousel-item.active');
        const slideIndex = [...document.querySelectorAll('.carousel-item')].indexOf(activeSlide);
        const currentContent = slideContent[slideIndex];

        box.innerHTML = `
            <img src="${currentContent.img}" alt="${currentContent.title}" class="news-image">
            <div class="news-content">
                <h2>${currentContent.title}</h2>
                <p>${currentContent.description}</p>
            </div>
        `;
    };

    // Блокировка управления каруселью
    const blockCarousel = (block) => {
        if (block) {
            carousel.pause(); // Полная остановка
            carouselElement.setAttribute('data-bs-interval', 'false'); // Отключение автопрокрутки
            document.querySelectorAll('.carousel-control-prev, .carousel-control-next')
                .forEach(btn => btn.classList.add('disabled')); // Отключение стрелок
        } else {
            carouselElement.setAttribute('data-bs-interval', '3000'); // Включение автопрокрутки
            carousel.cycle(); // Возобновление
            document.querySelectorAll('.carousel-control-prev, .carousel-control-next')
                .forEach(btn => btn.classList.remove('disabled')); // Включение стрелок
        }
    };

    // Закрытие новостей при пролистывании карусели
    carouselElement.addEventListener('slid.bs.carousel', () => {
        if (box.classList.contains('active')) {
            console.log('Closing news container due to slide change');
            box.classList.remove('active');
            blockCarousel(false); // Возобновляем управление каруселью
        }
    });

    // Управление автопрокруткой при клике на кнопку
    button.addEventListener('click', () => {
        box.classList.toggle('active');
        if (box.classList.contains('active')) {
            console.log('Pausing carousel');
            blockCarousel(true); // Блокируем карусель
            updateContent();

            // Скроллинг к новостному контенту
            box.scrollIntoView({
                behavior: 'smooth', // Плавный скроллинг
                block: 'start' // Позиция в верхней части окна
            });
        } else {
            console.log('Resuming carousel');
            blockCarousel(false); // Снимаем блокировку
        }
    });
});
