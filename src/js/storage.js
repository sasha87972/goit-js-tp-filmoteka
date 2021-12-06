import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const refs = getRefs();

let watched = JSON.parse(localStorage.getItem('filmWatched'));
let queue = JSON.parse(localStorage.getItem('filmQueue'));
if (!watched) {
  watched = [];
}
if (!queue) {
  queue = [];
}
function onRemove() {
  const queueBtnCurrent = refs.queueBtn.classList.contains('header__btn--current');
  const watchedBtnCurrent = refs.watchedBtn.classList.contains('header__btn--current');

  let currentFilm = JSON.parse(localStorage.getItem('currentFilm'));
  let watched = JSON.parse(localStorage.getItem('filmWatched'));
  let queue = JSON.parse(localStorage.getItem('filmQueue'));

  if (queueBtnCurrent) {
    const id = currentFilm.id;
    const index = queue.findIndex(obj => obj.id === id);
    const newData = [...queue.slice(0, index), ...queue.slice(index + 1)];
    localStorage.setItem('filmQueue', JSON.stringify(newData));
  } else if (watchedBtnCurrent) {
    const id = currentFilm.id;
    const index = watched.findIndex(obj => obj.id === id);
    const newData = [...watched.slice(0, index), ...watched.slice(index + 1)];
    localStorage.setItem('filmWatched', JSON.stringify(newData));
  }
}

function onWatchedLib() {
  onRemove();
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
  onRemove();
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
  return JSON.parse(localStorage.getItem(e));
}

export { onRemove, onWatchedLib, onQueueLib, generateLib };
