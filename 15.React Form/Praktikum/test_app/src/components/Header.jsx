// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header() {
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top pt-3">
        <div className="container-fluid">
            <a className="navbar-brand ms-3" href="#"><strong>Simple Header</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav pe-4">
                <li className="nav-item">
                <a className="nav-link home-bg me-3" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link me-3" href="#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link me-3" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link me-3" href="#">FAQs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
);
}

export default Header