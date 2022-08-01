export function initialPageLoad() {
    const content = document.getElementById('content');
    const title = document.createElement('h2');
    title.textContent = 'Arnolds Amazing Recipes';

    const mainImg = new Image();
    mainImg.src = '../images/main.jpg';
    mainImg.className = 'main';

    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Adventures in Spice';

    const info = document.createElement('p');
    info.textContent = "Here at Arnold's Amazing Recipes I strive to provide you with quick and affordable recipes that taste as good as they look! Check out some of my recipes.";

    const navBar = document.createElement('div');
    navBar.className = 'tabs';

    for (let i=0; i<3; i++) {
        const navTitles = ['Home', 'Menu', 'Contact'];
        const button = document.createElement('button');
        button.className = 'nav-item';
        button.textContent = navTitles[i];
        navBar.append(button);
    }

    content.append(title, navBar, mainImg, 
        subHeading, info);





}