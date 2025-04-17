document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('account-form');
    const message = document.getElementById('submit-message');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const form2 = {
                firstName: document.getElementById('first-name')?.value.trim() || '',
                lastName: document.getElementById('last-name')?.value.trim() || '',
                email: document.getElementById('email')?.value.trim() || '',
                password: document.getElementById('password')?.value.trim() || ''
            };

            // Alert fallback
            alert(
                "Account Created!\n" +
                "First Name: " + form2.firstName + "\n" +
                "Last Name: " + form2.lastName + "\n" +
                "Email: " + form2.email
            );


        });
    }
});