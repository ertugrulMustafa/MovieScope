import { API } from '@aws-amplify/api';
import config from './aws-exports.js';
import { listMovies } from './graphql/queries.js';

API.configure(config);
console.log('config:', config);
async function fetchMovies() {
  try {
    const response = await API.graphql({ query: listMovies });
    const movies = response.data.listMovies;
    
    
    console.log('Movie:', movies); // Print the first movie separately
    
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
}

export { fetchMovies };


