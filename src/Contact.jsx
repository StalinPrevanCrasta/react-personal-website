import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <div class="contactMe">
            <h2>Connect with Me</h2>
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
                <ul class="contact-list">
                    <li class="list-item">Mangalore, Karnataka, India</li>
                    <li class="list-item">9606714990</li>
                    <li class="list-item">stalinprevancrasta@gmail.com</li>

                </ul>
                <hr></hr>
                <ul className="social-media-list">
                    <li class="list-item">Github</li>
                    <li class="list-item">linkedin</li>
                    <li class="list-item">gmail</li>
                </ul>
                <hr></hr>
            </div>
            </div>
        </div>
    );
}


export default Contact;