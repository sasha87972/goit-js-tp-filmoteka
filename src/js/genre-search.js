import MovieService from './getFetch';
import getRefs from './get-refs';
import itemList from '../templates/itemGenre.hbs';
import FilmCard from '../templates/filmCard.hbs';

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
      return arrID.find(item => item === Number(currentGenre));
    });

    renderPage(itemList);
  } catch (error) {
    console.log('Не удалось отобразить фильмы за даным жанром');
  }
}

function renderPage(card) {
  console.log(card);
  refs.films.innerHTML = '';
  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}
