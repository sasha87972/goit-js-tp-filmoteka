export default class GetMovies {
  constructor(genre, type) {
    this.query;
    this.genre = genre;
    this.type = type;
    this.key = '0556b87ba267edab76fd3e7e8d7e5097';

    const BASE_URL = 'https://api.themoviedb.org/3';
    this.SEARCH_URL = `${BASE_URL}/search/movie`;
    const GENRE_URL = `${BASE_URL}/genre/movie/list`;
    const ID_URL = `${BASE_URL}/movie/`;
    const TREND_URL = `${BASE_URL}/trending/movie/week`;
  }

  async searchMovies(query) {
    return fetch(`${this.SEARCH_URL}?api_key=${this.key}&query=${query}`).then(response =>
      response.json(),
    );
  }

  // get querySearch() {
  //   return this.query;
  // }

  // set querySearch(query) {
  //   console.log(query);
  //   this.query = query;
  // }
}
