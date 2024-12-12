const eventsData = {
    '2024-12-01': ['Событие 1: Конференция', 'Событие 2: Встреча с друзьями'],
    '2024-12-03': ['Событие 1: Вебинар', 'Событие 2: Выставка картин'],
    '2024-12-05': ['Событие 1: Кино', 'Событие 2: Ужин с семьей'],
};

const calendarGrid = document.getElementById('calendar-grid');
const eventsList = document.getElementById('events-list');

// Генерация дней месяца
const daysInMonth = 31;
for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(2024, 11, day); // 11 = Декабрь
    const dateStr = date.toISOString().split('T')[0];

    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.dataset.date = dateStr;

    dayElement.addEventListener('click', () => {
        document.querySelectorAll('#calendar-grid .active').forEach((el) => {
            el.classList.remove('active');
        });
        dayElement.classList.add('active');
        updateEvents(dateStr);
    });

    calendarGrid.appendChild(dayElement);
}

function updateEvents(date) {
    eventsList.classList.remove('visible'); // Убираем видимость перед обновлением
    setTimeout(() => {
        eventsList.innerHTML = ''; // Очистка списка
        const events = eventsData[date];
        if (events) {
            events.forEach((event) => {
                const li = document.createElement('li');
                li.textContent = event;
                eventsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'Событий нет';
            eventsList.appendChild(li);
        }
        eventsList.classList.add('visible'); // Добавляем видимость после обновления
    }, 300); // Время совпадает с transition в CSS
}

