'use strict';
const inputRef = document.getElementById('validation-input');

const checkValidationInput = (e) => {
    if (e.target.value.length === 0) {
        return removeClasses()
    }
    e.target.value.length === Number(inputRef.dataset.length) ?
        inputRef.classList.add('valid') :
        inputRef.classList.add('invalid');
}

const removeClasses = () => inputRef.classList.remove('valid', 'invalid')

inputRef.addEventListener('focus', removeClasses);
inputRef.addEventListener('blur', checkValidationInput);