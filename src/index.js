import {mainPage} from './home';
import {menuPage} from './menu';

window.onload = mainPage();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clearPage();
        menuPage();
    });
});

function clearPage() {
    const content = document.getElementById('content');
    const imgs = content.querySelectorAll('img');
    const headings = content.querySelectorAll('h3');
    const paras = content.querySelectorAll('p');

    const elementsToRemove = [...imgs, ...headings, ...paras];

    elementsToRemove.forEach(element => element.remove());
}