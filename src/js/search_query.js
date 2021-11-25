import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const API = new MovieService();
const refs = getRefs();

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value.trim();
  try {
    if (value === '') return;
    // await API.querySearch(value);
    const getFilmList = await API.searchMovies(value);
    renderPage(getFilmList);
    refs.form.reset();
  } catch (error) {
    console.log('Search result not successful. Enter the correct movie name!');
  }
});

function renderPage(card) {
  console.log(card);
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card.results));
}
