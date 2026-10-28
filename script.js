"use strict";
const products = [
    {
        id: 1,
        name: 'Телефон vivo X300 Ultra Mac Nuggets Galaxy Pro V2562 16GB/512GB',
        price: 867,
        oldPrice: 1244,
        discount: 30,
        rating: 4.8,
        reviewsCount: 1,
        image: 'images/telefon.png',
        badges: ['ХОРОШАЯ ЦЕНА'],
        delivery: 'Завтра',
        description: 'Флагманский смартфон с мощной камерой.',
        specs: [
            'Поддержка eSIm: Да',
            'Разрешение камеры: 200 Мп',
            'Процессор: Snapdragon 8 Elite Gen5',
            'Экран: 6.82" AMOLED, 144 Гц',
            'Память: 16 ГБ/512 ГБ'
        ],
        reviews: [
            { author: 'Мухамед',
                text: 'Отличный телефон! Камера бомба.',
                rating: 5, date: '19 сентября 2026' },
            { author: 'Алексей',
                text: 'Батарею держит два дня.',
                rating: 4, date: '11 сентября 2026' }
        ]
    },
    {
        id: 2,
        name: 'Прозрачный чехол для iPhone 17',
        price: 9.63,
        oldPrice: null,
        discount: 0,
        rating: 4.9,
        reviewsCount: 278,
        image: 'images/chehol.png',
        badges: ['РАСПРОДАЖА'],
        delivery: '2 дня',
        description: 'Тонкий прозрачный чехол, защищает от царапин.',
        specs: [
            'Материал: Силикон',
            'Цвет: Прозрачный',
            'Тип: Накладка'
        ],
        reviews: [
            { author: 'Игорь',
                text: 'Хороший чехол, но желтеет со временем.',
                rating: 4,
                date: '5 января 2025' }
        ]
    },
    {
        id: 3,
        name: 'Сумка шоппер из экокожи на плечо',
        price: 49.25,
        oldPrice: 105.81,
        discount: 53,
        rating: 4.9,
        reviewsCount: 163,
        image: 'images/sumka.png',
        badges: [],
        delivery: 'Послезавтра',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 4,
        name: 'Настольная игра для большой компании Пословицы и поговорки',
        price: 9.85,
        oldPrice: 11.80,
        discount: 16,
        rating: 4.9,
        reviewsCount: 260,
        image: 'images/nastolka.png',
        badges: [],
        delivery: '3 дня',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 5,
        name: 'Свитер оверсайз женский утепленный',
        price: 66.80,
        oldPrice: 143.47,
        discount: 53,
        rating: 4.8,
        reviewsCount: 157,
        image: 'images/sviter.png',
        badges: ['РАСПРОДАЖА', 'ХИТЫ'],
        delivery: 'Послезавтра',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 6,
        name: 'Реплика AirPods 3 Pro',
        price: 44.97,
        oldPrice: 125.54,
        discount: 64,
        rating: 4.9,
        reviewsCount: 2533,
        image: 'images/airpods.png',
        badges: ['ХИТЫ', 'ХОРОШАЯ ЦЕНА'],
        delivery: '4 дня',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 7,
        name: 'Солнцезащитный крем стик SPF 50',
        price: 20.29,
        oldPrice: null,
        discount: 0,
        rating: 4.3,
        reviewsCount: 1586,
        image: 'images/spf.png',
        badges: ['ХОРОШАЯ ЦЕНА'],
        delivery: 'Завтра',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 8,
        name: 'Спортивные носки NIKE 39-45',
        price: 11.58,
        oldPrice: 15.43,
        discount: 24,
        rating: 4.9,
        reviewsCount: 14334,
        image: 'images/noski.png',
        badges: [],
        delivery: '5 дней',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    },
    {
        id: 9,
        name: 'Футболка y2k комик молодежная',
        price: 42.42,
        oldPrice: null,
        discount: 0,
        rating: 4.9,
        reviewsCount: 4589,
        image: 'images/futbolka.png',
        badges: ['ХИТЫ'],
        delivery: 'Завтра',
        description: '',
        specs: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        reviews: []
    }
];
let cartCount = 0;
function updateCartCount() {
    const countElement = document.querySelector('.user-actions__count');
    if (!countElement)
        return;
    countElement.textContent = String(cartCount);
    if (cartCount > 0) {
        countElement.classList.add('user-actions__count--active');
    }
    else {
        countElement.classList.remove('user-actions__count--active');
    }
}
function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('catalog-card');
    let discountHTML = '';
    if (product.discount > 0) {
        discountHTML = `<span class="catalog-card__discount">-${product.discount}%</span>`;
    }
    let oldPriceHTML = '';
    if (product.oldPrice) {
        oldPriceHTML = `<span class="catalog-card__old-price">${product.oldPrice} BYN</span>`;
    }
    let badgesHTML = '';
    if (product.badges.length > 0) {
        badgesHTML = '<div class="catalog-card__badges">';
        product.badges.forEach(badge => {
            badgesHTML += `<span class="catalog-card__badge">${badge}</span>`;
        });
        badgesHTML += '</div>';
    }
    card.innerHTML = `
    <div class="catalog-card__image">
        <img src="${product.image}" alt="${product.name}">
        <button class="catalog-card__favorite">
            <i class="far fa-heart"></i>
        </button>
        <div class="catalog-card__labels">
            ${discountHTML}
            ${badgesHTML}
        </div>
    </div>
    <div class="catalog-card__info">
        <div class="catalog-card__prices">
            <span class="catalog-card__price">${product.price} BYN</span>
            ${oldPriceHTML}
        </div>
        <h3 class="catalog-card__title">${product.name}</h3>
        <div class="catalog-card__rating">
            <i class="fas fa-star"></i>
            ${product.rating} · ${product.reviewsCount} отзывов
        </div>
        <button class="catalog-card__btn">
            <i class="fas fa-shopping-cart"></i>
            ${product.delivery}
        </button>
    </div>
    `;
    const btn = card.querySelector('.catalog-card__btn');
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        cartCount++;
        updateCartCount();
    });
    card.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.catalog-card__btn') ||
            target.closest('.catalog-card__favorite')) {
            return;
        }
        window.location.href = `productCard.html?id=${product.id}`;
    });
    return card;
}
function renderProducts(products) {
    const container = document.querySelector('.products');
    if (!container)
        return;
    products.forEach((product) => {
        const card = createCard(product);
        container.appendChild(card);
    });
}
renderProducts(products);
