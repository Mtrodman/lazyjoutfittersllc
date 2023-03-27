import './contact.css'
import { useState } from "react";

function ContactForm() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/Contact/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong with contacts form');
      }
  
      const data = await response.json();
      console.log(data);
      // handle success response
    } catch (error) {
      console.error('Error:', error);
      // handle error response
    }
  };

  return (
    <main className="formbody">
      <h1 className="formtitle">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="formtext">
            <label htmlFor="firstName">First Name</label>
            <br/>
            <input
              required
              value={contact.firstName}
              onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="formtext">
            <label htmlFor="lastName">Last Name</label>
            <br/>
            <input
              required
              value={contact.lastName}
              onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="row">
          <div className="formtext">
            <label htmlFor="email">Email</label>
            <br/>
            <input
              type="email"
              required
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="formtext">
            <label htmlFor="phone">Phone</label>
            <br/>
            <input
              type="tel"
              required
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className="form-control"
              id="phone"
              name="phone"
            />
          </div>
        </div>
        <div className="formtext">
          <label htmlFor="message">Message</label>
          <br/>
          <textarea
            required
            value={contact.message}
            onChange={(e) => setContact({ ...contact, message: e.target.value })}
            className="form-control"
            id="message"
            name="message"
          ></textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Send" />
      </form>
    </main>
  );
}

export default ContactForm;