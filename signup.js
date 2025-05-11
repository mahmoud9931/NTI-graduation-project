document.addEventListener('DOMContentLoaded', () => {
    console.log('Validation script initialized');

    // Select input fields and validation message elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signupBtn = document.getElementById('signup-btn');
    const nameValidation = document.getElementById('name-validation');
    const emailValidation = document.getElementById('email-validation');
    const passwordValidation = document.getElementById('password-validation');

    // Check if all elements exist
    if (!nameInput || !emailInput || !passwordInput || !signupBtn || 
        !nameValidation || !emailValidation || !passwordValidation) {
        console.error('One or more elements not found. Ensure IDs exist: name, email, password, signup-btn, name-validation, email-validation, password-validation');
        return;
    }

    // Regex patterns
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // Letters and spaces, min 3 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char

    // Validation states
    let isNameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    // Function to update button state
    const updateButtonState = () => {
        signupBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
        console.log(`Button state: ${signupBtn.disabled ? 'Disabled' : 'Enabled'}, Name: ${isNameValid}, Email: ${isEmailValid}, Password: ${isPasswordValid}`);
    };

    // Name validation
    nameInput.addEventListener('input', () => {
        const value = nameInput.value.trim();
        console.log(`Name input: "${value}"`);

        if (value === '') {
            nameValidation.textContent = '';
            nameValidation.style.color = '#333';
            isNameValid = false;
        } else if (nameRegex.test(value)) {
            nameValidation.textContent = '✅ Valid name';
            nameValidation.style.color = 'green';
            isNameValid = true;
        } else {
            nameValidation.textContent = '❌ Name must be at least 3 letters (no numbers or special characters)';
            nameValidation.style.color = 'red';
            isNameValid = false;
        }
        updateButtonState();
    });

    // Email validation
    emailInput.addEventListener('input', () => {
        const value = emailInput.value.trim();
        console.log(`Email input: "${value}"`);

        if (value === '') {
            emailValidation.textContent = '';
            emailValidation.style.color = '#333';
            isEmailValid = false;
        } else if (emailRegex.test(value)) {
            emailValidation.textContent = '✅ Valid email';
            nameValidation.style.color = 'green';
            isEmailValid = true;
        } else {
            emailValidation.textContent = '❌ Please enter a valid email address';
            nameValidation.style.color = 'red';
            isEmailValid = false;
        }
        updateButtonState();
    });

    // Password validation
    passwordInput.addEventListener('input', () => {
        const value = passwordInput.value;
        console.log(`Password input: "${value}"`);

        if (value === '') {
            passwordValidation.textContent = '';
            passwordValidation.style.color = '#333';
            isPasswordValid = false;
        } else if (passwordRegex.test(value)) {
            passwordValidation.textContent = '✅ Valid password';
            passwordValidation.style.color = 'green';
            isPasswordValid = true;
        } else {
            passwordValidation.textContent = '❌ Password must be 8+ characters, with uppercase, lowercase, number, and special character';
            passwordValidation.style.color = 'red';
            isPasswordValid = false;
        }
        updateButtonState();
    });
});