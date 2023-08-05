// Function to check if the user is logged in
function checkLoggedIn() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        // Redirect to the welcome page or any secured page
        window.location.href = 'welcome.html';
    }
}

// Function to register a new user
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username is already registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const isRegistered = registeredUsers.some(user => user.username === username);
    if (isRegistered) {
        // Display error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.innerText = 'Username already exists.';
        return false;
    }

    // Register the user by adding to the array
    registeredUsers.push({ username, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Clear the form fields
    document.getElementById('registrationForm').reset();

    // Redirect to the login page after successful registration
    window.location.href = 'index.html';
    return false;
}

// Function to check login credentials
function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any registered user
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Store the logged-in user in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to the welcome page or any secured page after successful login
        window.location.href = 'welcome.html';
        return false;
    } else {
        // Display error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.innerText = 'Invalid username or password.';
        return false;
    }
}

// Check if the user is already logged in
checkLoggedIn();