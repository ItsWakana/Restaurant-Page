export function menuPage() {
    const content = document.getElementById('content');


    const firstItem = document.createElement('div');
    firstItem.className = 'product';
    

    const titleOne = document.createElement('h3');
    titleOne.textContent = 'Special Sourdough';

    const sourdoughImage = new Image();

    sourdoughImage.src = '../images/sourdough.jpg';
    sourdoughImage.className = 'recipe-image';

    const sourdoughDesc = document.createElement('p');
    sourdoughDesc.textContent = 'An wonderfully crafted artisan sourdough. Perfect as part of a ploughmans lunch.';

    const item1Price = document.createElement('h3');
    item1Price.textContent = '£2';

    firstItem.append(titleOne,sourdoughImage,sourdoughDesc,item1Price);

    const secondItem = document.createElement('div');
    secondItem.className = 'product';

    const titleTwo = document.createElement('h3');
    titleTwo.textContent = 'Signature Farmhouse Loaf';

    const farmhouseImage = new Image();

    farmhouseImage.src = '../images/loaf.jpg';
    farmhouseImage.className = 'recipe-image';

    const farmhouseDesc = document.createElement('p');
    farmhouseDesc.textContent = 'A full and crispy farmhouse loaf baked to perfection by our team of talented bakery chefs. Perfect for toast as well.';

    const item2Price = document.createElement('h3');
    item2Price.textContent = '£2.30';

    secondItem.append(titleTwo,farmhouseImage,farmhouseDesc,item2Price);

    
    content.append(firstItem,secondItem);


}