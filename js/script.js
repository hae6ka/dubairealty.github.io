//menu

var wrapperMenu = document.querySelector('.wrapper-menu');
var menu = document.querySelector('.header__menu-for-telefon');
var headerMain = document.querySelector('.header__main');

wrapperMenu.addEventListener('click', function() {
    wrapperMenu.classList.toggle('open');

    menu.classList.toggle('_isNotActive');

    body.classList.toggle('_isOverflow');
});

//header__main удаление объекта

if (window.innerWidth <= 620) {
    headerMain.innerHTML = '';
};

window.addEventListener('resize', function () {
    if (window.innerWidth <= 620) {
        headerMain.innerHTML = '';
    } else {
        headerMain.innerHTML = '<div class="main__menu"> <a href="" class="menu__link"> HOME </a>  <a href="" class="menu__link"> SERVICES </a>  <a href="" class="menu__link"> ABOUT </a>  <a href="" class="menu__link"> CONTACT </a> </div>  <div class="main__button"> <a href="" class="button__link"> book a consultation </a> </div>';
    };
});