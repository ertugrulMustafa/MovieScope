import { API, graphqlOperation } from '@aws-amplify/api';
import { confirm_sign_up } from './graphql/mutations';

// Function to handle confirm form submission
export async function handleConfirm(email, confirmation_code) {
  try {
    // Call the sign_up mutation with the provided email and code
    const response = await API.graphql(
      graphqlOperation(confirm_sign_up, { email, confirmation_code })
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
