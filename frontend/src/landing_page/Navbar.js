import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src='/assets/logo.svg' alt='logo' style={{width: "130px"}}/>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;