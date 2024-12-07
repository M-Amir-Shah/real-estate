import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../css/Navbar.css';
import logo from '../images/logo.png';
import user from '../images/user.png';
import phone from '../images/phone.png';

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
                <a href="/#">HOME</a>
                <a href="/#">ABOUT</a>
                <a href="/#">PROPERTIES</a>
                <a href="/#">SERVICES</a>
                <a href="/#">TESTIMONIALS</a>
                <a href="/#">CONTACT</a>
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
                <button
                    className="nav-btn"
                    onClick={toggleNavbar}
                >
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
