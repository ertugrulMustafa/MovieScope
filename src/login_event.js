import { handleLogin } from './login_credentials';

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
  
          console.log('login successful:', response);
          window.location.href = "http://localhost:3000/";

        } catch (error) {
            console.error('login failed:', error);
            }
        });
    }, 2000);
    });

