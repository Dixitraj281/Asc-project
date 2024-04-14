import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSendEmail = () => {
    // Collect input field values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Construct email message
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    const mailToLink = `mailto:saleassociates@gmail.com?subject=${subject}&body=${body}`;

    // Open user's default email client with pre-filled email message
    window.location.href = mailToLink;
  };

  return (
    <div className="container-body">
      <div className="container-main">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">First Floor, 21 North Avenue Road,</div>
              <div className="text-two"> West punjabi Bagh, New Delhi-110026</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 96545 90021</div>
              <div className="text-two"></div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">saleassociates@gmail.com</div>
              <div className="text-two">granthkohli@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of queries related to my Products, you can send me a message from here. It's my pleasure to help you.</p>
            <form>
              <div className="input-box">
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" id="message" placeholder="Enter your message" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" onClick={handleSendEmail} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
