import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand" >NewsBus</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">Sports </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Country
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Comming soon...</Link></li>
                  {/* <li><Link className="dropdown-item" to="#">Action</Link></li> */}
                  {/* <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
