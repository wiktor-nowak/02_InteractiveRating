const rating_score_bubbles = document.querySelectorAll('[data-click]');
const pop_up = document.querySelector('[data-content]');
const button = document.querySelector('[data-submit]');
const card_rating = document.querySelector('.rating-box');
const card_bye = document.querySelector('.thank-you');

let value = undefined;

rating_score_bubbles.forEach((item1) => {
    item1.addEventListener('click', (e) => {
        rating_score_bubbles.forEach((item2) => {
            item2.classList.remove('is_clicked');
        });
        item1.classList.add('is_clicked');
        value = item1.innerHTML;
    });
});

button.addEventListener('click', (e) => {
    card_rating.classList.add('invisible');
    card_bye.classList.remove('invisible');
    pop_up.innerHTML = `You selected ${value} out of 5`;
});


