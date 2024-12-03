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

const merchCards = document.querySelectorAll('.merch-card');
let merchIndex = 0;

// Выбор новых стрелок (div)
const leftArrow = document.querySelector('.merch-card__button-left div');
const rightArrow = document.querySelector('.merch-card__button-right div');

function updateArrows() {
    // Скрыть стрелку влево на первой карточке
    if (merchIndex === 0) {
        leftArrow.classList.add('hidden');
    } else {
        leftArrow.classList.remove('hidden');
    }

    // Скрыть стрелку вправо на последней карточке
    if (merchIndex === merchCards.length - 1) {
        rightArrow.classList.add('hidden');
    } else {
        rightArrow.classList.remove('hidden');
    }
}

function showMerchCard(index) {
    merchCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });

    // Обновить состояние стрелок
    updateArrows();
}

// Инициализация: Показать первую карточку и обновить стрелки
showMerchCard(merchIndex);

// Перелистывание вправо
rightArrow.addEventListener('click', () => {
    if (merchIndex < merchCards.length - 1) {
        merchIndex++;
        showMerchCard(merchIndex);
    }
});

// Перелистывание влево
leftArrow.addEventListener('click', () => {
    if (merchIndex > 0) {
        merchIndex--;
        showMerchCard(merchIndex);
    }
});
