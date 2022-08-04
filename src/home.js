import mainImage from '../images/main.jpg';

export function homePage() {
    const content = document.getElementById('content');

    const homeBanner = document.createElement('div');
    homeBanner.className = 'product';

    const subAndInfoContainer = document.createElement('div');
    subAndInfoContainer.className = 'title-desc';

    const main = new Image();

    main.src = mainImage;
    main.className = 'recipe-image';

    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Yeastful Adventures';

    const info = document.createElement('p');
    info.textContent = "Here at Loaf Kings we provide you with beautifully crated artisan bread that tastes as good as it looks! Browse our available loaves on the menu page!";


    subAndInfoContainer.append(subHeading, info);

    homeBanner.append(subAndInfoContainer, main);
    content.append(homeBanner);
}