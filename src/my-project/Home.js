import React from 'react';
import './Home.css';
import { FaFilePowerpoint, FaVideo, FaLanguage, FaPaintBrush, FaChartBar, FaDatabase } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className='homecontainer-bar'>
                    <div className="home-content">
                        <header className="home-header">
                            <div className='titlebar'>
                                <img src="EZ.webp" alt="EZ Works Logo" className="home-logo" />
                                <h1 className="home-title"> Works</h1>
                            </div>
                            <h2 className="home-subtitle">Suite Of Business Support Services</h2>
                            <p className="home-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                            </p>

                        </header>
                    </div>
                    <div className="home-services">
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaFilePowerpoint className="home-service-icon" />
                                <h3 className="home-service-title">Presentation Design</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaVideo className="home-service-icon" />
                                <h3 className="home-service-title">Audio - Visual Production</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaLanguage className="home-service-icon" />
                                <h3 className="home-service-title">Translation Services</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaPaintBrush className="home-service-icon" />
                                <h3 className="home-service-title">Graphic Design</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaChartBar className="home-service-icon" />
                                <h3 className="home-service-title">Research & Analytics</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="home-service">
                            <div className='home-bar'>
                                <FaDatabase className="home-service-icon" />
                                <h3 className="home-service-title">Data Processing</h3>
                            </div>
                            <p className="home-service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="home-contact-form">
                    <input type="email" placeholder="Email Address" className="home-contact-input" />
                    <button className="home-contact-button">Contact Me</button>
                </div>

            </div>

        </>
    );
}

export { Home };
