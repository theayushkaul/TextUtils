import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
        <>
        <nav className = {`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
          <div className = "container-fluid">
            <Link className = "navbar-brand" to="/.">{props.title}</Link>
            <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id="navbarSupportedContent">
              <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                <li className = "nav-item">
                  <Link className = "nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className = "nav-item">
                  <Link className = "nav-link" to="/about">{props.aboutText}</Link>
                </li>
              </ul>
              <div className="btn btn-primary rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
              <div className="btn btn-danger rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
              <div className="btn btn-secondary rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('secondary')}}></div>
              <div className="btn btn-success rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
              <div className="btn btn-info rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('info')}}></div>
              <div className="btn btn-warning rounded mx-2" style = {{height:'17px',width:'15px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
              <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'EnableDarkMode':'EnableLightMode'}</label>
            </div>
            </div>
          </div>
        </nav> 
        </>
    );
}
Navbar.protoTypes = {
    // .isRequired tells the user that this prop is required for jsx to run properly
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// These props are used if not given by the user
Navbar.defaultProps = {
    title: 'TitleName',
    aboutText: 'About'
}

export default Navbar;