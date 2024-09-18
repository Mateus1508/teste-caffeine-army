import { toothpaste, toothbrush, dentalFloss } from './data.js';

const buttons = document.getElementsByClassName('filter-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}

function createProductHTML(product) {
    const discountPercentage = product.discount > 0 ? `${product.discount * 100}% OFF` : '';
    const discountedPrice = product.price - (product.price * product.discount);
    const discountTag = product.discount > 0 ? `<del class="discount">R$${product.price.toFixed(2)}</del>` : '';

    return `
        <article class="product-item">
            ${discountPercentage ? `<span class="discount-percentage">${discountPercentage}</span>` : ''}
            <img class="img-item" src="${product.image}" alt="Imagem de ${product.name}">
            <div class="product-content">
                <img class="rating" src="/assets/rating.png" alt="Avaliação">
                <h3 class="product-item-title">${product.name}</h3>
                <div class="price-box">
                    ${discountTag}
                    <span class="price">R$${discountedPrice.toFixed(2)}</span>
                </div>
                <button class="primary-button">Adicionar ao carrinho</button>
            </div>
        </article>
    `;
}

function createSectionHTML(products, title) {
    return `
        <section class="products">
            <h2 class="product-title">${title}</h2>
            <hr>
            <div class="product-list">
                ${products.map(createProductHTML).join('')}
            </div>
        </section>
    `;
}

function renderAllSections() {
    const container = document.getElementById('products-container');
    container.innerHTML = `
        ${createSectionHTML(toothpaste, 'Pasta de dente')}
        ${createSectionHTML(toothbrush, 'Escova de dente')}
        ${createSectionHTML(dentalFloss, 'Fio dental')}
    `;
}

renderAllSections();