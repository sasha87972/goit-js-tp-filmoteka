import { genreMovies } from './fetchMoviesAPI';
import getRefs from './get-refs';
import itemList from '../templates/btnGenre.hbs';

const refs = getRefs();

(async function renderMenuGenre() {
  try {
    const genre = await genreMovies();
    await renderGenreList(genre);
  } catch (error) {
    console.log(error);
  }
})();

async function renderGenreList({ genres }) {
  const item = genres.map(item => itemList({ item }));
  refs.genre.insertAdjacentHTML('beforeend', item.join(''));
}
