const refs = {
    header: document.querySelector('header'),
    logo: document.querySelector('.nav__head'),
    homeBtn: document.querySelector('#home'),
    libraryBtn: document.querySelector('#library'),
    searchForm: document.querySelector('.search__form'),
    searchInput: document.querySelector('.search__input'),
    searchIcon: document.querySelector('.search__icon'),
    libraryControls: document.querySelector('.btn')
}

refs.libraryBtn.addEventListener('click', switchToLib);
refs.homeBtn.addEventListener('click', switchToHome);
function switchToHome() {
    refs.libraryBtn.classList.remove('nav__item--curent');
    refs.homeBtn.classList.add('nav__item--curent');
    refs.header.classList.replace('header--library', 'header--home');
    refs.searchForm.classList.remove('visually-hidden');
    refs.libraryControls.classList.add('visually-hidden');
}

function switchToLib() {
    refs.libraryBtn.classList.add('nav__item--curent');
    refs.homeBtn.classList.remove('nav__item--curent');
    refs.header.classList.replace('header--home', 'header--library');
    refs.searchForm.classList.add('visually-hidden');
    refs.libraryControls.classList.remove('visually-hidden');
}