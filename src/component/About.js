import React, { useEffect } from 'react';
import '../css/About.css';
import about from '../images/About.jpg';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const elementsToObserve = document.querySelectorAll('.animate');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <div className="about-left animate">
        <img src={about} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3 className="animate">WHO WE ARE</h3>
        <h2 className="animate">We help clients buy and sell houses since 1989</h2>
        <p className="animate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam eaque inventore voluptatum rem consectetur quae magni optio quis incidunt?</p>
        <button className="animate">VIEW MORE</button>
      </div>
    </div>
  );
};

export default About;
