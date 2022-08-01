export function menuPage() {
    const content = document.getElementById('content');
    const title = document.createElement('h3');
    title.textContent = 'Sourdough Recipe';

    const ingredientsTitle = document.createElement('h4');
    ingredientsTitle.textContent = 'Ingredients:';



    const ingredientList = document.createElement('ul');

    const recipeSteps = document.createElement('ul');

    const sourdoughImage = new Image();

    sourdoughImage.src = '../images/sourdough.jpg';
    sourdoughImage.className = 'recipe-image';

    content.append(title, sourdoughImage, ingredientsTitle, ingredientList, recipeSteps);

    for(let i=0; i<5; i++) {
        const ingredients = ['1 Onion', '2 Chicken Breasts', '2 garlic gloves',
        '1tsp cumin', '1tsb chilli powder'];
        const listItem = document.createElement('li');
        listItem.textContent = ingredients[i];
        ingredientList.append(listItem);
    }

    const stepOne = document.createElement('li');
    stepOne.textContent = 'Blitz 1 quartered onion, 2 garlic cloves, a thumb-sized chunk of ginger and ½ red chilli together in a food processor until it becomes a coarse paste.'

    const stepTwo = document.createElement('li');
    stepTwo.textContent = 'Heat 1 tbsp vegetable oil in a large saucepan and add the paste, fry for 5 mins, until softened. If it starts to stick to the pan at all, add a splash of water.';

    recipeSteps.append(stepOne,stepTwo);





}