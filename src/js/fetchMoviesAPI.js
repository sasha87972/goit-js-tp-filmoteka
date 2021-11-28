// console.log('hello world')
import FilmCard from '../templates/filmCard.hbs';
import FilmModalTpl from '../templates/filmModal.hbs';
import filmModalQueue from '../templates/filmModalQueue';
import filmModalWatched from '../templates/filmModalWatche';

import showErrorMsg from './search_query';
import errorUrl from '../images/no-poster.jpg';

import getRefs from './get-refs';

const refs = getRefs();

const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const GENRE_URL = `${BASE_URL}/genre/movie/list`;

let page = 1;

refs.nextBtn.addEventListener('click', loadNext);
refs.previosBtn.addEventListener('click', loadPrevios);
refs.homeBtn.addEventListener('click', setPage);
refs.logo.addEventListener('click', setPage);

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
  console.log('page next', page);
  incrementPage();
  getTrendMovies(page);
}

function loadPrevios() {
  console.log('page Previos', page);
  if (page <= 1) {
    return;
  }
  decrementPage();
  getTrendMovies(page);
}
// // fetch(`${ID_URL}3?api_key=${API_KEY}`).then(respons => {

// //     // console.log('1',respons.json())
// //     return respons.json()
// // }).then(movie => {
// //     console.log('1',movie);
// // })

// function getTrend(page) {
//     const REQUEST_ADRESS = `${TREND_URL}?api_key=${API_KEY}&page=${page}`;
//     return baseFetch(REQUEST_ADRESS)
// }

// function searchMovie(name) {
//     const REQUEST_ADRESS = `${SEARCH_URL}?api_key=${API_KEY}&query=${name}`
//     return baseFetch(REQUEST_ADRESS)
// }

// function renderParamsCard(id) {
//   const REQUEST_ADRESS = `${ID_URL}${id}?api_key=${API_KEY}`;
//   return baseFetch(REQUEST_ADRESS)
// }

// function genreMovie() {
//   const REQUEST_ADRESS = `${GENRE_URL}?api_key=${API_KEY}`;
//   return baseFetch(REQUEST_ADRESS);
// }

// function baseFetch(REQUEST_ADRESS) {
//   return fetch(REQUEST_ADRESS)
//     .then(response => {
//       // console.log('2',response.json())
//       return response.json();
//     }).then(movie =>

//         console.log('object',movie))

// }

// // renderParamsCard(3)

// // genreMovie()

// getTrend(1)

// // searchMovie('bad boy')

// OLD VERSION

// fetch(`${TREND_URL}?api_key=${API_KEY}&page=1`)
//   .then(responce => {
//     return responce.json();
//   })
//   .then(film => {
//     console.log('Film Data', film.results);
//     const films = FilmCard(film.results);
//     console.log(films);
//     insertMovies(films);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// function insertMovies(object) {
//   list.innerHTML = object;
// }

// fetch(`${GENRE_URL}?api_key=${API_KEY}`)
//   .then(responce => {
//     return responce.json();
//   })
//   .then(genr => {
//     console.log('GENRES', genr.genres);
//     return genr.genres
//   })
//   .catch(error => {
//     console.log(error);
//   })

// MY VERSION

// const list = document.querySelector('main');
let genreArr = [];
let genresList = [];

fetch(`${GENRE_URL}?api_key=${API_KEY}`)
  .then(responce => (genreArr = responce.json()))
  .then(genr => {
    genreArr = genr.genres;
    return genr.genres;
  })
  .catch(error => {
    console.log(error);
  });

function getTrendMovies() {
  fetch(`${TREND_URL}?api_key=${API_KEY}&page=${page}`)
    .then(responce => {
      return responce.json();
    })
    .then(film => {
      console.log('get trend page', page);
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
      movie.poster_path = poster;
    } else {
      let poster = `https://www.themoviedb.org/t/p/w500${movie.poster_path}`;
      movie.poster_path = poster;
    }
  });
}

function getDetailFilmInfo(id) {
  fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(responce => {
      return responce.json();
    })
    .then(film => {
      getGenreNames(film);
      getImage(film);
      const detailFilmInfo = film;
      localStorage.setItem('currentFilm', JSON.stringify(detailFilmInfo));

      // console.log('watched btn',refs.watchedBtn.classList);
      // console.log('qeue btn', refs.queueBtn.classList);
      if (refs.watchedBtn.classList.contains('header__btn--current')) {
        const filmInfo = filmModalQueue(film);
        refs.filmModalInfo.innerHTML = filmInfo;
        console.log('current watched');
        return;
      } else if (refs.queueBtn.classList.contains('header__btn--current')) {
        const filmInfo = filmModalWatched(film);
        refs.filmModalInfo.innerHTML = filmInfo;
        console.log('current queue');
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

export { getDetailFilmInfo, getGenreString, getYearString, getTrendMovies, getImages };
