const products = [
    {
        name: 'Телефон vivo X300 Ultra Mac Nuggets Galaxy Pro V2562 16GB/512GB',
        price: 867,
        oldPrice: 1244,
        discount:30,
        rating:4.8,
        reviewsCount:1,
        image:'images/telefon.png',
        badges:['ХОРОШАЯ ЦЕНА'],
        delivery:'Завтра'
    },

    {
        name: 'Прозрачный чехол для iPhone 17',
        price:9.63,
        oldPrice:null,
        discount:0,
        rating:4.9,
        reviewsCount:278,
        image:'images/chehol.jpg',
        badges:['РАСПРОДАЖА'],
        delivery:'2 дня'
    },

    {
        name: 'Сумка шоппер из экокожи на плечо',
        price:49.25,
        oldPrice:105.81,
        discount:53,
        rating:4.9,
        reviewsCount:163,
        image:'images/sumka.jpg',
        badges:[],
        delivery:'Послезавтра'
    },

    {
        name: 'Настольная игра для большой компании Пословицы и поговорки',
        price:9.85,
        oldPrice:11.80,
        discount:16,
        rating:4.9,
        reviewsCount:260,
        image:'images/nastolka.png',
        badges:[],
        delivery:'3 дня'
    },

    {
        name: 'Свитер оверсайз женский утепленный',
        price:66.80,
        oldPrice:143.47,
        discount:53,
        rating:4.8,
        reviewsCount:157,
        image:'images/sviter.png',
        badges:['РАСПРОДАЖА','ХИТЫ'],
        delivery:'Послезавтра'
    },

    {
        name: 'Реплика AirPods 3 Pro',
        price:44.97,
        oldPrice:125.54,
        discount:64,
        rating:4.9,
        reviewsCount:2533,
        image:'images/airpods.png',
        badges:['ХИТЫ','ХОРОШАЯ ЦЕНА'],
        delivery:'4 дня'
    },

    {
        name: 'Солнцезащитный крем стик SPF 50',
        price:20.29,
        oldPrice:null,
        discount:0,
        rating:4.3,
        reviewsCount:1586,
        image:'images/spf.png',
        badges:['ХОРОШАЯ ЦЕНА'],
        delivery:'Завтра'
    },

    {
        name: 'Спортивные носки NIKE 39-45',
        price:11.58,
        oldPrice:15.43,
        discount:24,
        rating:4.9,
        reviewsCount:14334,
        image:'images/noski.png',
        badges:[],
        delivery:'5 дней'
    },

    {
        name: 'Футболка y2k комик молодежная',
        price:42.42,
        oldPrice:null,
        discount:0,
        rating:4.9,
        reviewsCount:4589,
        image:'images/futbolka.png',
        badges:['ХИТЫ'],
        delivery:'Завтра'
    }
];


function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('catalog-card');
    let discountHTML = '';
    if (product.discount >0) {
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
        ${discountHTML}
        ${badgesHTML}
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

    return card;
}

function renderProducts(products) {
    const container = document.querySelector('.products');

    products.forEach( product => {
        const card = createCard(product);
        container.appendChild(card);
    });
}

renderProducts(products);