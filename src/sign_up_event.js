import { handleSignUp } from './sign_up_credentials';
import { handleConfirm } from './confirmationCredentials';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const signUpForm = document.querySelector('#signupModal form');
    const emailInput = signUpForm.querySelector('#signupEmail');
    const passwordInput = signUpForm.querySelector('#signupPassword');
    const confirmationCodeField = signUpForm.querySelector('#confirmationCodeField');
    const confirmationCodeInput = signUpForm.querySelector('#confirmationCode');
    const signUpButton = signUpForm.querySelector('#signUpButton');

    signUpForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const response = await handleSignUp(email, password);

        console.log('Sign-up successful:', response);

        // Show the confirmation code field if sign-up was successful
        confirmationCodeField.style.display = 'block';
        signUpButton.innerText = 'Confirm';
      } catch (error) {
        console.error('Sign-up error:', error);
        return; // Exit the function if sign-up fails
      }

      signUpForm.removeEventListener('submit', handleSignUp); // Remove initial sign-up form event listener

      signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const confirmationCode = confirmationCodeInput.value;
        console.log('Confirmation code:', confirmationCode);

        try {
          const confirmed = await handleConfirm(email, confirmationCode);
          console.log('Confirmation successful:', confirmed);
          //here I want to redirect to the home page
          window.location.href = "http://localhost:3000/";
        } catch (error) {
          console.error('Confirmation error:', error);
        }
      });

    });
  }, 2000);
});
