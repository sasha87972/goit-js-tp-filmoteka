export default function getRefs() {
  return {
    body: document.querySelector('body'),
    footerBtn: document.querySelector('.footer__button'),
    goTopBtn: document.querySelector('.back_to_top'),
    films: document.querySelector('.js-film__list'),
    backdrop: document.querySelector('.lightbox__overlay'),
    filmModal: document.querySelector('.js-lightbox'),
    filmModalInfo: document.querySelector('.film-card'),
    closeModalBtn: document.querySelector('.closeBtn'),
    nextBtn: document.querySelector('.next'),
    previosBtn: document.querySelector('.previos'),
    blockLoad: document.querySelector('.load'),
    form: document.getElementById('js-search__form'),
    //header refs
    header: document.querySelector('header'),
    logo: document.querySelector('.nav__head'),
    homeBtn: document.querySelector('#home'),
    libraryBtn: document.querySelector('#library'),
    library: document.querySelector('.js-film__list'),
    searchForm: document.querySelector('.search__form'),
    searchInput: document.querySelector('.search__input'),
    libraryControls: document.querySelector('.btn'),
    watchedBtn: document.querySelector('#watched'),
    queueBtn: document.querySelector('#queue'),
    errorMsg: document.querySelector('.search__text'),
    // GENRE-MENU
    genre: document.getElementById('js__genre_menu'),
  };
}
