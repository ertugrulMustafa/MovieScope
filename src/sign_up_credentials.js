import { API, graphqlOperation } from '@aws-amplify/api';
import { sign_up } from './graphql/mutations';

// Function to handle sign-up form submission
export async function handleSignUp(email, password) {
  try {
    // Call the sign_up mutation with the provided email and password
    const response = await API.graphql(
      graphqlOperation(sign_up, { email, password })
    );

    // Handle the response or perform any additional actions

    // Return the response or perform any additional actions
    return response;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}
