// ==============================
// LOGIN FORM VALIDATION
// ==============================
function validateLogin() {
    let emailField = document.getElementById("loginEmail");
    let passwordField = document.getElementById("loginPassword");

    if (!emailField || !passwordField) {
        alert("Input fields not found!");
        return false;
    }

    let email = emailField.value;
    let password = passwordField.value;

    if (email === "" || !email.includes("@")) {
        alert("Enter valid email");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Login Successful!");
    return true;
}

