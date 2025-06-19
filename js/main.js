document.addEventListener('DOMContentLoaded', function() {
    // Загрузка последних новостей
    fetchLatestNews();
    
    // Загрузка ближайших событий
    fetchUpcomingEvents();
    
    // Инициализация формы обратной связи
    if (document.getElementById('feedback-form')) {
        initFeedbackForm();
    }
    
    // Проверка сохраненных учетных данных
    checkSavedCredentials();
});

function fetchLatestNews() {
    // В реальном проекте здесь будет AJAX-запрос к API
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;
    
    const mockNews = [
        {
            id: 1,
            title: 'Открытие нового парка в центре города',
            excerpt: 'В Нязепетровске завершено строительство нового парка отдыха...',
            date: '15.10.2023',
            image: 'images/news1.jpg'
        },
        {
            id: 2,
            title: 'Интервью с мэром города',
            excerpt: 'В эфире "Нязепетровского Контура" эксклюзивное интервью...',
            date: '12.10.2023',
            image: 'images/news2.jpg'
        },
        {
            id: 3,
            title: 'Фестиваль народного творчества',
            excerpt: 'В выходные состоится ежегодный фестиваль народного творчества...',
            date: '10.10.2023',
            image: 'images/news3.jpg'
        }
    ];
    
    newsGrid.innerHTML = mockNews.map(news => `
        <div class="news-card">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <h3>${news.title}</h3>
                <div class="news-meta">${news.date}</div>
                <p>${news.excerpt}</p>
                <a href="news/${news.id}.html" class="btn">Читать далее</a>
            </div>
        </div>
    `).join('');
}

function fetchUpcomingEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;
    
    const mockEvents = [
        {
            id: 1,
            title: 'Прямой эфир с главврачом больницы',
            date: '20.10.2023, 18:00',
            location: 'Студия "Нязепетровский Контур"',
            image: 'images/event1.jpg'
        },
        {
            id: 2,
            title: 'День города - 2023',
            date: '28.10.2023, 12:00',
            location: 'Центральная площадь',
            image: 'images/event2.jpg'
        },
        {
            id: 3,
            title: 'Конкурс юных талантов',
            date: '05.11.2023, 15:00',
            location: 'ДК "Металлург"',
            image: 'images/event3.jpg'
        }
    ];
    
    eventsGrid.innerHTML = mockEvents.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}">
            <div class="event-content">
                <h3>${event.title}</h3>
                <div class="event-meta">
                    <p><strong>Дата:</strong> ${event.date}</p>
                    <p><strong>Место:</strong> ${event.location}</p>
                </div>
                <a href="events/${event.id}.html" class="btn">Подробнее</a>
            </div>
        </div>
    `).join('');
}

function initFeedbackForm() {
    const form = document.getElementById('feedback-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // В реальном проекте здесь будет отправка данных на сервер
        console.log('Форма отправлена:', data);
        
        // Показываем сообщение об успехе
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

function checkSavedCredentials() {
    if (document.cookie.includes('user_token')) {
        // Пользователь уже авторизован
        // Можно показать персонализированный контент
    }
}