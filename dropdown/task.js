const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');
let active = false;

function dropDown() {
    if (!active) {
        list.classList.add('dropdown__list_active');
        active = !active;
    } else {
        list.classList.remove('dropdown__list_active');
        active = !active;    
    }
}

function selectNewItem(event) {
    event.preventDefault();
    value.textContent = event.target.textContent;
    dropDown();
}

value.addEventListener('click', dropDown);

items.forEach(item => {
    item.addEventListener('click', selectNewItem);
});



