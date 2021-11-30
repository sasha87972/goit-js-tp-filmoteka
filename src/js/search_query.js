import getRefs from './get-refs';
import renderCards from './renderCard';
import smoothScrool from './smothScrool';

import { searchMovies, getGenreString, getYearString, getImages } from './fetchMoviesAPI';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const { error, info, notice } = require('@pnotify/core');

const refs = getRefs();
let page = 1;

let value = null;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  value = e.currentTarget.elements.query.value.trim();
  if (!value) return onEmptySearch();
  creatRequest(value);
});

async function creatRequest(value) {
  try {
    const getFilmList = await searchMovies(value);
    if (getFilmList.results.length === 0) return onInfo();
    refs.nextBtn.addEventListener('click', loadSearchNext);
    refs.previousBtn.addEventListener('click', loadSearchPrevious);
    refs.previousBtn.classList.add('visually-hidden');
    renderCards(getFilmList.results);
    refs.form.reset();
  } catch (error) {
    onError();
  }
}

function onError() {
  return error({
    text: 'Search result not successful. Enter the correct movie name!',
    type: 'Error',
    delay: 2000,
  });
}
function onInfo() {
  return info({
    text: 'Sorry, but no such movie was found.',
    type: 'info',
    delay: 2000,
  });
}
function onEmptySearch() {
  return notice({
    text: 'What do you want to watch?',
    type: 'info',
    delay: 2000,
  });
}

function incrementPage() {
  return (page += 1);
}

function decrementPage() {
  return (page -= 1);
}

function loadSearchNext() {
  refs.previousBtn.classList.remove('visually-hidden');
  smoothScrool(0, 400);
  incrementPage();

  const r = searchMovies(value, page).then(movi => {
    const param = movi.results;
    getGenreString(param);
    getYearString(param);
    getImages(param);
    renderCards(param);
  });
}

function loadSearchPrevious() {
  if (page <= 2) {
    refs.previousBtn.classList.add('visually-hidden');
  }
  decrementPage();
  smoothScrool(0, 400);

  const r = searchMovies(value, page).then(movi => {
    const param = movi.results;
    getGenreString(param);
    getYearString(param);
    getImages(param);
    renderCards(param);
  });
}

function removeEvent() {
  refs.nextBtn.removeEventListener('click', loadSearchNext);
  refs.previousBtn.removeEventListener('click', loadSearchPrevious);
}

refs.homeBtn.addEventListener('click', removeEvent);
refs.logo.addEventListener('click', removeEvent);
