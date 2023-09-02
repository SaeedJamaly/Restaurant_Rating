import React, { useState } from 'react';
import './App.css';
import Logo from './assets/logo1.png';
import { Link } from 'react-router-dom';

import StarRating from './components/Rate'




function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [serviceRating, setServiceRating] = useState(0);
  const [serviceText, setServiceText] = useState('');
  const [foodRating, setFoodRating] =useState(0);
  const [foodText, setFoodText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the review data to the backend API endpoint
    fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        reviewText,
        serviceRating,
        serviceText,
        foodRating,
        foodText,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response from the backend
        // Reset the form
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmailAddress('');
        setReviewText('');
        setServiceRating(0);
        setServiceText('');
        setFoodRating(0);
        setFoodText('');
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className='container'>

      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>


      <h1>Welcome to the Restaurant Review Page</h1>

      <form className='form_container' onSubmit={handleSubmit}>

        <label>
          <input type="text" placeholder='Enter first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>

        <br />

        <label>
          <input type="text" placeholder='Enter last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>

        <br />

        <label>
          <input type='text' placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>

        <br />

        <label>
          <input type="email" placeholder='Enter your email address' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
        </label>

        <br />

        <div className='rating_container'>
          <h3>Please rate the service</h3>
          <StarRating starCount={5} value={serviceRating} onChange={(newRating) => setServiceRating(newRating)} required/>
        </div>

        <br />

        <label>
          <textarea placeholder='What did you think about the service' value={serviceText} onChange={(e) => setServiceText(e.target.value)} />
        </label>

        <br />

        <div className='food_rating'>
          <h3>Please rate the food</h3>
          <StarRating starCount={5} value = {foodRating} onChange={(newRating) => setFoodRating(newRating)} required/>
        </div>

        <br />

        <label>
          <textarea placeholder='What did you think about the food' value={foodText} onChange={(e) => setFoodText(e.target.value)} />
        </label>

        <br />

        <label>
          <h3>Is there something that you would like to add or we can improve?</h3>
          <textarea placeholder='Please write your comment here' value={reviewText} onChange={(e) => setReviewText(e.target.value)}/>
        </label>

        <br />

        <div className='btn'>
          <button className='button_container' type="submit">Submit Review</button>
        </div>

      </form>

      <footer>

        <div className='footer_links'>

          <a href='https://github.com/SaeedJamaly'>My Github Homepage</a>

          <Link to="/reviews">
            <a href='#'>Admin View</a>
          </Link>
        </div>

        <div className='Copy_Right'>
          <a href='#'>
            Copy Right
          </a>
        </div>


      </footer>

    </div>
  );
}

export default App;
