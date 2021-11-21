





// const imageLigthBoxRef = document.querySelector('.lightbox__image');
// const libraryRef = document.querySelector('.js-library');
// const ligthboxRef = document.querySelector('.js-lightbox');

// const createdPreviewLibrary = libraryItems.reduce((acc, img) => {
//   let imgEl = `<li class="library__item"><a class="library__link"><img src="${img.preview}" alt="${img.description}" class="library__image" ></a></li>`
//   return acc + imgEl
// }, '');

// libraryRef.insertAdjacentHTML('beforeend', createdPreviewLibrary);

// libraryRef.addEventListener('click', (e) => {
//     libraryItems.forEach((el) => {
//     if (e.target.alt === el.description) {
//         imageLigthBoxRef.src = el.original
//         imageLigthBoxRef.alt = el.description
//     }
//     ligthboxRef.classList.add('is-open')
// })})

// ligthboxRef.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'IMG') {
//     return
//     }
//     if (e.target.nodeName === 'BUTTON') {
//     ligthboxRef.classList.remove('is-open')
//     imageLigthBoxRef.src = '';
//     imageLigthBoxRef.alt = '';
//     console.log('кнопка')
//     return
//     }
//     if (e.target.nodeName === 'Escape') {
//     ligthboxRef.classList.remove('is-open')
//     imageLigthBoxRef.src = '';
//     imageLigthBoxRef.alt = '';
//     console.log('esc')
//     return
//     }
//     ligthboxRef.classList.remove('is-open')
//     imageLigthBoxRef.src = '';
//     imageLigthBoxRef.alt = '';
//     console.log('фон')
// })
