import {initialPageLoad} from './pageLoad';
import {menuPage} from './menu';
import {homePage} from './home';
import {contactPage} from './contact';
import {basketPage} from './basket';

import "./style.css";

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
        if (i == 3) {
            basketPage();
        }
    });
});

buttons[0].addEventListener('click', () => {
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
    buttons[2].classList.remove('active');
    buttons[3].classList.remove('active');
});

buttons[1].addEventListener('click', () => {
    buttons[1].classList.add('active');
    buttons[0].classList.remove('active');
    buttons[2].classList.remove('active');
    buttons[3].classList.remove('active');
});

buttons[2].addEventListener('click', () => {
    buttons[2].classList.add('active');
    buttons[1].classList.remove('active');
    buttons[0].classList.remove('active');
    buttons[3].classList.remove('active');

});

buttons[3].addEventListener('click', () => {
    buttons[3].classList.add('active');
    buttons[0].classList.remove('active');
    buttons[1].classList.remove('active');
    buttons[2].classList.remove('active');
});

function clearPage() {

    const content = document.getElementById('content');

    const imgs = content.querySelectorAll('img');
    const headings = content.querySelectorAll('h3');
    const subHeadings = content.querySelectorAll('h4');
    const paras = content.querySelectorAll('p');
    const lists = content.querySelectorAll('ul');
    const forms = content.querySelectorAll('form');
    const products = content.querySelectorAll('.product');
    const contactForm = content.querySelectorAll('.contact-us');

    const elementsToRemove = [...imgs, ...headings, ...paras, ...lists,
    ...subHeadings, ...forms, ...products, ...contactForm];

    elementsToRemove.forEach(element => element.remove());
}