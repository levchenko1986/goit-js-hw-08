import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

saveMessage();

input.addEventListener('input', throttle(onEmailInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
    formData.message = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onEmailInput(evt) {
    formData.email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveMessage () {
    const saveText = localStorage.getItem(STORAGE_KEY);
    const parsText = JSON.parse(saveText);
        if (saveText) {
            input.value = parsText['email'];
            textarea.value = parsText['message'];
        }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, messsage } } = evt.currentTarget;
    const e = {
        email: form.email.value,
        message: form.message.value
    };
    formData.email = '';
    formData.message = '';
  
    console.log(e);
    localStorage.clear();

    evt.currentTarget.reset();
};
