import { generateLib } from './storage';
import FilmCard from '../templates/filmCard.hbs';
import { getTrendMovies,setPage } from './fetchMoviesAPI';
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
  refs.blockLoad.classList.remove('hidden');
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
  refs.blockLoad.classList.add('hidden');
  
  // console.log(generateLib())
  
  openWatched();
  // openQueue();

  // let wLib = JSON.parse(localStorage.getItem('filmWatched'));
  // let qLib = JSON.parse(localStorage.getItem('filmQueue'));

  // // console.log('wLib', wLib);
  // // console.log('qLib', qLib);
  // // let lib = [...wLib, ...qLib];
  // renderLib(wLib);
  // renderLib(qLib);

  // let lib = [...renderLib(wLib),...renderLib(qLib)];
  // console.log('lib', lib);
  // if (lib.length === 0) {
  //   console.log('is empty')
  // }
  // const watchedFilmLib = FilmCard(lib);
  // refs.library.innerHTML = watchedFilmLib;
  
}

function openWatched() {
// console.log('click on watched')
  refs.watchedBtn.classList.add('header__btn--current');
  refs.queueBtn.classList.remove('header__btn--current');
  
    let wLib = JSON.parse(localStorage.getItem('filmWatched'));
    renderLib(wLib);

  let lib = [...renderLib(wLib)];
  // console.log('lib', lib);
  if (lib.length === 0) {
    console.log('is empty')
  }
  const watchedFilmLib = FilmCard(lib);
  refs.library.innerHTML = watchedFilmLib;
}

function openQueue() {
  // console.log('click on queue')
  
  refs.queueBtn.classList.add('header__btn--current');
  refs.watchedBtn.classList.remove('header__btn--current');

  let qLib = JSON.parse(localStorage.getItem('filmQueue'));
  renderLib(qLib);

  let lib = [...renderLib(qLib)];
  // console.log('lib', lib);
  if (lib.length === 0) {
    console.log('is empty')
  }
  const watchedFilmLib = FilmCard(lib);
  refs.library.innerHTML = watchedFilmLib;
}

function renderLib(data) {
    if (data === null) {
      // console.log('null', data = []);
      return data = [];
    } else {
      // console.log('not null', data);
      return data
    }
  }

