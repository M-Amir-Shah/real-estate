import React from 'react';
import { Typography, Rate } from 'antd';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';
import client4 from '../images/client4.jpg';
import client5 from '../images/client5.jpg';
import client6 from '../images/client6.jpg';
import '../css/Testimonial.css';

const { Title, Paragraph } = Typography;

const profileData = [
  { name: "Dana Gilmore", performance: "Excellent team!", image: client1 },
  { name: "Ana Anderson", performance: "Very good work", image: client2 },
  { name: "Albert Adame", performance: "Very well", image: client3 },
  { name: "Dana Gilmore", performance: "Excellent team!", image: client4 },
  { name: "Alex Gilmore", performance: "Excellent team!", image: client5 },
  { name: "Sivay Ashbi", performance: "Excellent team!", image: client6 },
];

const TestimonialCard = ({ description, client }) => {
  const { name, performance, image } = client || {};

  return (
    <div className="testimonial-home-card">
      <div className="profile-section">
        <img src={image} alt={name} className="profile-image" />
        <div className="profile-info">
          <Title level={4} className="profile-name">{name}</Title>
          <Paragraph className="profile-performance">{performance}</Paragraph>
        </div>
      </div>
      <Paragraph className="card-description">
        {description}
      </Paragraph>
      <Rate allowHalf defaultValue={5} className="star-rating" />
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[0] },
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[1] },
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[2] },
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[3] },
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[4] },
    { description: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication", client: profileData[5] },
  ];

  const firstRowTestimonials = testimonials.slice(0, 3);
  const secondRowTestimonials = testimonials.slice(3);

  return (
    <div className="testimonial-section">
      <div className="section-header" data-aos="fade-left">
        <h3 className="animate">OUR TESTIMONIALS</h3>
        <h2 className="animate">
          What are our clients <br />
          saying about us
        </h2>
      </div>

      <div className="testimonial-cards-row">
        {firstRowTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} description={testimonial.description} client={testimonial.client} />
        ))}
      </div>
      <br />
      <div className="testimonial-cards-row">
        {secondRowTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} description={testimonial.description} client={testimonial.client} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
