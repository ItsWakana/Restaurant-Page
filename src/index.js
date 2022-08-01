import {initialPageLoad} from './pageLoad';
import {menuPage} from './menu';
import {homePage} from './home';
import {contactPage} from './contact';

window.onload = initialPageLoad();

const buttons = document.querySelectorAll('button');

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        clearPage();
        if (i == 0) {
            homePage();
        }
        if (i == 1) {
            menuPage();
        } 
        if (i == 2) {
            contactPage();
        }
    });
});

function clearPage() {

    const content = document.getElementById('content');

    const imgs = content.querySelectorAll('img');
    const headings = content.querySelectorAll('h3');
    const subHeadings = content.querySelectorAll('h4');
    const paras = content.querySelectorAll('p');
    const lists = content.querySelectorAll('ul');
    const forms = content.querySelectorAll('form');

    const elementsToRemove = [...imgs, ...headings, ...paras, ...lists,
    ...subHeadings, ...forms];

    elementsToRemove.forEach(element => element.remove());
}