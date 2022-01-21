const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
// const anchor = document.querySelector('.a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
// anchor.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.rowGap = '40px';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.display = 'none';
}