import { getTrend } from './fetchMoviesAPI';
import renderCards from './renderCard';
import getRefs from './get-refs';

const refs = getRefs();

refs.genre.addEventListener('click', async e => {
  e.preventDefault();
  if (e.target.nodeName != 'BUTTON') return;

  const genreID = e.target.dataset.sources;
  const objList = await getTrend();
  await renderElements(objList.results, genreID);
});

async function renderElements(list, currentGenre) {
  try {
    refs.films.innerHTML = '';
    const itemList = await list.filter(i => {
      const arrID = i.genre_ids;
      const chooseGenre = arrID.find(item => item == currentGenre);
      return chooseGenre;
    });
    renderCards(itemList);
  } catch (error) {
    console.log(error);
  }
}
