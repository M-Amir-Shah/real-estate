import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Properties from './component/Properties';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Area from './component/Area';
import Services from './component/Services';

const { Header, Content } = Layout;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <Layout className="main">
      <Navbar />
        <Home />
        <About />
        <Area />
        <Properties />
        <Services />
        <Testimonial />
        <Contact />
      <Footer />

    </Layout>
  );
};

export default App;
