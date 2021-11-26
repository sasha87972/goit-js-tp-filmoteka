import smoothScrool from './smothScrool';
import getRefs from './get-refs';

const refs = getRefs();
window.addEventListener('scroll', trackScroll);
refs.goTopBtn.addEventListener('click', scrollingTop);

function trackScroll() {
  // const scrolled = window.pageYOffset;
  // const coords = document.documentElement.clientHeight;

  // if (scrolled > coords) {
  //   refs.goTopBtn.classList.add('back_to_top-show');
  // }
  // if (scrolled < coords) {
  //   refs.goTopBtn.classList.remove('back_to_top-show');
  // }
  window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      refs.goTopBtn.classList.add('back_to_top-show');
    } else {
      refs.goTopBtn.classList.remove('back_to_top-show');
    }
  };
}

function scrollingTop(e) {
  e.preventDefault();
  smoothScrool(0, 400);
}
