import MovieService from './getFetch';
import getRefs from './get-refs';
import FilmCard from '../templates/filmCard.hbs';

const API = new MovieService();
const refs = getRefs();
