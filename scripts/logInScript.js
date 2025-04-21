function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.style.border = '1px solid #C19A6B');
    document.getElementById('submit-message').textContent ='';
	
    //Variables
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Enter a valid email';
        email.style.border = '2px solid red';
        isValid = false;
    }

    //Password parameters
    if (password.value.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        password.style.border = '2px solid red';
        isValid = false;
    }
	
	if (isValid) {
		alert("Account Created!")
		form.submit();
	}
    
    return isValid;
}
