import React from 'react';
import './about.css'; // Import the CSS file
//import Header from '../components/Header';
const About = () => {
  return (
    <>
    
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span>About Our Store</span> <br></br>
          <i>Your trusted local grocery store since 2019</i>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>Our Story</h2>
              <p>
                our store was established in 2019 with a simple mission: 
                to provide our community with high-quality essential groceries at fair prices. 
                What started as a small neighborhood store has grown to become a trusted name 
                for flour, cold drinks, rice, and other daily necessities.
              </p>
              <p>
                We take pride in sourcing the best products and maintaining personal relationships 
                with our customers. Despite our growth, we've stayed true to our roots as a 
                family-run business where every customer is treated like family.
              </p>
            </div>
            <div className="history-image">
              <img 
                src="ChatGPT Image Aug 28, 2025, 03_30_34 PM.png" 
                alt="Our store" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Our Small But Mighty Team</h2>
          <p className="team-intro">
            Though we're a small team, we're dedicated to providing you with the best service and quality products.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="WhatsApp Image 2025-08-28 at 15.43.12_50967a13.jpg" alt="Shop Owner" />
              </div>
              <h3>Ankit chauhan</h3>
              <p className="member-role">Owner & Manager</p>
              <p className="member-desc">
                With over 6 years of experience in the grocery business, Ankit ensures that 
                only the highest quality products reach your home. He personally selects every 
                item in the store.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Shop Helper" />
              </div>
              <h3>Vikram Singh</h3>
              <p className="member-role">Assistant & Delivery</p>
              <p className="member-desc">
                Vikram has been with the store for 5 years and handles everything from customer 
                service to home deliveries. He's known for his friendly smile and helpful nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✅</div>
              <h3>Quality Assurance</h3>
              <p>We carefully select each product to ensure it meets our high standards.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>We know our customers by name and remember their preferences.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>We offer competitive prices without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="about-visit">
        <div className="container">
          <h2>Visit Us</h2>
          <div className="visit-content">
            <div className="visit-info">
              <h3>Store Hours</h3>
              <p>Monday - Saturday: 6:00 AM - 11:00 PM</p>
              <p>Sunday: 6:00 AM - 12:00 PM</p>
              
              <h3>Address</h3>
              <p>123 Main Market, City Center</p>
              <p>New Delhi - 110001</p>
              
              <h3>Contact</h3>
              <p>Phone: 9958591366</p>
              <p>Email: chauhanshivam@gmail.com</p>
            </div>
            <div className="visit-image">
              <img 
                src="https://images.unsplash.com/photo-1566842600175-97dca3dfc3c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Store location" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
