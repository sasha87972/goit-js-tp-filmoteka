import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';
import itemList from '../templates/itemGenre.hbs';

const API = new MovieService();
const refs = getRefs();

async function renderMenuGenre() {
  const genre = await API.genreMovies();

  await element(genre);
  const value = await Object.values(genre);
  //   console.log(value);
  //   await value.map(i => console.log('obj', i));
  //   await genre.forEach(i => console.log(i));
}

async function element({ genres }) {
  console.log(genres);
  const item = genres.map(i => itemList({ i }));
  refs.genre.insertAdjacentHTML('beforeend', item.join(''));
  //   list.map(i => console.log({ genres }));
}

renderMenuGenre();
