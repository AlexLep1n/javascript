'use strict';

const cartEl = document.querySelector('.cartIconWrap');
const basketNumberEl = cartEl.querySelector('span');
const basketEl = document.querySelector('.basket');
const productsName = document.querySelectorAll('.featuredName');
const productsPrice = document.querySelectorAll('.featuredPrice');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
let basket = {};

cartEl.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

function getProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductNumber(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

function increaseProductNumber(productId) {
    const productSpanCount = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productSpanCount.textContent++;
}

function recalculateSumForProduct(productId) {
    const productTotalCountEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let SumProductCount = (basket[productId] * productsPrice[productId].innerText.slice(1)).toFixed(2);
    productTotalCountEl.textContent = `$${SumProductCount}`;
}

function calculateTotalBasketPrice() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * productsPrice[productId].innerText.slice(1);
    }
    basketTotalValueEl.textContent = `${totalSum}`;
}

function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${productsName[productId].innerText}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>${productsPrice[productId].innerText}</div>
            <div>
                <span class="productTotalRow" data-productId="${productId}">${productsPrice[productId].innerText}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function increaseBasketProductsNumber() {
    basketNumberEl.textContent++;
}

function addProductIntoBasket(productId) {
    increaseBasketProductsNumber();
    getProductToObject(productId);
    renderProductInBasket(productId);
    calculateTotalBasketPrice();
}