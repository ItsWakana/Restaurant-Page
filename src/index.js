import {mainPage} from './home';
import {menuPage} from './menu';

window.onload = mainPage();

const buttons = document.querySelectorAll('button');

buttons[1].addEventListener('click', () => {
    clearPage();
    menuPage();
});

buttons[0].addEventListener('click', () => {
    clearPage();
});

function clearPage() {
    const content = document.getElementById('content');
    const imgs = content.querySelectorAll('img');
    const headings = content.querySelectorAll('h3');
    const paras = content.querySelectorAll('p');

    const elementsToRemove = [...imgs, ...headings, ...paras];

    elementsToRemove.forEach(element => element.remove());
}