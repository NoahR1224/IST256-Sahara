document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('shopper-form'); // Corrected ID

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                street: document.getElementById('street').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zipcode').value // Corrected ID
            };

            function phoneNumber(value) {
                return value ? "Phone Number: " + value + "\n" : "";
            }

            alert(
                "Saved Profile:\n" +
                "First Name: " + formData.firstName + "\n" +
                "Last Name: " + formData.lastName + "\n" +
                "Age: " + formData.age + "\n" +
                phoneNumber(formData.phone) +
                "Email: " + formData.email + "\n" +
                "Street Address: " + formData.street + "\n" +
                "City: " + formData.city + "\n" +
                "State: " + formData.state + "\n" +
                "Zip Code: " + formData.zip
            );
        });
    }
});