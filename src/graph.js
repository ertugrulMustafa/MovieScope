import { API } from '../node_modules/@aws-amplify/api';
import config from './aws-exports.js';
import { listMovies } from './graphql/queries.js';

API.configure(config);

// Define a function to fetch and print movie fields
async function fetchAndPrintMovies() {
  try {
    const response = await API.graphql({ query: listMovies });
    const movies = response.data.listMovies;

    movies.forEach(movie => {
      console.log('Movie Name:', movie.movie_name);
      console.log('Genre:', movie.genre);
      console.log('Run Time:', movie.run_time);
      console.log('Release Date:', movie.release_date);
      console.log('Director:', movie.director);
      console.log('Writer:', movie.writer);
      console.log('Stars:', movie.stars);
      console.log('Overview:', movie.overview);
      console.log('-------------------------');
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Call the fetchAndPrintMovies function to initiate the process
fetchAndPrintMovies();