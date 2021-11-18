// console.log('hello world')

const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const GENRE_URL = `${BASE_URL}/genre/movie/list`;


// fetch(`${ID_URL}3?api_key=${API_KEY}`).then(respons => {

//     // console.log('1',respons.json())
//     return respons.json()
// }).then(movie => {
//     console.log('1',movie);
// })

function getTrend(page) {
    const REQUEST_ADRESS = `${TREND_URL}?api_key=${API_KEY}&page=${page}`;
    return baseFetch(REQUEST_ADRESS)
}

function searchMovie(name) {
    const REQUEST_ADRESS = `${SEARCH_URL}?api_key=${API_KEY}&query=${name}`
    return baseFetch(REQUEST_ADRESS)
}

function renderParamsCard(id) {
  const REQUEST_ADRESS = `${ID_URL}${id}?api_key=${API_KEY}`;
  return baseFetch(REQUEST_ADRESS)
}

function genreMovie() {
  const REQUEST_ADRESS = `${GENRE_URL}?api_key=${API_KEY}`;
  return baseFetch(REQUEST_ADRESS);
}



function baseFetch(REQUEST_ADRESS) {
  return fetch(REQUEST_ADRESS)
      .then(response => {
        // console.log('2',response.json())
          return response.json();
      }).then(movie =>
        console.log('object',movie))
}

renderParamsCard(3)

genreMovie()

getTrend(1)

searchMovie('bad boy')

