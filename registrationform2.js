


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const nameRegx = /[A-Z0-9. ]{4,34}/;
const emailRegex = /\S+@\S+\.\S+$/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

nameInput.addEventListener('input', function () {
    if (!nameRegx.test(nameInput.value)) {
        nameInput.setCustomValidity('Name must be at least 4 characters long And All CAPITAL LETTER');
    } else {
        nameInput.setCustomValidity('');
    }
});

emailInput.addEventListener('input', function () {
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address with @ and .');
    } else {
        emailInput.setCustomValidity('');
    }
});

passwordInput.addEventListener('input', function () {
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Must be at least one upper case,one lower case,symbol & 8 characters long ');
    } else {
        passwordInput.setCustomValidity('');
    }
});

password2Input.addEventListener('input', function () {
    if (password2Input.value !== passwordInput.value) {
        password2Input.setCustomValidity('Passwords do not match');
    } else {
        password2Input.setCustomValidity('');
    }
});

