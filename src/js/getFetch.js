export default class GetMovies {
  constructor() {
    this.ImgName = 31;
    this.page = 0;
    this.query = '';
    this.itemMovies = '';
    // this.template;
    this.genre_name = []; //Под вопросом
    // this.template;
    // this.container;

    this.key = '0556b87ba267edab76fd3e7e8d7e5097';
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.SEARCH_URL = `${this.BASE_URL}/search/movie`;
    this.GENRE_URL = `${this.BASE_URL}/genre/movie/list`;
    this.TV_URL = `${this.BASE_URL}/genre/tv/list`;
    this.ID_URL = `${this.BASE_URL}/movie/`;
    this.TREND_URL = `${this.BASE_URL}/trending/movie/week`;
    this.IMG_URL = 'https://www.themoviedb.org/t/p/w500';
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
    const response = await fetch(`${this.TREND_URL}?api_key=${this.key}&page=1`);
    return await response.json();
  }

  async searchGenre(list) {
    const genre = await this.genreMovies();
    const genres = await list.map(item => {
      const genreItem = genre.genres.find(id => id.id === item);
      return genreItem.name;
    });
    return genres;
  }

  async genreList(query) {
    query.forEach(async item => {
      const convert = await this.searchGenre(item.genre_ids);
      item.genre_string = convert.slice(0, 3).join(', ');
    });
  }
  nextPage() {
    this.page += 1;
  }
  set searchQuery(query) {
    this.query = query;
  }
  get searchQuery() {
    return this.query;
  }
}
