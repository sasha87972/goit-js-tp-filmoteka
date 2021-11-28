import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/genreCard.hbs';

const API = new MovieService();
const refs = getRefs();

refs.genre.addEventListener('click', async e => {
  e.preventDefault();

  const genreID = e.target.dataset.sources;
  const objList = await API.getTrend();

  await renderElements(objList.results, genreID);
});

async function renderElements(list, currentGenre) {
  try {
    const itemList = await list.filter(i => {
      const arrID = i.genre_ids;
      const chooseGenre = arrID.find(item => item === Number(currentGenre));

      return chooseGenre;
    });

    renderPage(itemList);
  } catch (error) {
    console.log(error);
  }
}

function renderPage(card) {
  console.log(card);
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}
