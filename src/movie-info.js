import React from "react";
import "./movie.css";
import { Outlet, Link } from "react-router-dom";
import {useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovies } from './backend.js';
import axios from "axios";
import cheerio from "cheerio";








function MovieInfo() {
    // ... your movie review page code
    const [Movie, setMovie] = useState({}); // State to store the movie

    //get the movie.movie_name from the link
    const movieName = useParams().movie_name;
    console.log(movieName);
    
    useEffect(() => {
        // Fetch movies and filter the movie with matching name
        fetchMovies()
          .then((movies) => {
            const foundMovie = movies.find((movie) => movie.movie_name === movieName);
            setMovie(foundMovie); // Set the found movie in the state
            console.log('Movie Found:', foundMovie); // Print the found movie separately
          })
          .catch((error) => {
            console.log("Error fetching movies:", error);
          });
      }, [movieName]);








    
    const [activeTab, setActiveTab] = useState('overview');
    const changeTab = (tabName) => {
    setActiveTab(tabName);
  };
    return (
        <div className="App">
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Brand */}
                    <Link  className="navbar-brand" to="/">
                        <span className="navbar-text">MovieScope <small>movie review</small></span>
                    </Link> 
                    {/* Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Nav Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* Login and Signup Buttons */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link signup-btn" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link login-btn" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Movie Info Container */}
            <div className="movie-info-container">
                <div className="movie-info-page">
                    {/* Movie Image and Buttons */}
                    <div className="movie-image-buttons">
                        <div className="movie-image1">
                            <img src= {Movie.image_link} alt="" />
                        </div>
                        <div className="movie-buttons">
                            <button className="btnYoutube"><a className="movie-youtube-text" href={Movie.trailer_link}>Watch Trailer</a></button>
                            <button className="btnImdb"><a className="movie-imdb-text" href={Movie.imdb_link}>Go to IMDb page</a></button>
                        </div>
                    </div>

                    {/* Movie Info and Tabs */}
                    <div className="movie-information">
                    <div className="tab-container">
                        {/* Tab Navigation */}
                        <div className="tab-nav">
                        <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => changeTab('overview')}>
                            <span className="tab-btn-text">Overview</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'review' ? 'active' : ''}`} onClick={() => changeTab('review')}>
                            <span className="tab-btn-text">Review</span>
                        </button>
                        </div>

                        {/* Tab Content - Overview */}
                        <div className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`} style={{ marginTop: '50px' }} id="overview">
                        <div className="plotAndDetail">
                        <div className="movie-plot">
                        
                        <h5> Overview</h5>
                        <p className="movie-plot-text">{Movie.overview}</p>

                        <div className="cast">
                        <h5>Cast</h5>
                        <p className="movie-plot-text">{Movie.casts}</p>
                        {/* here there should be cast section */}

                        </div>
                        
                        <h5>Storyline</h5>
                        <p className="movie-plot-text">{Movie.story_line}</p>
                        
                        </div>
                        <div className="movie-details">
                            <p className="movie-details-header">Director:</p><p className="movie-details-text">{Movie.director}</p>
                            <p className="movie-details-header">IMDb Rating: ⭐️{Movie.imdb_rating}</p>
                            <p className="movie-details-header">Genre:</p><p className="movie-details-text">{Movie.genre}</p>
                            <p className="movie-details-header">Runtime:</p><p className="movie-details-text">{Movie.run_time}</p>
                            <p className="movie-details-header">Release Date:</p><p className="movie-details-text">{Movie.release_date}</p>
                            <p className="movie-details-header">Writer:</p><p className="movie-details-text">{Movie.writer}</p>
                        </div>
                        </div>
                        </div>

                        {/* Tab Content - Review */}
                        <div className={`tab-content ${activeTab === 'review' ? 'active' : ''}`} style={{ marginTop: '50px' }} id="review">
                        <h2>Movie Review</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at dapibus turpis. Donec convallis sagittis est, eu lacinia tortor interdum sed.</p>
                        </div>
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

export default MovieInfo;
