import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Food Recipes</h1>
        <div className="about-divider"></div>
        <p className="about-lead">
          Discover, cook, and share the world's most delicious recipes right from your kitchen.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>🍳 10,000+ Recipes</h3>
            <p>Access an endless library of culinary inspiration powered by Edamam.</p>
          </div>
          <div className="feature-card">
            <h3>🥗 Nutrition Data</h3>
            <p>Track calories and ingredients to maintain a healthy lifestyle.</p>
          </div>
          <div className="feature-card">
            <h3>✨ Modern Design</h3>
            <p>Enjoy a beautiful, sleek modern layout created just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
