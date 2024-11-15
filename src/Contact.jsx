import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <div className="contactMe">
            <div className="contact-wrapper">
            <div className="left-section">
                <form action="" method="POST">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Message" rows="5" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="right-section">
                <ul className="contact-list">
                    <li className="list-item">Mangalore, Karnataka, India</li>
                    <li className="list-item">9606714990</li>
                    <li className="list-item">stalinprevancrasta@gmail.com</li>

                </ul>
                <hr></hr>
                <ul className="social-media-list">
                    <li className="list-item">Github</li>
                    <li className="list-item">linkedin</li>
                    <li className="list-item">gmail</li>
                </ul>
                <hr></hr>
            </div>
            </div>
        </div>
    );
}


export default Contact;