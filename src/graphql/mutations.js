/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie($movieAttribute: MovieAttribute) {
    updateMovie(movieAttribute: $movieAttribute)
  }
`;
export const writeReview = /* GraphQL */ `
  mutation WriteReview($review: String, $movie_name: String, $stars: String) {
    writeReview(review: $review, movie_name: $movie_name, stars: $stars)
  }
`;
export const sign_up = /* GraphQL */ `
  mutation Sign_up($email: String, $password: String) {
    sign_up(email: $email, password: $password)
  }
`;
export const confirm_sign_up = /* GraphQL */ `
  mutation Confirm_sign_up($email: String, $confirmation_code: String) {
    confirm_sign_up(email: $email, confirmation_code: $confirmation_code)
  }
`;
export const delete_movie = /* GraphQL */ `
  mutation Delete_movie($movie_name: String) {
    delete_movie(movie_name: $movie_name)
  }
`;
