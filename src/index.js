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
    
}