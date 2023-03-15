const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");

function validatePassword() {
  if (passwordInput.value != confirmInput.value) {
    confirmInput.setCustomValidity("Passwords do not match.");
  } else {
    confirmInput.setCustomValidity("");
  }
}

passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validatePassword);