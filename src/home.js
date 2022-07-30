export function homePage() {
    const content = document.getElementById('content');
    const mainImg = document.createElement('img');
    mainImg.src = '../images/main.jpg';
    mainImg.className = 'main';

    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Adventures in Spice';

    const info = document.createElement('p');
    info.textContent = "Here at Arnold's Amazing Recipes I strive to provide you with quick and affordable recipes that taste as good as they look! Check out some of my recipes.";

    content.append(mainImg, subHeading, info);
}