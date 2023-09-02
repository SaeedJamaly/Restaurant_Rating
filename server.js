const express = require('express');
const mongoose = require('mongoose');
const Review = require('./models/Review');

const cors = require('cors');


const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Connect to the MongoDB database
const uri = 'mongodb+srv://***:***@cluster0.mk5m7wr.mongodb.net/';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Handle POST requests to create a new review
app.post('/api/reviews', async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, emailAddress, reviewText, serviceRating, serviceText, foodRating, foodText } = req.body;

        // Create a new review object
        const review = new Review({ firstName, lastName, phoneNumber, emailAddress, reviewText, serviceRating, serviceText, foodRating, foodText});

        // Save the review to the database
        await review.save();

        // Respond with a success message
        res.json({ message: 'Review created successfully' });

    } catch (error) {
        // Handle errors
        console.error('Error creating review:', error);
        res.status(500).json({ error: 'An error occurred while creating the review' });
    }
});


// Handle GET requests to get reviews
app.get('/api/reviews', async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.find();

        // Respond with the array of reviews
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'An error occurred while fetching reviews' });
    }
});

// Handle DELETE requests to delete a review by ID
app.delete('/api/reviews/:reviewId', async (req, res) => {
    try {
      const { reviewId } = req.params;
  
      // Find the review by ID and delete it from the database
      await Review.findByIdAndDelete(reviewId);
  
      // Respond with a success message
      res.json({ message: 'Review deleted successfully' });
    } catch (error) {
      console.error('Error deleting review:', error);
      res.status(500).json({ error: 'An error occurred while deleting the review' });
    }
  });





// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
