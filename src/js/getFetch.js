export default class GetMovies {
  constructor() {
    this.page = 0;
    this.container;
    this.query;
    this.genre;
    this.type;
    this.key = '0556b87ba267edab76fd3e7e8d7e5097';

    const BASE_URL = 'https://api.themoviedb.org/3';
    this.SEARCH_URL = `${BASE_URL}/search/movie`;
    this.GENRE_URL = `${BASE_URL}/genre/movie/list`;
    this.TV_URL = `${BASE_URL}/genre/tv/list`;
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

  async getTrend() {
    const response = await fetch(`${this.TREND_URL}?api_key=${this.key}`);
    return await response.json();
  }

  nexPage() {
    this.page += 1;
  }

  renderMoviesList(template, moviesItem) {
    const creatList = template(moviesItem);
    this.container.insertAdjacentHTML('beforeend', creatList);
  }

  get querySearch() {
    return this.query;
  }
  set querySearch(query) {
    this.query = query;
  }

  // get container() {
  //   return this.container;
  // }
  // set container(container) {
  //   this.container = container;
  // }
}
