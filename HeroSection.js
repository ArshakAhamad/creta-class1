import React from 'react';
import './Hero.css';  // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
   <div class="main-container">
  <div class="left-section">
    <h1>Making Kids Fall in Love with Math!</h1>
    <p>Book your free class with the age group</p>
    
    <div class="age-group-buttons">
      <button>Age 3</button>
      <button>Age 4</button>
      <button>Age 5</button>
      <button>Age 6</button>
      <button>Age 7</button>
    </div>
    
    <div class="cta-button-container">
      <button class="cta-button">Book a Free Live Class</button>
    </div>
    
    <div class="offer-details">
      <p>₹0 For First Class 100% Off</p>
      <p>Booked A Demo Already? <a href="#" class="join-now">JOIN NOW</a></p>
    </div>
  </div>

  <div class="right-section">
<img src="https://ArshakAhamad.github.io/Creta-Class/images/child.png" height={55} width={350.61} alt='Age' />
  </div>

</div>

    </section>
  );
};

export default HeroSection;
