import constructor from '../option/menu.json';
import menu from '../option/options.hbs;'

const menuList = document.querySelector('.js-menu')
const markup = constructor(menu)
menuList.insertAdjacentHTML('afterbegin', markup)