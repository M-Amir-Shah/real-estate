import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Properties from './component/Properties';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Title from './component/Title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        {/* Section: Program */}
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <About />

        {/* Section: Gallery */}
        <Title subTitle="Gallery" title="Properties Photos" />
        <Properties />

        {/* Section: Testimonials */}
        <Title subTitle="TESTIMONIALS" title="What Students Say" />
        <Testimonial />

        {/* Section: Contact */}
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
