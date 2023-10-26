window.onload = (event) =>{
    // Function to validate an email address
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Function to validate a password
function validatePassword(password) {
    // Password must be 8-20 characters long, contain letters and numbers, and no spaces or special characters
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    return passwordRegex.test(password);
}

// Function to handle the button click event
document.getElementById("validateButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const validationMessage = document.getElementById("validationMessage");

    if (validateEmail(email) && validatePassword(password)) {
        validationMessage.textContent = "Email and password are valid.";
    } else {
        validationMessage.textContent = "Email or password is invalid.";
    }
});
}