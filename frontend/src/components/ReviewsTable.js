import React, { useState, useEffect } from 'react';
import './reviewsTable.css';
import Logo from '../assets/logo1.png'

const ReviewsTable = () => {
    // State to store the reviews data fetched from the backend
    const [reviews, setReviews] = useState([]);

    // Fetch the reviews data from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="reviews_container">

            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <h1>All Reviews</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>General Comment</th>
                        <th>Service Rating</th>
                        <th>Service Comment</th>
                        <th>Food Rating</th>
                        <th>Food Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review._id}>
                            <td>{review.firstName}</td>
                            <td>{review.lastName}</td>
                            <td>{review.phoneNumber}</td>
                            <td>{review.emailAddress}</td>
                            <td>{review.reviewText}</td>
                            <td>{review.serviceRating}</td>
                            <td>{review.serviceText}</td>
                            <td>{review.foodRating}</td>
                            <td>{review.foodText}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewsTable;
