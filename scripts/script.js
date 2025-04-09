function validateForm() {
  // Clear all previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  let isValid = true;

  const email = document.getElementById("email").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const street = document.getElementById("street").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zipcode = document.getElementById("zipcode").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("email-error").textContent =
      "Invalid email address.";
    isValid = false;
  }

  // First and Last name validation
  if (firstName === "") {
    document.getElementById("first-name-error").textContent =
      "First name is required.";
    isValid = false;
  }

  if (lastName === "") {
    document.getElementById("last-name-error").textContent =
      "Last name is required.";
    isValid = false;
  }

  // Age validation
  if (isNaN(age) || age < 0 || age > 120) {
    document.getElementById("age-error").textContent =
      "Enter a valid age (0-120).";
    isValid = false;
  }

  // Street, city, state, and zip validation
  if (street === "") {
    document.getElementById("street-error").textContent = "Street is required.";
    isValid = false;
  }

  if (city === "") {
    document.getElementById("city-error").textContent = "City is required.";
    isValid = false;
  }

  if (state === "") {
    document.getElementById("state-error").textContent = "State is required.";
    isValid = false;
  }

  if (!/^\d{5}$/.test(zipcode)) {
    document.getElementById("zipcode-error").textContent =
      "Zip code must be 5 digits.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirm-password-error").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) {
    return false;
  }

  // Display JSON output
  const shopperData = {
    email,
    firstName,
    lastName,
    phone,
    age,
    address: {
      street,
      city,
      state,
      zipcode,
    },
  };

  document.getElementById("json-output").textContent = JSON.stringify(
    shopperData,
    null,
    2
  );

  return false; // Prevent actual form submission for demonstration
}
