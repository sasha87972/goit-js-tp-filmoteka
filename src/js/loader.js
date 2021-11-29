import getRefs from './get-refs';

const refs = getRefs();

window.addEventListener('load', () => {
refs.hide.classList.add('behind');
setTimeout(() =>  {
    refs.hide.remove();
}, 3000);
});
