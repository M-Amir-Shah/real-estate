import React from "react";
import { Form, Input, Button } from "antd";
import "../css/Contact.css";

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Form Submitted: ", values);
  };

  return (
    <div className="contact-container">
      <div className="form-box">
        <h2>Send us a message today</h2>
        <Form
          name="contact-form"
          layout="vertical"
          onFinish={onFinish}
          className="contact-form"
        >
          <Form.Item name="name">
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Enter your valid email" />
          </Form.Item>
          <Form.Item name="phone">
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item name="message">
            <Input.TextArea rows={4} placeholder="Enter your message here..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button">
              SEND EMAIL
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="info-box">
        <h3>REACH US</h3>
        <h2>Get in touch with us<br/> today and our team <br/>will assist you</h2>
        <p>
          Our experts and developers would love to contribute their expertise
          and insights and help you today. Contact us to help you plan your next
          transaction, either buying or selling a home.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
