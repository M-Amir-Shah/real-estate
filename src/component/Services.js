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

  return (
    <div className="service-cards-container">
        <div className="area-left" data-aos="fade-left">
                <h3 className="animate">OUR SERVICES</h3>
                <h2 className="animate">Top real estate <br/>
                services available</h2>
            </div>
            
      {services.map(service => (
        <ServiceCard key={service.title} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServiceCards;
