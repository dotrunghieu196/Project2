const productList = document.querySelector('.product-list');
const productCards = document.querySelectorAll('.product-card');
const cardWidth = productCards[0].offsetWidth + 20; // 20px là margin-right
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
    productList.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    productList.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});
