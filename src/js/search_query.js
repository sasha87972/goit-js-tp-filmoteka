// 1.Рассширить форму поиска
import FilmCard from '../templates/filmCard.hbs';
import getRefs from './get-refs';
import { getGenreString, getYearString, getImages } from './fetchMoviesAPI';
import smoothScrool from './smothScrool';

const refs = getRefs();

const inputRefs = document.getElementById('search__form');

const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';

const SEARCH_URL = `${BASE_URL}/search/movie`;

refs.form.addEventListener('submit', onHandlerInput);

let page = 1;

function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}
let search = null;
async function onHandlerInput(e) {
  e.preventDefault();

  search = e.currentTarget.elements.query.value;
  const getElements = await getMovie(search);
    console.log(getElements);
  const searchResults = getElements.results;
  if (search === '' || searchResults.length === 0) {
    showErrorMsg();
  }
  refs.nextBtn.addEventListener('click', loadSearchNext);
  refs.previousBtn.addEventListener('click', loadSearchPrevious);
  console.log(searchResults);
  getGenreString(searchResults);
  getYearString(searchResults);
  getImages(searchResults);
  renderPage(searchResults);
  console.log(searchResults);
  refs.form.reset();
}
function getMovie(query,page) {
    return fetch(`${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`).then(resp => resp.json()).catch(e => console.log(e));
}
export default function showErrorMsg() {
    refs.errorMsg.textContent = "Search result not successful. Enter the correct movie name!";
    setTimeout(clearErrorMsg, 5000);
}
function clearErrorMsg() {
  refs.errorMsg.textContent = " ";
}

function incrementPage() {
  return (page += 1);
}

function decrementPage() {
  return (page -= 1);
}

function loadSearchNext() {
  
  refs.previousBtn.classList.remove('hidden');
  smoothScrool(0, 400);
  incrementPage();
  
  const r = getMovie(search, page)
    .then(movi => {
      const param = movi.results;
      getGenreString(param);
  getYearString(param);
  getImages(param);
  renderPage(param);
    })
  
}

function loadSearchPrevious() {
  
  if (page <= 2) {
    refs.previousBtn.classList.add('hidden');
  }
  decrementPage();
  smoothScrool(0, 400);

  const r = getMovie(search, page)
    .then(movi => {
      const param = movi.results;
      getGenreString(param);
  getYearString(param);
  getImages(param);
  renderPage(param);
    })
}

function removeEvent() {
  refs.nextBtn.removeEventListener('click', loadSearchNext);
  refs.previousBtn.removeEventListener('click', loadSearchPrevious);
}

refs.homeBtn.addEventListener('click', removeEvent);
refs.logo.addEventListener('click', removeEvent);