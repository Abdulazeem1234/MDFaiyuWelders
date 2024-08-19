import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.name) formErrors.name = 'Name is required';
    if (!form.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!form.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit form logic here (e.g., API call)
      console.log('Form submitted:', form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
          {submitted && <p className="success-message">Thank you for your message!</p>}
        </form>

        <div className="contact-info">
          <h3>Our Location</h3>
          <div className="info-details">
            <p><strong>Address:</strong> melahally road, arehally, belur taluk, hassan district, karnataka.</p>
            <p><strong>Email:</strong> azeemj2abdul@gmail.com</p>
            <p><strong>Phone:</strong>6361167186</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
