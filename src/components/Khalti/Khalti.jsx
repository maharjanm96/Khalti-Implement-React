import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import config from './khaltiConfig';
import './index.css';

function Khalti() {
    let checkout = new KhaltiCheckout(config);
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="logo">Umeet</div>
                    <div className="nav-links">
                        <a className="nav-link">Home</a>
                        <a className="nav-link">About</a>
                        <a className="nav-link">Speakers</a>
                        <a className="nav-link">Blog</a>
                        <a className="nav-link">Contact</a>
                    </div>
                    <button className="nav-button">Register</button>
                </div>
                <div className="hero">
                    <div className="hero-text">
                        <div className="hero-subtitle">20-22 January, 2023</div>
                        <div className="hero-title">JOIN THE UI/UX CONFERENCE</div>
                        <button className="hero-button">LOGIN</button>
                        <button onClick={() => checkout.show({ amount: 1000 })} className='hero-button'>Buy Tickets With Khalti</button>

                        {/* <button class="hero-button">Pay With Khalti</button> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Khalti;

