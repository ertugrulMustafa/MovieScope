import { API, graphqlOperation } from '@aws-amplify/api';
import { log_in } from './graphql/mutations';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Function to handle confirm form submission
export async function handleLogin(email, password) {
  try {
    // Call the sign_up mutation with the provided email and code
    const response = await API.graphql(
      graphqlOperation(log_in, { email, password })
    );

    // Handle the response or perform any additional actions
        console.log('log in succesfull:', response);
    // Return the response or perform any additional actions
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}
