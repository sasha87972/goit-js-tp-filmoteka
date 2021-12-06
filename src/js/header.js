import { generateLib } from './storage';
import FilmCard from '../templates/filmCard.hbs';
import { getTrendMovies, getYearString } from './fetchMoviesAPI';
import getRefs from './get-refs';

const refs = getRefs();

refs.libraryBtn.addEventListener('click', switchToLib);
refs.logo.addEventListener('click', switchToHome);
refs.homeBtn.addEventListener('click', switchToHome);
refs.watchedBtn.addEventListener('click', openWatched);
refs.queueBtn.addEventListener('click', openQueue);

function switchToHome() {
  refs.libraryBtn.classList.remove('nav__item--curent');
  refs.homeBtn.classList.add('nav__item--curent');
  refs.header.classList.replace('header--library', 'header--home');
  refs.library.classList.remove('library');
  refs.searchForm.classList.remove('visually-hidden');
  refs.libraryControls.classList.add('visually-hidden');
  refs.logo.classList.add('header--home');
  refs.watchedBtn.classList.remove('header__btn--current');
  refs.queueBtn.classList.remove('header__btn--current');
  refs.blockLoad.classList.remove('visually-hidden');
  refs.previousBtn.classList.add('visually-hidden');
  refs.genreHead.classList.remove('visually-hidden');
  refs.noFilm.classList.add('visually-hidden');
  getTrendMovies();
}

function switchToLib() {
  refs.libraryBtn.classList.add('nav__item--curent');
  refs.homeBtn.classList.remove('nav__item--curent');
  refs.header.classList.replace('header--home', 'header--library');
  refs.library.classList.add('library');
  refs.searchForm.classList.add('visually-hidden');
  refs.libraryControls.classList.remove('visually-hidden');
  refs.libraryControls.addEventListener('click', generateLib);
  refs.blockLoad.classList.add('visually-hidden');
  refs.genreHead.classList.add('visually-hidden');
  refs.noFilm.classList.remove('visually-hidden');
  openWatched();
}

function openWatched() {
  refs.watchedBtn.classList.add('header__btn--current');
  refs.queueBtn.classList.remove('header__btn--current');

  let wLib = JSON.parse(localStorage.getItem('filmWatched'));
  renderLib(wLib);

  let lib = [...renderLib(wLib)];
  if (lib.length === 0) {
    refs.noFilm.textContent = 'Список фільмів порожній';
  } else {
    refs.noFilm.textContent = '';
  }
  getYearString(lib);
  const watchedFilmLib = FilmCard(lib);
  refs.library.innerHTML = watchedFilmLib;
}

function openQueue() {
  refs.queueBtn.classList.add('header__btn--current');
  refs.watchedBtn.classList.remove('header__btn--current');

  let qLib = JSON.parse(localStorage.getItem('filmQueue'));
  renderLib(qLib);

  let lib = [...renderLib(qLib)];
  if (lib.length === 0) {
    refs.noFilm.textContent = 'Список фільмів порожній';
  } else {
    refs.noFilm.textContent = '';
  }
  getYearString(lib);
  const watchedFilmLib = FilmCard(lib);
  refs.library.innerHTML = watchedFilmLib;
}

function renderLib(data) {
  if (data === null) {
    return (data = []);
  } else {
    return data;
  }
}
