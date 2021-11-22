// 1.Рассширить форму поиска
import FilmCard from '../templates/filmCard.hbs';
import getRefs from './get-refs';

const refs = getRefs();

const inputRefs = document.getElementById('search__form');

const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';

const SEARCH_URL = `${BASE_URL}/search/movie`;

refs.form.addEventListener('submit', onHandlerInput);

function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card.results));
}

async function onHandlerInput(e) {
  e.preventDefault();

  const search = e.currentTarget.elements.query.value;
  const getElements = await getMovie(search);
  renderPage(getElements);
  refs.form.reset();
}

function getMovie(query) {
  return fetch(`${SEARCH_URL}?api_key=${API_KEY}&query=${query}`).then(resp => resp.json());
}