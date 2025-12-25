import React, { useState } from 'react';
import './contact.css';
//import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>

    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <span >Contact Us</span> <br></br>
          <i>We're here to help with all your grocery needs</i>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="contact-intro">
            Have questions about our products or need assistance with your order? 
            Reach out to us through any of the following channels.
          </p>
          
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Our Store</h3>
              <p>123 Main Market, City Center</p>
              <p>New Delhi - 110001</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+91 9958591366</p>
              <p>+91 9520680204</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@fcrplus.com</p>
              <p>orders@fcrplus.com</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Opening Hours</h3>
              <p>Monday - Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-map">
        <div className="container">
          <div className="form-map-container">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.812350496663!2d77.4481495150836!3d28.5872729824325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9f8e589de3%3A0x5a6cf5f41e92b21b!2sBloom%20International%20School!5e0!3m2!1sen!2sin!4v1692882134567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer home delivery?</h3>
              <p>Yes, we offer free home delivery for orders above ₹500 within a 5km radius. For orders below ₹500, a nominal delivery charge of ₹30 applies.</p>
            </div>
            
            <div className="faq-item">
              <h3>What are your payment options?</h3>
              <p>We accept cash on delivery, UPI payments, credit/debit cards, and mobile wallet payments for both in-store and online orders.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I place bulk orders for events?</h3>
              <p>Absolutely! We cater to bulk orders for weddings, parties, and corporate events. Please contact us at least 3 days in advance for bulk orders.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you source products locally?</h3>
              <p>Yes, we prioritize locally sourced products and support local farmers and producers. About 40% of our products come from within the state.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;