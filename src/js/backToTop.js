import smoothScrool from './smothScrool';
import getRefs from './get-refs';

const refs = getRefs();
window.addEventListener('scroll', trackScroll);
refs.goTopBtn.addEventListener('click', scrollingTop);

function trackScroll() {
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
