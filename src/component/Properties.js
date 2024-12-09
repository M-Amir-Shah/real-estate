import React from 'react';
import { Card, Badge, Button } from 'antd';
import { ShareAltOutlined, HeartOutlined, PlusOutlined, VideoCameraOutlined, EnvironmentOutlined, CameraOutlined } from '@ant-design/icons'; // Using HomeOutlined
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

const CustomCard = () => {
    return (
        <div>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property1}
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
                                <EnvironmentOutlined /> 6Downtown, Las Vegas
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
                    <h3>Villa with Amazing View</h3>
                    <h4>$ 213.23</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            250 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Alice adams</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property2}
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
                                <EnvironmentOutlined /> Meadows Village, Las Vegas
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
                    <h3>Townhouse for Sale</h3>
                    <h4>$ 345.18</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            450 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Drew Alice</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property3}
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
                                <EnvironmentOutlined /> 49 DC townhall alex
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
                    <h3>Duplex sea facing for rent</h3>
                    <h4>$ 652.18</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            129 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Fursi Bam</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property4}
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
                                <EnvironmentOutlined /> Underground street 20 texax
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
                    <h3>Villa with Side View</h3>
                    <h4>$ 876.13</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            453 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Neon Alice</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property5}
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
                                <EnvironmentOutlined /> 6Rubari London Hills
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
                    <h3>Awesome villa for rent</h3>
                    <h4>$ 341.83</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            320 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Firari Alice</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='container'
                style={{ width: 300 }}
                cover={
                    <div className="card-cover">
                        <img
                            alt="property"
                            src={property6}
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
                                <EnvironmentOutlined /> Northean fersh alice
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
                    <h3>VStreet Farm for sale</h3>
                    <h4>$ 675.23</h4>
                    <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                    <div className="icon-details">
                        <span>
                            <img src={bath} alt="Bathtub" style={{ width: 20, height: 20, marginRight: 5 }} />
                            3
                        </span>
                        <span>
                            <img src={bedroom} alt="bedroom" style={{ width: 20, height: 20, marginRight: 5 }} />
                            4
                        </span>
                        <span>
                            <img src={square} alt="sq" style={{ width: 20, height: 20, marginRight: 5 }} />
                            340 sq ft
                        </span>

                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="user-left">
                            <img
                                src={user}
                                alt="user"
                                className="user-avatar"
                            />
                            <span>Jordan Bram</span>
                        </div>
                        <div className="user-right">
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                            <Button icon={<PlusOutlined />} />
                        </div>
                    </div>
                </div>
            </Card>
            
        </div>

    );
}

export default CustomCard;
