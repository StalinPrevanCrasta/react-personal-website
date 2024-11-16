import React, { useRef } from 'react';
import './styles/Contact.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import gmailLogo from './assets/gmail.svg';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then((result) => {
            toast.success("Message sent successfully!");
            form.current.reset();
        })
        .catch((error) => {
            toast.error("An error occurred. Please try again.");
        });
    };

    return (
        <div className="contactMe">
            <div className="contact-wrapper">
                <div className="left-section">
                    <form ref={form} method="POST" onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Name" required />
                        <input type="email" name="user_email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows="6" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <ToastContainer />
                <div className="right-section">
                    <ul className="contact-list">
                        <li className="list-item">Mangalore, Karnataka, India</li>
                        <li className="list-item">9606714990</li>
                        <li className="list-item">stalinprevancrasta@gmail.com</li>
                    </ul>
                    <hr />
                    <ul className="social-media-list">
                        <li className="list-item">
                            <a href="https://github.com/StalinPrevanCrasta" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" className="social-logo" />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="https://www.linkedin.com/in/stalinprevancrasta/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="mailto:stalinprevancrasta@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={gmailLogo} alt="Gmail" className="social-logo" />
                            </a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Contact;
