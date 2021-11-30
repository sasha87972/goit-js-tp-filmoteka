import FilmCard from '../templates/FilmCard.hbs';
import getRefs from './get-refs';

import { getGenreString, getYearString, getImages } from './fetchMoviesAPI';

const refs = getRefs();

async function renderPage(card) {
  getGenreString(card);
  getYearString(card);
  getImages(card);
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}

export default renderPage;
