const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));

const product = products.find(p=> p.id === productId) || products[0];

const container = document.querySelector('#product-details');

function getStars(rating) {
    let stars = '';
    for (let i=1; i<=5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

if(container && product) {
    const specsHTML = product.specs.map (spec => `
        <li>${spec}</li>`).join('');
    const reviewsHTML = product.reviews.map(review => `
        <div class="review">
            <div class="review__header">
                <div class="review__user">
                    <span class="review__avatar">👤</span>
                    <span class="review__name">${review.author}</span>
                </div>
                <div class="review__rating">${getStars(review.rating)}</div>
            </div>
            <p class="review__text">${review.text}</p>
            <span class="review__date">${review.date}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="product-card">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}">
            </div>        
            <div class="product-card__info">
                <h2 class="product-card__title">${product.name}</h2>
                
                <p style="color: #666; margin-bottom: 10px;">
                ${product.description}</p>

                <ul class="product-card__description">
                    ${specsHTML}
                </ul>

                <div class="product-card__prices">
                    <p class="product-card__price">${product.price} BYN</p>
                    ${product.oldPrice ? 
                        `<p class="product-card__old-price">
                        ${product.oldPrice} BYN</p>` : ''}
                </div>

                <div class="product-card__btns">
                    <button class="product-card__btn1">В корзину</button>
                    <button class="product-card__btn2">Купить</button>
                </div>
            </div>
        </div>

        <section class="reviews">
            <h2 class="reviews__title">Отзывы покупателей</h2>
            <div class="reviews__summary">
                <div class="reviews__rating">
                    <span class="reviews__stars">
                    ${getStars(Math.round(product.rating))}</span>
                    <span class="reviews__average">
                    ${product.rating}</span>
                    <span class="reviews__count">· 
                    ${product.reviewsCount} отзывов</span>
                </div>
            </div>
            <div class="reviews__list">${reviewsHTML}</div>
        </section>
    `;

    const buyBtn = document.querySelector('.product-card__btn1');
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
        });
    }

}

updateCartCount();