export function basketPage() {
    const content = document.getElementById('content');

    const title = document.createElement('h3');
    title.textContent = 'Your Basket';

    const boxContent = document.createElement('div');
    boxContent.className = 'product';

    boxContent.append(title);
    content.append(boxContent);
}