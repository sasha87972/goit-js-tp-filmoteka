// 1.Рассширить форму поиска
import FilmCard from '../templates/filmCard.hbs';
import getRefs from './get-refs';
import { getGenreString, getYearString, getImages } from './fetchMoviesAPI';

const refs = getRefs();

const inputRefs = document.getElementById('search__form');

const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';

const SEARCH_URL = `${BASE_URL}/search/movie`;

refs.form.addEventListener('submit', onHandlerInput);

function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}

async function onHandlerInput(e) {
  e.preventDefault();

  const search = e.currentTarget.elements.query.value;
  const getElements = await getMovie(search);
    console.log(getElements);
  const searchResults = getElements.results;
  if (search === '' || searchResults.length === 0) {
    showErrorMsg();
  }
  console.log(searchResults);
  getGenreString(searchResults);
  getYearString(searchResults);
  getImages(searchResults);
  renderPage(searchResults);
  console.log(searchResults);
  refs.form.reset();
}
function getMovie(query) {
    return fetch(`${SEARCH_URL}?api_key=${API_KEY}&query=${query}`).then(resp => resp.json()).catch(e => console.log(e));
}
export default function showErrorMsg() {
    refs.errorMsg.textContent = "Search result not successful. Enter the correct movie name!";
    setTimeout(clearErrorMsg, 5000);
}
function clearErrorMsg() {
  refs.errorMsg.textContent = " ";
}

