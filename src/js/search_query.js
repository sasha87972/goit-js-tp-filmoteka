// 1.Рассширить форму поиска
import FilmCard from '../templates/filmCard.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const { alert, error } = require('@pnotify/core');

import getRefs from './get-refs';
import { getGenreString, getYearString, getImages } from './fetchMoviesAPI';


const refs = getRefs();

const inputRefs = document.getElementById('search__form');


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


const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';

const SEARCH_URL = `${BASE_URL}/search/movie`;

refs.form.addEventListener('submit', onHandlerInput);


async function renderPage(card) {
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
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


