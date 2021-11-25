import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const API = new MovieService();
const refs = getRefs();

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value.trim();
  const getFilmList = await API.searchMovies(value);

  try {
    if (value === '') return;

    await renderPage(getFilmList);
    refs.form.reset();
  } catch (error) {
    console.log('Search result not successful. Enter the correct movie name!');
  }
});

async function renderPage(card) {
  console.log(card);
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card.results));
}
