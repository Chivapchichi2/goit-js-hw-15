'use strict';
const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = loginFormRef.elements.email;
    const passwordInput = loginFormRef.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All fields must be filled!');
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        console.log(formData);
        loginFormRef.reset();
    }
});