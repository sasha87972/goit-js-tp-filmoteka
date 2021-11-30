export default class GetMovies {
  constructor() {
    this.ImgName = 31;
    this.page = 0;
    this.query = '';
    this.itemMovies = '';
    this.genres_list = [];

    this.key = '0556b87ba267edab76fd3e7e8d7e5097';
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.GENRE_URL = `${this.BASE_URL}/genre/movie/list`;
    this.TV_URL = `${this.BASE_URL}/genre/tv/list`;
    this.ID_URL = `${this.BASE_URL}/movie/`;
    this.TREND_URL = `${this.BASE_URL}/trending/movie/week`;
    this.IMG_URL = 'https://www.themoviedb.org/t/p/w500';
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
}
