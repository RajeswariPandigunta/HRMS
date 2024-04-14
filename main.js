const registrationForm = document.getElementById("registration-form");
//const loginForm = document.getElementById("login-form");
const dashboard = document.getElementById("dashboard");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Handle form submission, validation, and sending data to the server
  // You can use JavaScript to validate form inputs, handle file uploads, and send data to the server using AJAX
  // This function can be customized based on your backend requirements

  // After successful registration, hide the registration form and show the login form
  registrationForm.style.display = "none";
  loginForm.style.display = "block";
});

// Add code for login form and side dashboard here


const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Handle form submission, validation, and sending data to the server
  // You can use JavaScript to validate form inputs, handle form submission, and send data to the server using AJAX
  // This function can be customized based on your backend requirements

  // Example: Send data to the server using AJAX
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = xhr.responseText;
      if (response === "success") {
        // Redirect to the dashboard or another page after successful login
        window.location.href = "dashboard.html";
      } else {
        // Display an error message or handle unsuccessful login
        alert("Login failed. Please check your username and password.");
      }
    }
  };
  xhr.send(`username=${username}&password=${password}`);
});