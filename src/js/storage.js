import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const refs = getRefs();
const watchedBtn = document.querySelector('.modalBtn__item--watchedBtn');
const queueBtn = document.querySelector('.modalBtn__item--queueBtn');


// localStorage.clear();


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
    // console.log('queue array', queue);
    // console.log(currentFilm);
    const id = currentFilm.id;
    const index = queue.findIndex(obj => obj.id === id);
    const newData = [
    ...queue.slice(0, index),
    ...queue.slice(index + 1)
]
   localStorage.setItem('filmQueue',JSON.stringify(newData))
    // console.log(newData);
  }
  else if (watchedBtnCurrent) {
    // console.log('watched array', watched);
    // console.log(currentFilm);
    const id = currentFilm.id;
    const index = watched.findIndex(obj => obj.id === id);
    const newData = [
    ...watched.slice(0, index),
    ...watched.slice(index + 1)
]
   localStorage.setItem('filmWatched',JSON.stringify(newData))
    // console.log(newData);
  }
}


function onWatchedLib() {
  console.log('click on watched');
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
  console.log('click on queue');
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

  // if (e.target.id === 'watched') {
  // console.log('target W', e.target.id);
  //   let watchedLib = JSON.parse(localStorage.getItem(e));
  //   console.log(watchedLib);
  //   const watchedFilmLib = FilmCard(watchedLib);
  //   console.log();
  //   refs.films.innerHTML = watchedFilmLib;
  // // }
  // if (e.target.id === 'queue') {
  //   console.log('target Q', e.target.id);
  //   let queueLib = JSON.parse(localStorage.getItem('filmQueue'));
  //   console.log(queueLib);
  //   const queueFilmLib = FilmCard(queueLib);
  //   console.log();
  //   refs.films.innerHTML = queueFilmLib;
  // }
}

export { onRemove, onWatchedLib, onQueueLib, generateLib };
