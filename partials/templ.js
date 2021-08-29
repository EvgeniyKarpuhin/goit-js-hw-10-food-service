import constructor from '../option/menu.hbs';
import menu from '../menu.json';


const menuList = document.querySelector('.js-menu');
const markup = constructor(menu);
menuList.insertAdjacentHTML('afterbegin', markup);