import React, { useState } from 'react';
import './Feedback.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    cakeType: [],
    feedback: '',
    favoriteCake: 'chocolate',
    cakeImage: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          cakeType: [...prevData.cakeType, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          cakeType: prevData.cakeType.filter((item) => item !== value),
        }));
      }
    } else if (type === 'file') {
      setFormData({ ...formData, cakeImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary validation here

    // After validation, show the "Thank you for your feedback" message
    if (
        formData.name === '' ||
        formData.email === '' ||
        formData.rating === '' ||
        formData.feedback === ''
      ) {
        setValidationMessage('Please fill in all the required fields.');
      } else {
        // Reset validation message
        setValidationMessage('');
  
        // After validation, show the "Thank you for your feedback" message
        setSubmitted(true);
      }
    };


  return (
    <div className="feedback-form-container">

    <div>
      {submitted ? (
        <div>
          <h2>Thank you for your feedback!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Feedback Us </h2>
          
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />

          <label>Rate our cakes:</label><br />
          <input
            type="radio"
            name="rating"
            value="excellent"
            checked={formData.rating === 'excellent'}
            onChange={handleChange}
          /> Excellent
          <input
            type="radio"
            name="rating"
            value="good"
            checked={formData.rating === 'good'}
            onChange={handleChange}
          /> Good
          <input
            type="radio"
            name="rating"
            value="average"
            checked={formData.rating === 'average'}
            onChange={handleChange}
          /> Average
          <input
            type="radio"
            name="rating"
            value="poor"
            checked={formData.rating === 'poor'}
            onChange={handleChange}
          /> Poor<br /><br />

          <label>What types of cakes do you prefer? (Check all that apply):</label><br />
          <input
            type="checkbox"
            name="cakeType"
            value="chocolate"
            checked={formData.cakeType.includes('chocolate')}
            onChange={handleChange}
          /> Chocolate
          <input
            type="checkbox"
            name="cakeType"
            value="vanilla"
            checked={formData.cakeType.includes('vanilla')}
            onChange={handleChange}
          /> Vanilla
          <input
            type="checkbox"
            name="cakeType"
            value="strawberry"
            checked={formData.cakeType.includes('strawberry')}
            onChange={handleChange}
          /> Strawberry
          <input
            type="checkbox"
            name="cakeType"
            value="other"
            checked={formData.cakeType.includes('other')}
            onChange={handleChange}
          /> Other<br /><br />

          <label htmlFor="feedback">Feedback:</label><br />
          <textarea
            name="feedback"
            rows="4"
            cols="50"
            value={formData.feedback}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="cakeImage">Upload a photo of our cake (optional):</label><br />
          <input
            type="file"
            name="cakeImage"
            onChange={handleChange}
          /><br /><br />

          <label htmlFor="favoriteCake">Select your favorite cake:</label>
          <select
            name="favoriteCake"
            value={formData.favoriteCake}
            onChange={handleChange}
          >
            <option value="chocolate">Chocolate Cake</option>
            <option value="vanilla">Vanilla Cake</option>
            <option value="strawberry">Strawberry Cake</option>
            <option value="other">Other</option>
          </select><br /><br />

          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
    </div>
  );
}

export default FeedbackForm;
