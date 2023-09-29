'use strict';

const controlRef = document.getElementById("font-size-control");
const textRef = document.getElementById('text');

textRef.style.fontSize = `${controlRef.value}px`;

controlRef.addEventListener('input', (e) => textRef.style.fontSize =`${e.target.value}px`);