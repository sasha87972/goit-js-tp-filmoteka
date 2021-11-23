import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const API = new MovieService();
const refs = getRefs();

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value.trim();
  if (value === '') return;

  const getFilmList = await API.searchMovies(value);
  renderPage(getFilmList);
  refs.form.reset();
});

function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card.results));
}
