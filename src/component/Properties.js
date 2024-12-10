import React from 'react';
import { Card, Badge, Button } from 'antd';
import { ShareAltOutlined, PlusOutlined, VideoCameraOutlined, EnvironmentOutlined, CameraOutlined, HeartFilled } from '@ant-design/icons'; // Using HomeOutlined
import '../css/Properties.css';
import bath from '../images/bath.png'
import bedroom from '../images/bedroom.png'
import square from '../images/square-fit.png'
import user from '../images/user.png'
import property1 from '../images/property1.jpg'
import property2 from '../images/property2.jpg'
import property3 from '../images/property3.jpg'
import property4 from '../images/property4.jpg'
import property5 from '../images/property5.jpg'
import property6 from '../images/property6.jpg'




const CustomCard = ({ title, price, image, location, description, bathCount, bedroomCount, squareFeet, userName, userImage }) => {
    return (
        <div className='main'>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={image}  // Dynamically change the image
                        />
                        <div className="badges">
                            <Badge className="badge-left" count="Featured" />
                            <div className="badge-right">
                                <Badge count="Sales" />
                                <Badge count="Active" />
                            </div>
                        </div>
                        <div className="bottom-icons">
                            <div className="location">
                                <EnvironmentOutlined /> {location}
                            </div>
                            <div className="video-camera">
                                <VideoCameraOutlined />
                                <CameraOutlined />
                            </div>
                        </div>
                    </div>
                }
                bordered={false}
            >
                <div className="card-details">
                    <h3>{title}</h3> {/* Dynamically change the title */}
                    <h4>{price}</h4> {/* Dynamically change the price */}
                    <p>{description}</p> {/* Dynamically change the description */}
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            {bathCount} {/* Dynamically change the number of baths */}
                        </span>
                        <span>
                            <img src={bedroom} alt="Bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            {bedroomCount} {/* Dynamically change the number of bedrooms */}
                        </span>
                        <span>
                            <img src={square} alt="Square feet" style={{ width: 20, height: 20, marginRight: 5 }} />
                            {squareFeet} sq ft {/* Dynamically change square footage */}
                        </span>
                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={userImage}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>{userName}</span> {/* Dynamically change the user's name */}
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined style={{ color: 'red' }} />} />
                            <Button icon={<HeartFilled style={{ color: 'red' }} />} />
                            <Button icon={<PlusOutlined style={{ color: 'red' }} />} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
const App = () => {
    const cardsData = [
        {
            title: "Villa with Amazing View",
            price: "$ 215.23",
            image: property1,
            location: "6 Downtown, Las Vegas",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 250,
            userName: "Alice Adams",
            userImage: user
        },
        {
            title: "Townhouse for Sale",
            price: "$ 345.18",
            image: property2,
            location: "Meadows Village, Las Vegas",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 450,
            userName: "Drew Alice",
            userImage: user
        },
        {
            title: "Duplex sea facing for rent",
            price: "$ 652.18",
            image: property3,
            location: "49 DC townhall alex",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 129,
            userName: "Fursi Bam",
            userImage: user
        },
        {
            title: "Villa with Side View",
            price: "$ 876.13",
            image: property4,
            location: "Underground street 20 texax",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 453,
            userName: "Neon Alice",
            userImage: user
        },
        {
            title: "Awesome villa for rent",
            price: "$ 341.83",
            image: property5,
            location: "Rubari London Hills",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 320,
            userName: "Firari Alice",
            userImage: user
        },
        {
            title: "Street Farm for sale",
            price: "$ 675.23",
            image: property6,
            location: "Miami, FL",
            description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.",
            bathCount: 3,
            bedroomCount: 4,
            squareFeet: 340,
            userName: "Jordan Bram",
            userImage: user
        }
    ];

    return (
        <div>
            <h3 className='h3'>PROPERTIES</h3>
            <h2 className='h2'>Explore the latest<br />
                properties available</h2>
            <div className="cards-section">
                <div className="section">
                    {cardsData.slice(0, 3).map((card, i) => (
                        <CustomCard key={i} {...card} />
                    ))}
                </div>
                <div className="section">
                    {cardsData.slice(3).map((card, i) => (
                        <CustomCard key={i + 3} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
