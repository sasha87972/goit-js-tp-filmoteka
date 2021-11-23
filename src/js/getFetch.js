export default class GetMovies {
  constructor(genre, type) {
    this.query;
    this.genre = genre;
    this.type = type;
    this.key = '0556b87ba267edab76fd3e7e8d7e5097';

    const BASE_URL = 'https://api.themoviedb.org/3';
    this.SEARCH_URL = `${BASE_URL}/search/movie`;
    this.GENRE_URL = `${BASE_URL}/genre/movie/list`;
    this.ID_URL = `${BASE_URL}/movie/`;
    this.TREND_URL = `${BASE_URL}/trending/movie/week`;
  }

  async searchMovies(query) {
    return fetch(`${this.SEARCH_URL}?api_key=${this.key}&query=${query}`).then(response =>
      response.json(),
    );
  }

  async genreMovies() {
    return fetch(`${this.GENRE_URL}`).then(resp => resp.json());
  }

  // get querySearch() {
  //   return this.query;
  // }

  // set querySearch(query) {
  //   console.log(query);
  //   this.query = query;
  // }
}
