import './App.css';
import "./graph.js";


function App() {
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
                  <a className="nav-link" href="#">Movies</a>
                </li>
              </ul>
            </div>
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

        {/* Search Movies Section */}
        <div className="container" style={{ marginTop: '100px' }}>
          <form className="form-inline my-4" style={{ display: 'flex', flexDirection: 'row' }}>
            <input className="form-control me-2 custom-search-input" type="search" placeholder="Search Movies"
              aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0 custom-search-btn" type="submit">Search</button>
          </form>
        </div>

        {/* Movies Cards Section */}
        <div className="movies-container">
          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="/images/breaking.jpg" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="../images/fightclub.gif" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more movie-card divs here */}

          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="../images/batman.gif" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="../images/bladerunner.gif" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="../images/fightclub.jpg" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card">
            {/* Movie card content */}
            <div className="movie-image">
              <img src="../images/breaking.jpg" alt="Movie 1" />
              <div className="movie-overlay">
                <div className="movie-info">
                  <div className="rating">
                    <span className="rating-text">8.5</span>
                    <span className="rating-star">⭐️</span>
                  </div>
                  <div className="genre">Action</div>
                  <div className="director">Director: John Doe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more movie-card divs here */}


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
                <div className="mb-3">
                  <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="signupConfirmPassword" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
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
                <button type="submit" className="btn btn-primary">Login</button>
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

export default App;
