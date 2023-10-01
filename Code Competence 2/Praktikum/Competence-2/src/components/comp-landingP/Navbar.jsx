function Navbar() {
    return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="logo.png" alt="logo" className="navbar-logo" />
                eduTech
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
            >
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item ms-4">
                    <a className="nav-link" href="#projects">
                    Project
                    </a>
                </li>
                <li className="nav-item ms-4">
                    <a className="nav-link" href="#contact">
                    Contact
                    </a>
                </li>
                <li className="nav-item ms-4">
                    <a className="nav-link" href="#about-us">
                    About Us
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default Navbar;