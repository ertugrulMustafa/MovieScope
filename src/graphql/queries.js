/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listMovies = /* GraphQL */ `
  query ListMovies {
    listMovies {
      movie_name
      genre
      run_time
      release_date
      director
      writer
      stars
      overview
      image_link
      casts
      story_line
      trailer_link
      imdb_link
      imdb_rating
    }
  }
`;
export const listMovieReview = /* GraphQL */ `
  query ListMovieReview($movie_name: String) {
    listMovieReview(movie_name: $movie_name) {
      created_at
      username
      review
      movie_name
      stars
    }
  }
`;
export const search = /* GraphQL */ `
  query Search($query: String) {
    search(query: $query)
  }
`;
