import "./home.css";
import "./sign_up_event.js";
import "./login_event.js";
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { fetchMovies } from './backend.js';
import { searchMovies } from './search.js';






function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const movieList = await fetchMovies();
      setMovies(movieList);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const searchQuery = event.target.elements.searchQuery.value;
      const response = await searchMovies(searchQuery);
      if (response && response.length > 0) {
        setSearchResults(response);
        setDropdownOpen(true);
      } else {
        setSearchResults([]);
        setDropdownOpen(false);
      }
    } catch (error) {
      console.error('Search Failed:', error);
    }
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };
  
  return (
    <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <span className="navbar-text">MovieScope <small>movie review</small></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavButtons">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link signup-btn" href="#" id="signUpButton" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link login-btn" href="#" id="loginButton" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                </li>
                <li className="nav-item">
                  {/* Profile Section */}
                  <div id="profileSection" style={{ display: 'none' }}>
                    <img className="avatarImage" id="avatarImage" src="/images/user.png" alt="" />
                    <span style={{ color: "white" }} id="emailText"></span>
                    <button className="btnLogout" id="logoutButton" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        
       {/* Search Movies Section */}
      <div className="container" style={{ marginTop: '100px' }}>
        <form className="form-inline my-4" style={{ display: 'flex', flexDirection: 'row' }} onSubmit={handleSearch}>
          <input className="form-control me-2 custom-search-input" type="search" placeholder="Search Movies" aria-label="Search" name="searchQuery" />
          <button className="btn btn-outline-primary my-2 my-sm-0 custom-search-btn" type="submit">Search</button>
        </form>
        {searchResults.length > 0 && (
          <div
            className={`dropdown ${dropdownOpen ? 'show' : ''}`}
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="btn btn-primary dropdown-toggle" type="button" id="searchResultsDropdown" data-bs-toggle="dropdown" aria-expanded={dropdownOpen}>
              Search Results
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="searchResultsDropdown">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <Link to={`/movie-info/${result}`} onClick={handleDropdownClose}>{result}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>



         {/* Movies Cards Section */}
      <div className="movies-container" id='movie-container'>
        {movies && movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            {/* Link to movie info page with movie.movie_name as parameter */}
            <Link to={`/movie-info/${movie.movie_name}`}>
            <div className="movie-image">
            <img src={movie.image_link} alt=""/>
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <div className="movie_name">{movie.movie_name}</div>
                    <div className="director">{movie.director}</div>
                    <span className="rating-text">{movie.stars}</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">{movie.genre}</div>

                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      


      {/* Sign Up Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                </div>
                {/* New field for confirmation code */}
                <div className="mb-3" id="confirmationCodeField" style={{ display: 'none' }}>
                  <label htmlFor="confirmationCode" className="form-label">Confirmation Code</label>
                  <input type="text" className="form-control" id="confirmationCode" placeholder="Enter confirmation code" />
                </div>
                <button type="submit" className="btn btn-primary" id="signUpButton">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>




      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" id="loginButton">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      


      {/* Footer */}
      <footer className="footer text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque magna id mauris tincidunt, et viverra dui tristique. Curabitur vestibulum tellus in massa fermentum, ac condimentum justo sagittis.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-geo-alt-fill"></i> 123 Street, City, Country</li>
                <li><i className="bi bi-envelope-fill"></i> info@example.com</li>
                <li><i className="bi bi-phone-fill"></i> +1 234 567 890</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Your Movie Review Website. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline text-md-end">
                <li className="list-inline-item"><a href="#"><i className="bi bi-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    
    
    
    </div>

  );
}

export default HomePage;