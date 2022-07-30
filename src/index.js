import {initialPageLoad} from './pageLoad';
import {menuPage} from './menu';
import {homePage} from './home';
import {contactPage} from './contact';

window.onload = initialPageLoad();

const buttons = document.querySelectorAll('button');

buttons[2].addEventListener('click', () => {
    clearPage();
    contactPage();
});

buttons[1].addEventListener('click', () => {
    clearPage();
    menuPage();
});

buttons[0].addEventListener('click', () => {
    clearPage();
    homePage();
});

function clearPage() {

    const content = document.getElementById('content');

    const imgs = content.querySelectorAll('img');
    const headings = content.querySelectorAll('h3');
    const paras = content.querySelectorAll('p');

    const elementsToRemove = [...imgs, ...headings, ...paras];

    elementsToRemove.forEach(element => element.remove());
}