import { API, graphqlOperation } from '@aws-amplify/api';
import { confirm_sign_up } from './graphql/mutations';

// Function to handle sign-up form submission
export async function handleConfirmation(email, code) {
  try {
    // Call the sign_up mutation with the provided email and password
    const response = await API.graphql(
      graphqlOperation(confirm_sign_up, { email, code })
    );

    // Handle the response or perform any additional actions
        console.log('Confirmed:', response);
    // Return the response or perform any additional actions
    return response;
  } catch (error) {
    console.error('Error confirming:', error);
    throw error;
  }
}
