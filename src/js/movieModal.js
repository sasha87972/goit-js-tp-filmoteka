import { getDetailInfo } from './fetchMoviesAPI';
import getRefs from './get-refs';

const refs = getRefs();
let filmId = null;

refs.films.addEventListener('click', onModalOpen);
refs.backdrop.addEventListener('click', onBackDropClick);

function onModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') {
    return;
  }
  filmId = e.target.parentNode.parentNode.getAttribute('id');
  getDetailInfo(filmId);
  refs.body.classList.add('modal-open');
  refs.filmModal.classList.add('is-open');
  refs.closeModalBtn.addEventListener('click', onModalClose);
  window.addEventListener('keydown', onKeyPress);
}
function onModalClose(e) {
  filmId = null;
  refs.filmModalInfo.innerHTML = '';
  refs.body.classList.remove('modal-open');
  refs.filmModal.classList.remove('is-open');
}
function onKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}
function onBackDropClick(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}
