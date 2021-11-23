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

  async searchMovies() {
    const response = await fetch(`${this.SEARCH_URL}?api_key=${this.key}&query=${this.query}`);
    return await response.json();
  }

  async genreMovies() {
    const response = await fetch(`${this.GENRE_URL}?api_key=${this.key}`);
    return await response.json();
  }

  get querySearch() {
    return this.query;
  }

  set querySearch(query) {
    this.query = query;
  }
}
