let togglePassword;
let regTogglePassword;

document.addEventListener("DOMContentLoaded", function () {
  togglePassword = document.getElementById("togglePassword");
  regTogglePassword = document.getElementById("regTogglePassword");
});

// Improved password toggling function
function passwordToggling(buttonId) {
  console.log("Toggling password for:", buttonId);

  // Dynamically find the correct input field
  const passwordInput =
    buttonId === "togglePassword"
      ? document.getElementById("password")
      : document.getElementById("regPassword");

  const icon =
    buttonId === "togglePassword"
      ? document.getElementById("logEye")
      : document.getElementById("regEye");

  if (passwordInput) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    }
  } else {
    console.error("Password input not found for ID:", buttonId);
  }
}


// Registration Form Validation
(() => {  
  "use strict";
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      console.log("inside validity");
      
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
})();

// Login Form Validation
(() => {    
    "use strict";
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        console.log("inside validity");
        
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  })();