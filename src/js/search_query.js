import getRefs from './get-refs';
import renderCards from './renderCard';
import renderPagination from './pagination';

import { searchMovies, resetPage } from './fetchMoviesAPI';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const { error, info, notice } = require('@pnotify/core');

const refs = getRefs();

let value = null;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  value = e.currentTarget.elements.query.value.trim();
  if (!value) return onEmptySearch();
  resetPage();
  creatRequest(value);
});

async function creatRequest(value) {
  try {
    const getFilmList = await searchMovies(value);
    if (getFilmList.results.length === 0) return onInfo();
    renderPagination(getFilmList, 'search', value);
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
