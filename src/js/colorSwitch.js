import '../sass/layout/_colorSwitch.scss';
import getRefs from './get-refs';

const refs = getRefs();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Footer = {
  LIGHT: 'footer__theme--light',
  DARK: 'footer__theme--dark',
};

function changeMainTheme(element, newClass, oldClass) {
  element.classList.add(newClass);
  element.classList.remove(oldClass);
}

refs.themeToggle.addEventListener('click', onToggleClick);

function onToggleClick(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    changeMainTheme(refs.body, Theme.DARK, Theme.LIGHT);
    changeMainTheme(refs.footer, Footer.DARK, Footer.LIGHT);
    changeMainTheme(refs.filmModalInfo, Theme.DARK, Theme.LIGHT);

    localStorage.setItem('bodyTheme', Theme.DARK);
    refs.themeToggle.checked = true;
  } else {
    changeMainTheme(refs.body, Theme.LIGHT, Theme.DARK);
    changeMainTheme(refs.footer, Footer.LIGHT, Footer.DARK);
    changeMainTheme(refs.filmModalInfo, Theme.LIGHT, Theme.DARK);

    localStorage.setItem('bodyTheme', Theme.LIGHT);
    refs.themeToggle.checked = false;
  }
}

checkBodyTheme();

function checkBodyTheme() {
  const currentThemeMod = localStorage.getItem('bodyTheme');
  if (currentThemeMod === Theme.DARK) {
    changeMainTheme(refs.body, Theme.DARK, Theme.LIGHT);
    changeMainTheme(refs.footer, Footer.DARK, Footer.LIGHT);
    changeMainTheme(refs.filmModalInfo, Theme.DARK, Theme.LIGHT);

    localStorage.setItem('bodyTheme', Theme.DARK);
    refs.themeToggle.checked = true;
  }
  if (currentThemeMod === Theme.LIGHT) {
    changeMainTheme(refs.body, Theme.LIGHT, Theme.DARK);
    changeMainTheme(refs.footer, Footer.LIGHT, Footer.DARK);
    changeMainTheme(refs.filmModalInfo, Footer.LIGHT, Footer.DARK);

    localStorage.setItem('bodyTheme', Theme.LIGHT);
    refs.themeToggle.checked = false;
  }
}

export { changeMainTheme };
