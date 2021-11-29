export default class GetMovies {
  constructor() {
    this.page = 0;
    this.query = '';
    this.key = '0556b87ba267edab76fd3e7e8d7e5097';

    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.SEARCH_URL = `${this.BASE_URL}/search/movie`;
    this.GENRE_URL = `${this.BASE_URL}/genre/movie/list`;
    this.TV_URL = `${this.BASE_URL}/genre/tv/list`;
    this.ID_URL = `${this.BASE_URL}/movie/`;
    this.TREND_URL = `${this.BASE_URL}/trending/movie/week`;
  }

  async searchMovies(query) {
    const response = await fetch(`${this.SEARCH_URL}?api_key=${this.key}&query=${query}`);
    return await response.json();
  }

  async genreMovies() {
    const response = await fetch(`${this.GENRE_URL}?api_key=${this.key}`);
    return await response.json();
  }

  async getTrend() {
    const response = await fetch(`${this.TREND_URL}?api_key=${this.key}&page=1`);
    return await response.json();
  }

  nexPage() {
    this.page += 1;
  }

  renderMoviesList(template, moviesItem) {
    const creatList = template(moviesItem);
    this.container.insertAdjacentHTML('beforeend', creatList);
  }

  set searchQuery(query) {
    this.query = query;
  }
  get searchQuery() {
    return this.query;
  }
}
