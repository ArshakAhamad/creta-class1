import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const Header = () => {
      // NavButton component
  const NavButton = ({ text }) => (
    <button className="nav-button">
      {text} <span role="img" aria-label="icon">🍪</span>
    </button>
  );

 // ContactInfo component
 const ContactInfo = () => (
  <div className="contact">
<img src="https://ArshakAhamad.github.io/Creta-Class/images/contact.png"  alt="Contact info image" />
  </div>
);


    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login route
      };


  return (
    <header>
        <img src="https://ArshakAhamad.github.io/Creta-Class/images/logo.png" height={52} width={257} alt="Number Sense" />
        <div className="nav-buttons">
        <NavButton text="ABOUT" />
        <NavButton text="MATH" />
      </div>
      <ContactInfo />
      <button className="login-btn" onClick={handleLoginClick}>⭐Login</button>
    </header>
  );
};

export default Header;
