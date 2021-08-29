import menu from '../option/menu.hbs';
import constructor from '../menu.json';


const menuList = document.querySelector('.js-menu')
const markup = constructor(menu)
menuList.insertAdjacentHTML('afterbegin', markup)