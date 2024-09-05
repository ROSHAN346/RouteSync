import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactbody'>
      <section class="hero-section-container">
        <h1 class="hero-title">Get in touch</h1>
        <p class="hero-subtitle">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
    </section>

    <section class="contact-options-container">
        <div class="contact-box 1">
            <div class="contact-icon">📞</div>
            <h2 class="contact-title">Talk to Sales</h2>
            <p class="contact-description">Interested in DTC's software? Just pick up the phone to chat with a member of our sales team.</p>
            <a href="tel:+35315124400" class="contact-number">+353 1 512 4400</a>
        </div>
        <div class="contact-box 2">
            <div class="contact-icon">💬</div>
            <h2 class="contact-title">Contact Customer Support</h2>
            <p class="contact-description">Sometimes you need a little help from your friends. Or a DTC support rep. Don’t worry… we’re here for you.</p>
        </div>
    </section>

    <section class="map-section-container">
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094286!2d144.95543131550473!3d-37.81720957975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e56c8be106e!2sTwo%20Logan%20Square%20Suite%201820%20Philadelphia%2C%20PA%2019103!5e0!3m2!1sen!2sus!4v1591266465180!5m2!1sen!2sus"
                class="map-frame"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0">
            </iframe>
            <div class="contact-info-container">
                <p class="contact-info-text">DTC, Inc.<br/>
                   Two Logan Square Suite #1820,<br/>
                   Philadelphia, PA 19103</p>
                <p class="contact-info-text">Email: contact@dtc.com</p>
                <p class="contact-info-text">Phone: (215) 979-8030</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact
