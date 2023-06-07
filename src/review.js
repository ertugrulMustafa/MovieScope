import { writeReview } from './graphql/mutations';
import { API, graphqlOperation } from '@aws-amplify/api';


// Function to open the review text box
function openReviewTextBox() {
    const reviewTextBox = document.querySelector('#reviewTextBox');
    const slider = document.querySelector('#slider');
    slider.style.display = 'block';
    reviewTextBox.style.display = 'block';
  }
  
// Function to submit the review (you can implement this logic as needed)
async function submitReview(movie_name,stars) {
    const reviewTextArea = document.querySelector('#reviewTextArea'); // Update the selector to '#reviewTextArea'
    const review = reviewTextArea.value;
    const reviewTextBox = document.querySelector('#reviewTextBox');
    reviewTextBox.style.display = 'none';
    
    console.log('Review:', review);
    try {
      const response = await API.graphql(
        graphqlOperation(writeReview, { review, movie_name, stars })
      );
  
      // Handle the response or perform any additional actions
          console.log('review sent:', response);
          //reload the page
          window.location.reload();

      // Return the response or perform any additional actions
      return response;
    } catch (error) {
      console.error('Error review :', error);
      throw error;
    }



  
  }
  
  
  // Export the functions to make them accessible from other files
  export { openReviewTextBox, submitReview };
  
