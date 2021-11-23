import getRefs from './get-refs';

const refs = getRefs();

let filmId = null;
let watched = [];
let queue = [];

refs.films.addEventListener('click', onModalOpen)
localStorage.clear();

function onModalOpen(e) {
    e.preventDefault();
    if (e.target.nodeName === 'UL') {
        return;
    }
    filmId = e.target.parentNode.parentNode.getAttribute('id');
    // console.log('filmid', filmId);
    delay(500)
    .then(() => {
        const w = document.querySelector('.modalBtn__item--watchedBtn');
        w.addEventListener('click', addToWatched);
        })
        .then(() => {
            const q = document.querySelector('.modalBtn__item--queueBtn');
            q.addEventListener('click', addToQueue);
        })
}

function addToQueue() {
    if (!queue.includes(filmId)) {
        queue.push(filmId);
        localStorage.setItem('Queue', JSON.stringify({ queue }));
        console.log('Queue', queue);
    }
    else {
        getQueueList();
        console.log('already have')
    }
}

function addToWatched() {
    if (!watched.includes(filmId)) {
        watched.push(filmId);
        localStorage.setItem('Watched', JSON.stringify({ watched }));
        console.log('Watched', watched);
    }
    else {
        getQueueList();
        console.log('already have')
    }
}

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

function getQueueList() {
    const dataStorage = localStorage.getItem('Queue');
    console.log('parse data',JSON.parse(dataStorage));
}

