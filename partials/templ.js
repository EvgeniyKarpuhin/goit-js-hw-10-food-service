import menu from '../option/options.hbs';
import constructor from '../../menu.json';


const menuList = document.querySelector('.js-menu')
const markup = constructor(menu)
menuList.insertAdjacentHTML('afterbegin', markup)