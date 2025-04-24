function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.style.border = '1px solid #C19A6B');
    document.getElementById('submit-message').textContent = '';

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!firstName.value.trim()) {
        document.getElementById('first-name-error').textContent = 'First Name is required';
        firstName.style.border = '2px solid red';
        isValid = false;
    }

    if (!lastName.value.trim()) {
        document.getElementById('last-name-error').textContent = 'Last Name is required';
        lastName.style.border = '2px solid red';
        isValid = false;
    }

    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Enter a valid email';
        email.style.border = '2px solid red';
        isValid = false;
    }

    if (password.value.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        password.style.border = '2px solid red';
        isValid = false;
    }

    if (confirmPassword.value !== password.value) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        confirmPassword.style.border = '2px solid red';
        isValid = false;
    }

    if (isValid) {
        alert(
            `Account Created!\nFirst Name: ${firstName.value.trim()}\nLast Name: ${lastName.value.trim()}\nEmail: ${email.value.trim()}`
        );
    }

    return isValid;
}