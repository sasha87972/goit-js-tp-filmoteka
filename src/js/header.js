
const refs = {
    header: document.querySelector('header'),
    logo: document.querySelector('.nav__head'),
    homeBtn: document.querySelector('#home'),
    libraryBtn: document.querySelector('#library'),
    searchForm: document.querySelector('.search__form'),
    searchInput: document.querySelector('.search__input'),
    libraryControls: document.querySelector('.btn'),
    watchedBtn: document.querySelector('#watched'),
    queueBtn: document.querySelector('#queue')
}

refs.libraryBtn.addEventListener('click', switchToLib);
refs.logo.addEventListener('click', switchToHome);
refs.homeBtn.addEventListener('click', switchToHome);

function switchToHome() {
    refs.libraryBtn.classList.remove('nav__item--curent');
    refs.homeBtn.classList.add('nav__item--curent');
    refs.header.classList.replace('header--library', 'header--home');
    refs.searchForm.classList.remove('visually-hidden');
    refs.libraryControls.classList.add('visually-hidden');
    refs.logo.classList.add('header--home');
}

function switchToLib() {
    refs.libraryBtn.classList.add('nav__item--curent');
    refs.homeBtn.classList.remove('nav__item--curent');
    refs.header.classList.replace('header--home', 'header--library');
    refs.searchForm.classList.add('visually-hidden');
    refs.libraryControls.classList.remove('visually-hidden');
}



