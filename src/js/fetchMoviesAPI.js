import FilmCard from '../templates/filmCard.hbs';
import FilmModalTpl from '../templates/filmModal.hbs';
import filmModalQueue from '../templates/filmModalQueue';
import filmModalWatched from '../templates/filmModalWatche';
import smoothScrool from './smothScrool';

import showErrorMsg from './search_query';
import errorUrl from '../images/no-poster.jpg';

import getRefs from './get-refs';

const refs = getRefs();

let page = 1;
refs.previousBtn.classList.add('visually-hidden');

refs.nextBtn.addEventListener('click', loadNext);
refs.previousBtn.addEventListener('click', loadPrevious);
refs.homeBtn.addEventListener('click', setPage);
refs.logo.addEventListener('click', setPage);

async function searchMovies(query, page) {
  const response = await fetch(
    `${refs.SEARCH_URL}?api_key=${refs.API_KEY}&query=${query}&page=${page}`,
  );
  return await response.json();
}

async function getTrend() {
  const response = await fetch(`${refs.TREND_URL}?api_key=${refs.API_KEY}&page=1`);
  return await response.json();
}

async function genreMovies() {
  const response = await fetch(`${refs.GENRE_URL}?api_key=${refs.API_KEY}`);
  return await response.json();
}

function setPage() {
  return (page = 1);
}

function incrementPage() {
  return (page += 1);
}

function decrementPage() {
  return (page -= 1);
}

function loadNext() {
  refs.previousBtn.classList.remove('visually-hidden');
  smoothScrool(0, 400);
  incrementPage();
  getTrendMovies(page);
}

function loadPrevious() {
  if (page <= 2) {
    refs.previousBtn.classList.add('visually-hidden');
  }
  decrementPage();
  smoothScrool(0, 400);
  getTrendMovies(page);
}

let genreArr = [];
let genresList = [];

fetch(`${refs.GENRE_URL}?api_key=${refs.API_KEY}`)
  .then(responce => (genreArr = responce.json()))
  .then(genr => {
    genreArr = genr.genres;
    return genr.genres;
  })
  .catch(error => {
    console.log(error);
  });

function getTrendMovies() {
  fetch(`${refs.TREND_URL}?api_key=${refs.API_KEY}&page=${page}`)
    .then(responce => {
      return responce.json();
    })
    .then(film => {
      const trendMovies = film.results;
      getGenreString(trendMovies);
      getYearString(trendMovies);
      getImages(trendMovies);
      const films = FilmCard(trendMovies);
      insertMovies(films);
    })
    .catch(error => {
      console.log(error);
    });
}
function insertMovies(object) {
  refs.films.innerHTML = object;
}
function getGenreString(moviesArr) {
  if (!moviesArr) {
    showErrorMsg();
  } else {
    moviesArr.forEach(movie => {
      movie.genre_ids.forEach(genId => {
        const genreItem = genreArr.find(i => i.id === genId);
        genId = genreItem.name;
        genresList.push(genId);
      });
      let genreOutput = genresList.slice(0, 3);
      movie.genre_string = genreOutput.join(', ');
      genresList = [];
    });
  }
}
function getYearString(moviesArr) {
  if (!moviesArr) {
    showErrorMsg();
  } else {
    moviesArr.forEach(movie => {
      if (!isNaN(movie.release_date)) {
        movie.release_date = '';
      } else {
        movie.release_date = new Date(movie.release_date).getFullYear();
        return movie.release_date;
      }
    });
  }
}
function getImages(moviesArr) {
  moviesArr.forEach(movie => {
    if (movie.poster_path === null) {
      let poster = `${errorUrl}`;
      movie.poster = poster;
    } else {
      let poster = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
      movie.poster = poster;
    }
  });
}

function getDetailFilmInfo(id) {
  fetch(`${refs.ID_URL}${id}?api_key=${refs.API_KEY}`)
    .then(responce => {
      return responce.json();
    })
    .then(film => {
      getGenreNames(film);
      getImage(film);
      const detailFilmInfo = film;
      localStorage.setItem('currentFilm', JSON.stringify(detailFilmInfo));
      if (refs.watchedBtn.classList.contains('header__btn--current')) {
        const filmInfo = filmModalQueue(film);
        refs.filmModalInfo.innerHTML = filmInfo;
        return;
      } else if (refs.queueBtn.classList.contains('header__btn--current')) {
        const filmInfo = filmModalWatched(film);
        refs.filmModalInfo.innerHTML = filmInfo;
        return;
      }
      const filmInfo = FilmModalTpl(film);
      refs.filmModalInfo.innerHTML = filmInfo;
    })
    .catch(error => {
      console.log(error);
    });
}

function getGenreNames(film) {
  film.genres.forEach(genre => {
    const genreItem = genre.name;
    genresList.push(genreItem);
  });
  let genreOutput = genresList.slice(0, 3);
  film.genre_string = genreOutput.join(', ');
  genresList = [];
}
function getImage(film) {
  if (film.poster_path === null) {
    let poster = `${errorUrl}`;
    film.poster_path = poster;
  } else {
    let poster = `https://www.themoviedb.org/t/p/w500${film.poster_path}`;
    film.poster_path = poster;
  }
}
getTrendMovies();

export {
  getDetailFilmInfo,
  getGenreString,
  getYearString,
  getTrendMovies,
  getImages,
  searchMovies,
  getTrend,
  genreMovies,
};
