import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';
import { getGenreString, getYearString, getImages } from './fetchMoviesAPI';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const { alert, error } = require('@pnotify/core');

const API = new MovieService();
const refs = getRefs();

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value.trim();

  try {
    if (value === '') return;
    API.searchQuery = value;
    const getFilmList = await API.searchMovies(value);

    if (getFilmList.results.length === 0) {
      return onInfo();
    }

    await renderPage(getFilmList);
    refs.form.reset();
  } catch (error) {
    onError();
  }
});

async function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card.results));
}

function onError() {
  return error({
    text: 'Search result not successful. Enter the correct movie name!',
    type: 'Error',
    delay: 1500,
  });
}

function onInfo() {
  return alert({
    text: 'Sorry, but no such movie was found.',
    type: 'info',
    delay: 1500,
  });
}
