export default function getRefs() {
  return {
    body: document.querySelector('body'),
    footerBtn: document.querySelector('.footer__button'),
    goTopBtn: document.querySelector('.back_to_top'),
    list: document.querySelector('.film__list'),
    films: document.querySelector('.film__list'),
    backdrop: document.querySelector('.lightbox__overlay'),
    filmModal: document.querySelector('.js-lightbox'),
    filmModalInfo: document.querySelector('.film-card'),
    closeModalBtn: document.querySelector('.closeBtn'),
  };
}
