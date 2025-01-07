document.getElementById("sign-in-btn").addEventListener("click", () => {
    alert("Sign In functionality coming soon!");
});
document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  if (!document.getElementById("terms").checked) {
      alert("You must agree to the terms and conditions.");
      return;
  }

  alert(`Registration successful for ${name}!`);
});
// Select the form and error message elements
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get the values of the inputs
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate inputs
  if (!email || !password) {
    showErrorMessage('Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    showErrorMessage('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    showErrorMessage('Password must be at least 6 characters long.');
    return;
  }

  // If all validations pass, simulate login success
  alert('Login successful!');
  form.reset(); // Reset the form fields
});

// Function to show error message
function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
document.getElementById('feedback-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const feedback = document.getElementById('feedback-text').value;
  const email = document.getElementById('email').value;

  if (!feedback || !email) {
      alert('Please fill in all fields!');
      return;
  }

  alert(`Thank you for your feedback, ${email}!`);
  document.getElementById('feedback-text').value = '';
  document.getElementById('email').value = '';
});
// Button functionality
document.querySelector('.btn').addEventListener('click', () => {
  alert('Redirecting to the article!');
});
