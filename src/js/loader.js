let hide = document.querySelector('.hide');

window.addEventListener('load', () => {
hide.classList.add('behind');
setTimeout(() =>  {
    hide.remove();
}, 3000);
});
