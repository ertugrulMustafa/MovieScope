import { API } from '@aws-amplify/api';
import config from './aws-exports.js';
import { listMovieReview } from './graphql/queries.js';

API.configure(config);

async function fetchReviews(movieName) {
  try {
    const response = await API.graphql({
      query: listMovieReview,
      variables: { movie_name: movieName }
    });
    const reviews = response.data.listMovieReview;
    
    console.log('Review:', reviews); 
    
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
}

export { fetchReviews };
