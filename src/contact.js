export function contactPage() {
    const content = document.getElementById('content');

    const contactBox = document.createElement('div');
    contactBox.className = 'contact-us';

    const title = document.createElement('h3');
    title.textContent = 'Contact us';

    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const messageBox = document.createElement('textarea');

    nameInput.type = 'text'; nameInput.id = 'name';
    nameInput.name = 'name'; nameInput.placeholder = 'Full name';

    emailInput.type = 'email'; emailInput.id = 'email';
    emailInput.name = 'email'; emailInput.placeholder = 'Email address';

    messageBox.id = 'msg'; messageBox.name = 'msg';
    messageBox.placeholder = 'Enter your message here';
    messageBox.rows = '4'; messageBox.cols = '50';

    const submit = document.createElement('button');
    submit.className = 'submit';
    submit.textContent = 'Submit';

    form.append(nameInput,emailInput,messageBox,submit);

    contactBox.append(title, form)
    content.append(contactBox);

}