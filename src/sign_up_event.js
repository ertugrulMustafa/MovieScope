import { handleSignUp } from './sign_up_credentials';

// Start after everything is loaded
document.addEventListener('DOMContentLoaded', () => {

  // Wait for 2 seconds here
  setTimeout(function(){
    
    // Get references to the form elements
    const signUpForm = document.querySelector('#signupModal form');
    const emailInput = signUpForm.querySelector('#signupEmail');
    const passwordInput = signUpForm.querySelector('#signupPassword');

    // Add event listener to the sign-up form submit button
    signUpForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the form from being submitted normally

      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        // Call the handleSignUp function with the email and password values
        const response = await handleSignUp(email, password);

        // Handle the response or perform any additional actions
        console.log('Sign-up successful:', response);

        // Reset the form
        signUpForm.reset();


      } catch (error) {
        // Handle any errors that occurred during sign-up
        console.error('Sign-up error:', error);
      }
    });

  }, 2000);
});
