import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="toggleDarkMode" />
                        <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="toggleDarkMode">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypesropTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
NavBar.defaultProps = {
    title: "Text Utils",
    aboutText: "About Us"
}