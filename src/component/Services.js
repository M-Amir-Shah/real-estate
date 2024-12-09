import React from 'react';
import { Button, Typography } from 'antd';
import { HomeOutlined, CreditCardOutlined, MergeOutlined, SearchOutlined, AppstoreAddOutlined, CameraOutlined } from '@ant-design/icons';
import '../css/Services.css'; // Import the CSS file

const { Title, Paragraph } = Typography;

const iconMap = {
  "Sell your home": <HomeOutlined className="icon" />,
  "Home loans": <CreditCardOutlined className="icon" />,
  "Legal services": <MergeOutlined className="icon" />,
  "Home inspection": <SearchOutlined className="icon" />,
  "Evaluation": <AppstoreAddOutlined className="icon" />,
  "Photoshoot": <CameraOutlined className="icon" />
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="sell-home-card">
      <div className="icon-container">
        {iconMap[title]}  {/* Dynamically render the appropriate icon */}
      </div>
      <Title level={3} className="card-title">
        {title}
      </Title>
      <Paragraph className="card-description">
        {description}
      </Paragraph>
      <Button type="link" className="read-more-button">
        READ MORE
      </Button>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    { title: "Sell your home", description: "We sell your home at the best market price" },
    { title: "Home loans", description: "We offer you free consultancy to get a loan" },
    { title: "Legal services", description: "Expert legal help for all related property items" },
    { title: "Home inspection", description: "We make sure you get what you were promised" },
    { title: "Evaluation", description: "We offer you free evaluation to get a mortgage loan" },
    { title: "Photoshoot", description: "We prepare your home visual presentation" },
  ];

  // Split the services into two groups: first 3 and the remaining 3
  const firstRowServices = services.slice(0, 3);
  const secondRowServices = services.slice(3);

  return (
    <div className="service-section">
      {/* Section 1: Heading */}
      <div className="section-header" data-aos="fade-left">
        <h3 className="animate">OUR SERVICES</h3>
        <h2 className="animate">
          Top real estate <br />
          services available
        </h2>
      </div>  

      {/* Section 2: First Row of Cards */}
      <div className="service-cards-row">
        {firstRowServices.map(service => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
        <br/>
      {/* Section 3: Second Row of Cards */}
      <div className="service-cards-row">
        {secondRowServices.map(service => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
