import MovieService from './getFetch';
import getRefs from './get-refs';
import itemList from '../templates/itemGenre.hbs';

const API = new MovieService();
const refs = getRefs();

refs.genre.addEventListener('click', async e => {
  e.preventDefault();

  const genreID = e.target.dataset.sources;

  const objList = await API.getTrend();

  await renderElements(objList.results, genreID);
});

async function renderElements(list, currentGenre) {
  console.log(list);
  console.log(currentGenre);
  const genre = await list.filter(item => item.genre_ids.includes(currentGenre));
  console.log(genre);
}
