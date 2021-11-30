export default function getRefs() {
  return {
    //API const
    API_KEY: '0556b87ba267edab76fd3e7e8d7e5097',
    BASE_URL: 'https://api.themoviedb.org/3',
    TREND_URL: `${BASE_URL}/trending/movie/week`,
    SEARCH_URL: `${BASE_URL}/search/movie`,
    ID_URL: `${BASE_URL}/movie/`,
    GENRE_URL: `${BASE_URL}/genre/movie/list`,
    // Main refs
    body: document.querySelector('body'),
    footerBtn: document.querySelector('.footer__button'),
    goTopBtn: document.querySelector('.back_to_top'),
    films: document.querySelector('.js-film__list'),
    backdrop: document.querySelector('.lightbox__overlay'),
    filmModal: document.querySelector('.js-lightbox'),
    filmModalInfo: document.querySelector('.film-card'),
    closeModalBtn: document.querySelector('.closeBtn'),
    nextBtn: document.querySelector('.next'),
    previousBtn: document.querySelector('.previous'),
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
    //loader
    hide: document.querySelector('.hide'),
    //color-switch
    themeToggle: document.getElementById('theme-switch-toggle'),
    footer: document.getElementById('footer'),
    footerBox: document.querySelector('.footer__box'),
    //movie modal
    modalQueBtn: document.querySelector('.modalBtn__item--queueBtn'),
    modalRemBtn: document.querySelector('.modalBtn__item--remove'),
    modalWatBtn: document.querySelector('.modalBtn__item--watchedBtn'),
    // GENRE-MENU
    genreHead: document.querySelector('.genre'),
    genre: document.getElementById('js__genre_menu'),
    //MAIN-MENU
    noFilm: document.querySelector('.pager__text'),
  };
}
