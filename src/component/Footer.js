import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../css/Footer.css'; // Import the CSS file
import img1 from '../images/footer1.jpg';
import img2 from '../images/footer2.jpg';

const { Text, Title } = Typography;
const { Footer } = Layout;

const PropertyFooter = () => {
  return (
    <Footer className="footer-container">
      <Row justify="center" gutter={16}>
        <Col xs={24} sm={12} md={8} className="footer-column">
          <Title level={4} className="footer-column-title">About Us</Title>
          <Text className="footer-column-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?
          </Text>
          {/* Move the social media icons here */}
          <div className="social-media-icons">
            <Space size="large">
              <a className="social-icon facebook">
                <FacebookOutlined />
              </a>
              <a className="social-icon instagram">
                <InstagramOutlined />
              </a>
              <a className="social-icon twitter">
                <TwitterOutlined />
              </a>
              <a className="social-icon youtube">
                <YoutubeOutlined />
              </a>
            </Space>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} className="footer-column">
          <Title level={4} className="footer-column-title">Contact Us</Title>
          <Text className="footer-column-text">
            <EnvironmentOutlined style={{ marginRight: 8 }} /> Address: 10845 Griffith Peak Dr, Las Vegas, NV 89135
          </Text>
          <br />
          <Text className="footer-column-text">
            <PhoneOutlined style={{ marginRight: 8 }} /> Phone: +91 879 098 8901
          </Text>
          <br />
          <Text className="footer-column-text">
            <PhoneOutlined style={{ marginRight: 8 }} /> Phone: +91 123 678 0912
          </Text>
          <br />
          <Text className="footer-column-text">
            <MailOutlined style={{ marginRight: 8 }} /> Email: office23@gmail.com
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8} className="footer-column">
          <Title level={4} className="footer-column-title">Latest Properties</Title>
          <div className="property-item">
            <div className="property-profile">
              <img src={img1} alt="Villa with amazing view" className="property-image" />
              <div className="property-details">
                <Text className="property-name">Villa amazing view</Text>
                <Text className="property-price">$278.98</Text>
              </div>
            </div>
          </div>
          <div className="property-item">
            <div className="property-profile">
              <img src={img2} alt="Sea View Villa" className="property-image" />
              <div className="property-details">
                <Text className="property-name">Sea View Villa</Text>
                <Text className="property-price">$789.23</Text>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* Move this row below social media icons */}
      <Row justify="center" className="footer-bottom">
        <Col>
          <Text className="footer-text">Copyright Real Estate, All Rights Reserved.</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default PropertyFooter;
