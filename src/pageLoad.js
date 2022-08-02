export function initialPageLoad() {

    const content = document.getElementById('content');
    const title = document.createElement('h2');
    title.textContent = 'The Loaf Kings';

    const homeBanner = document.createElement('div');
    homeBanner.className = 'product';

    const subAndInfoContainer = document.createElement('div');
    subAndInfoContainer.className = 'title-desc';

    const main = new Image();

    main.src = '../images/main.jpg';
    main.className = 'recipe-image';

    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Yeastful Adventures';

    const info = document.createElement('p');
    info.textContent = "Here at Loaf Kings we provide you with beautifully crated artisan bread that tastes as good as it looks! Browse our available loaves on the menu page!";

    const navBar = document.createElement('div');
    navBar.className = 'tabs';

    for (let i=0; i<3; i++) {
        const navTitles = ['Home', 'Menu', 'Contact'];
        const button = document.createElement('button');
        button.className = 'nav-item';
        button.textContent = navTitles[i];
        navBar.append(button);
    }
    subAndInfoContainer.append(subHeading, info);

    homeBanner.append(subAndInfoContainer,main);
    content.append(title, navBar, homeBanner);

    const buttons = document.querySelectorAll('button');
    buttons[0].classList.add('active');
}