// Инициализация AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
});

// Мобильная навигация
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Переключение навигации
    nav.classList.toggle('nav-active');
    
    // Анимация ссылок
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Анимация бургера
    burger.classList.toggle('toggle');
});

// Добавление класса анимации к бургеру при клике
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
});

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Закрытие мобильного меню, если оно открыто
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Изменение стиля шапки при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Отправка формы
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получение значений формы
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Здесь обычно отправляются данные формы на сервер
        // Для этого примера просто покажем сообщение об успехе
        alert(`Спасибо, ${name}! Ваше сообщение получено. Я свяжусь с вами в ближайшее время.`);
        
        // Сброс формы
        contactForm.reset();
    });
}

// Эффект параллакса для секции hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Эффект печатающегося текста для секции hero
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            heroTitle.innerHTML += text.charAt(i);
        }, 100 * i);
    }
}