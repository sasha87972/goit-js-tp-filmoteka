import Pagination from 'tui-pagination';
import { getTrendMovies, searchMovies, setPage } from './fetchMoviesAPI';
import renderPage from './renderCard';
import smoothScrool from './smothScrool';
import getRefs from './get-refs';

const refs = getRefs();

export default function renderPagination(result, query, value) {
  const container = refs.pagBox;
  const options = {
    totalItems: result.total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: result.page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const pagination = new Pagination(container, options);
  if (query === 'search') {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      setPage(currentPage);
      searchMovies(value).then(r => renderPage(r.results));
      smoothScrool(0, 400);
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      setPage(currentPage);
      getTrendMovies();
      smoothScrool(0, 400);
    });
  }
}
