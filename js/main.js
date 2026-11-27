// Модальное окно быстрой заявки
const modal = document.querySelector('.modal');
const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButtons = document.querySelectorAll('[data-close-modal]');

openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.showModal();
    });
});

closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.close();
    });
});

// Клик по затемнению вокруг окна тоже закрывает его
if (modal) {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.close();
        }
    });
}

// Меню на телефоне: кнопка "Меню" открывает и закрывает список пунктов
const menuButton = document.querySelector('.site-header__toggle');
const siteNav = document.querySelector('.site-nav');

menuButton.addEventListener('click', function () {
    siteNav.classList.toggle('site-nav--open');
});

// Фильтры каталога на телефоне
const filtersBlock = document.querySelector('.catalog-filters');
const filtersButton = document.querySelector('.catalog-filters__toggle');

if (filtersButton) {
    filtersButton.addEventListener('click', function () {
        filtersBlock.classList.toggle('catalog-filters--open');
    });
}
