import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../css/Navbar.css';
import logo from '../images/logo.png';
import user from '../images/user.png';
import phone from '../images/phone.png';

// import Home from './component/Home'; // Correct import path
// import About from './component/About';
// import Properties from './component/Properties';
// import Service from "./component/Services";
// import Testimonial from './component/Testimonial';
// import Contact from './component/Contact';



function Navbar() {
    const navRef = useRef();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <nav ref={navRef}>
                <a className="btn-color" href=".\component\Home">HOME</a>
                <a className="btn-color" href="/#">ABOUT</a>
                <a className="btn-color" href="/#">PROPERTIES</a>
                <a className="btn-color" href="/#">SERVICES</a>
                <a className="btn-color" href="/#">TESTIMONIALS</a>
                <a className="btn-color" href="/#">CONTACT</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={toggleNavbar}
                >
                    <FaTimes />
                </button>
            </nav>

            <div className={`right-icons ${isNavbarOpen ? "navbar-open" : ""}`}>
                <img src={phone} alt="Phone Icon" className="icon" />
                <span className="phone-number">888-908-9102</span>
                <img src={user} alt="User Icon" className="icon" />
                {/* Only show the FaBars icon when the navbar is closed */}
                {!isNavbarOpen && (
                    <button
                        className="nav-btn"
                        onClick={toggleNavbar}
                    >
                        <FaBars />
                    </button>
                )}
            </div>
        </header>
    );
}

export default Navbar;
