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
