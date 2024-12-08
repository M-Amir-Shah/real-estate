import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Area.css';
import img1 from '../images/area1.jpg';
import img2 from '../images/area2.jpg';
import img3 from '../images/area3.jpg';

const Area = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation
            easing: 'ease-in-out', // easing function
            once: true, // animation will only run once
        });
    }, []);
    
    return (
        <div className="Area">
            <div className="area-left" data-aos="fade-left">
                <h3 className="animate">POPULAR AREAS</h3>
                <h2 className="animate">Explore most popular areas</h2>
            </div>
            <div className="area-right" data-aos="fade-right">
                <img src={img1} alt="Area 1" className="area-img" data-aos="zoom-in" />
                <img src={img2} alt="Area 2" className="area-img" data-aos="zoom-in" />
                <img src={img3} alt="Area 3" className="area-img" data-aos="zoom-in" />
            </div>
            
            <div className="listing-container-wrapper">
                <div className="listing-container left" data-aos="fade-up">
                    <h1 className="main-title">5K</h1>
                    <h1 className="sub-title">ACTIVE <br />LISTINGS</h1>
                </div>
                <div className="listing-container center" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="main-title">9K</h1>
                    <h1 className="sub-title">SOLID <br />LISTINGS</h1>
                </div>
                <div className="listing-container right" data-aos="fade-up" data-aos-delay="400">
                    <h1 className="main-title">6K</h1>
                    <h1 className="sub-title">CLIENTS <br />WE'VE SERVED</h1>
                </div>
            </div>
        </div>
    );
};

export default Area;
