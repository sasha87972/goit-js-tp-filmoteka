import FilmCard from '../templates/filmCard.hbs';
import getRefs from './get-refs';
import MovieService from './getFetch';

const API = new MovieService();
const refs = getRefs();

async function renderPage(card) {
  card.forEach(item => {
    if (API.ImgName <= item.poster_path.length)
      item.poster_path = `${API.IMG_URL}${item.poster_path}`;
  });
  refs.films.innerHTML = '';
  // API.genreList(card);

  refs.films.insertAdjacentHTML('beforeend', FilmCard(card));
}

export default renderPage;
