export default class GetMovies {
  constructor() {
    this.ImgName = 31;
    this.page = 0;
    this.query = '';
    this.itemMovies = '';
    this.genres_list = [];

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
    const response = await fetch(`${this.GENRE_URL}?api_key=${this.key}`).then(res => res.json());
    this.genres_list = response.genres;
    return await response;
  }

  async getTrend() {
    const response = await fetch(`${this.TREND_URL}?api_key=${this.key}&page=1`);
    return await response.json();
  }

  async searchGenre(list) {
    const genres = await list.map(item => {
      this.genres_list.find(id => id.id === item);
      console.log(this.genres_list.name);
      // this.genre_name.push(this.genres_list.name);
    });
    return genres;
  }

  async genreList(query) {
    query.forEach(async item => {
      await this.searchGenre(item.genre_ids);
      // item.genre_string = await this.genre_name.slice(0, 3).join(', ');
      this.genre_name = [];
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
