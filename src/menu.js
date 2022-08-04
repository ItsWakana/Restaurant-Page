import productOne from './assets/sourdough.jpg';
import productTwo from './assets/loaf.jpg';

export function menuPage() {
    const content = document.getElementById('content');


    const firstItem = document.createElement('div');
    firstItem.className = 'product';
    

    const titleOne = document.createElement('h3');
    titleOne.textContent = 'Special Sourdough';

    const menuCartOne = document.createElement('div');
    menuCartOne.className = 'title-desc';

    const sourdoughImage = new Image();

    sourdoughImage.src = productOne;
    sourdoughImage.className = 'recipe-image';

    const sourdoughDesc = document.createElement('p');
    sourdoughDesc.textContent = 'An wonderfully crafted artisan sourdough. Perfect as part of a ploughmans lunch.';

    const item1Price = document.createElement('h3');
    item1Price.textContent = '£2';

    const addItem1ToCart = document.createElement('button');
    addItem1ToCart.textContent = 'Add to cart';
    addItem1ToCart.className = 'add-cart';

    menuCartOne.append(titleOne,sourdoughDesc,item1Price,addItem1ToCart);
    firstItem.append(menuCartOne,sourdoughImage);

    const secondItem = document.createElement('div');
    secondItem.className = 'product';

    const titleTwo = document.createElement('h3');
    titleTwo.textContent = 'Signature Farmhouse Loaf';

    const menuCartTwo = document.createElement('div');
    menuCartTwo.className = 'title-desc';

    const farmhouseImage = new Image();

    farmhouseImage.src = productTwo;
    farmhouseImage.className = 'recipe-image';

    const farmhouseDesc = document.createElement('p');
    farmhouseDesc.textContent = 'A full and crispy farmhouse loaf baked to perfection by our team of talented bakery chefs. Perfect for toast as well.';

    const item2Price = document.createElement('h3');
    item2Price.textContent = '£2.30';

    const addItem2ToCart = document.createElement('button');
    addItem2ToCart.textContent = 'Add to cart';
    addItem2ToCart.className = 'add-cart';

    menuCartTwo.append(titleTwo,farmhouseDesc,item2Price,addItem2ToCart);
    secondItem.append(menuCartTwo,farmhouseImage);

    
    content.append(firstItem,secondItem);
}