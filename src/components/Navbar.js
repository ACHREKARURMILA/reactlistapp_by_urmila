import React from 'react'
import Navstyle from './Navstyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-primary justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
  <a className="navbar-brand" href="#"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="" width="200px"/> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link3</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      </ul>
    
  </div>
</nav>
</nav>
  
    
    
    )
}

export default Navbar;
