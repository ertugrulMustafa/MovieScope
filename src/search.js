import { API } from '@aws-amplify/api';
import config from './aws-exports.js';
import { search } from './graphql/queries.js';

API.configure(config);

async function searchMovies(movieName) {
  try {
    const response = await API.graphql({
      query: search,
      variables: { query: movieName }
    });
    const results = response.data.search;
    
    console.log('Results:', results); 
    
    return results;
  } catch (error) {
    console.error('Error fetching results:', error);
    return null;
  }
}

export { searchMovies };
