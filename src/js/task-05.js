'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('#controls input');
let boxesRef = document.getElementById('boxes');
const clone = boxesRef.cloneNode(true);
const renderButtonRef = document.querySelector('#controls button[data-create]');
const destroyButtonRef = document.querySelector('#controls button[data-destroy]');

const createBoxes = (amount) => {
  if (inputRef.classList.contains('valid')) {
    let markup = '';
    let divSize = 30;
    for (let i = 0; i < amount; i++) {
      markup += `<div style="width:${divSize}px; height:${divSize}px; margin:5px; background-color:${getRandomHexColor()};"></div>`
      divSize += 10;
    }
    document.querySelector('#boxes').insertAdjacentHTML('afterbegin', markup);
    inputRef.value = '';
    return;
  }
  inputRef.value = '';
}

const destroyBoxes = () => {
  boxesRef.remove();
  boxesRef = clone.cloneNode(true);
  document.querySelector('#controls').insertAdjacentElement('afterend', boxesRef);
  inputRef.value = '';
  removeClasses();
}

const checkValidationInput = () => {

  if (rez > 0 && rez <= 100) {
    inputRef.classList.add('valid');
    return ;
  }

  inputRef.classList.add('invalid');
}

const removeClasses = () => inputRef.classList.remove('valid', 'invalid');
let rez = 0;

inputRef.addEventListener('input', (e) => rez = e.target.value);
inputRef.addEventListener('focus', removeClasses);
inputRef.addEventListener('blur', checkValidationInput);
renderButtonRef.addEventListener('click', () => createBoxes(rez) );
destroyButtonRef.addEventListener('click', destroyBoxes);
