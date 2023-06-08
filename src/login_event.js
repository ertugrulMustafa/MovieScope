import { handleLogin } from './login_credentials.js';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loginForm = document.querySelector('#loginModal form');
    const emailInput = loginForm.querySelector('#loginEmail');
    const passwordInput = loginForm.querySelector('#loginPassword');

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const response = await handleLogin(email, password);

        console.log('Login successful:', response);

        // Store the user's login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);

        // Jump to the home page
        window.location.href = "http://localhost:3000/";
        //click in the middle of the screen
        document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).click();
      } catch (error) {
        console.error('Login failed:', error);
      }
    });

    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const signUpButton = document.querySelector('#signUpButton');
    const loginButton = document.querySelector('#loginButton');
    const profileSection = document.querySelector('#profileSection');

    if (isLoggedIn === 'true') {
      const email = localStorage.getItem('email');
      signUpButton.style.display = 'none';
      loginButton.style.display = 'none';
      profileSection.style.display = 'block';

      // Set the email text in the profile section
      const emailText = document.querySelector('#emailText');
      emailText.innerText = email;
    }
  }, 2000);
});
