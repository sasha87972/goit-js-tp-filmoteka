import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const refs = getRefs();
const watchedBtn = document.querySelector('.modalBtn__item--watchedBtn');
const queueBtn = document.querySelector('.modalBtn__item--queueBtn');

let watched = JSON.parse(localStorage.getItem('filmWatched'));
let queue = JSON.parse(localStorage.getItem('filmQueue'));
if (!watched) {
  watched = [];
}
if (!queue) {
  queue = [];
}

function onWatchedLib() {
  let currentFilm = JSON.parse(localStorage.getItem('currentFilm'));
  let watched = JSON.parse(localStorage.getItem('filmWatched'));
  if (!watched) {
    watched = [];
  }
  let inStorage = [...watched];
  for (let i = 0; i < inStorage.length; i++) {
    if (inStorage[i].id === currentFilm.id) {
      return watched;
    }
  }
  watched.push(currentFilm);
  localStorage.setItem('filmWatched', JSON.stringify(watched));
}

function onQueueLib() {
  let currentFilm = JSON.parse(localStorage.getItem('currentFilm'));
  let queue = JSON.parse(localStorage.getItem('filmQueue'));
  if (!queue) {
    queue = [];
  }
  let inStorage = [...queue];
  for (let i = 0; i < inStorage.length; i++) {
    if (inStorage[i].id === currentFilm.id) {
      return queue;
    }
  }
  queue.push(currentFilm);
  localStorage.setItem('filmQueue', JSON.stringify(queue));
}
function generateLib(e) {
  if (e.target.id === 'watched') {
    let watchedLib = JSON.parse(localStorage.getItem('filmWatched'));
    console.log(watchedLib);
    const watchedFilmLib = FilmCard(watchedLib);
    console.log();
    refs.films.innerHTML = watchedFilmLib;
  }
  if (e.target.id === 'queue') {
    let queueLib = JSON.parse(localStorage.getItem('filmQueue'));
    console.log(queueLib);
    const queueFilmLib = FilmCard(queueLib);
    console.log();
    refs.films.innerHTML = queueFilmLib;
  }
}

export { onWatchedLib, onQueueLib, generateLib };
