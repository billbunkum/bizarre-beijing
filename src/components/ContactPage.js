import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>Contact Us</h2>
        <form action="https://formspree.io/info@bizarrebeijing.com" 
          method="POST"
          className="contact-page-content"
        >
          <div className="form-group">
            <label for="formGroupNameInput">Name:</label>
            <input type="text" 
              className="form-control" 
              id="formGroupNameInput"
              placeholder="Your name here"
              name="name"
            />
          </div>
          <div className="form-group">
            <label for="formGroupEmailInput">E-mail:</label>
            <input type="email"
              className="form-control"
              id="formGroupEmailInput"
              placeholder="jane.doe@something.com"
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="formGroupMessageTextarea">Message:</label>
            <textarea className="form-control"
              id="formGroupMessageTextarea"
              rows="5"
              placeholder="Questions about a tour?"
              name="message"
            ></textarea>
          </div>
          <div className="send-button">
            <button className="btn btn-outline-light btn-lg"
              type="submit">SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
};  

export default ContactPage;