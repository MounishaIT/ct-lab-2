import React from 'react';

const ContactPage = () => {
  const styles = {
    contactPage: {
      backgroundColor: '#f7f7f7',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '28px',
      margin: '0 0 20px',
    },
    intro: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    contactForm: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    formTitle: {
      fontSize: '20px',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      resize: 'vertical',
    },
    submitButton: {
      backgroundColor: '#ff6600',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    submitButtonHover: {
      backgroundColor: '#ff5500',
    },
    contactInfo: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    infoTitle: {
      fontSize: '20px',
      marginBottom: '20px',
    },
    infoText: {
      fontSize: '16px',
      margin: '0 0 10px',
    },
    infoStrong: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.contactPage}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.intro}>If you have any questions or inquiries, feel free to get in touch with us. We're here to help you with your cake orders and any other information you may need.</p>

      <div style={styles.contactForm}>
        <h2 style={styles.formTitle}>Contact Form</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>

      <div style={styles.contactInfo}>
        <h2 style={styles.infoTitle}>Contact Information</h2>
        <p style={styles.infoText}><strong style={styles.infoStrong}>Address:</strong> 1234 Cake Street, City, Country</p>
        <p style={styles.infoText}><strong style={styles.infoStrong}>Phone:</strong> (123) 456-7890</p>
        <p style={styles.infoText}><strong style={styles.infoStrong}>Email:</strong> info@cakedelights.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
