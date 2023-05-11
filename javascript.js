// Signup functionality
function signup() {
  let name = document.getElementById('signup-name').value;
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  // Do something with the user data, e.g. store it in a database

  // Redirect to the login page
  window.location.href = 'login.html';
}

// Login functionality
function login() {
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

  // Check if the user email and password match with the stored data, e.g. from a database

  if (match) {
    // Redirect to the homepage
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password.');
  }
}
