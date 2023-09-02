const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  emailAddress: String,
  reviewText: String,
  serviceRating: String,
  serviceText: String,
  foodRating: String,
  foodText: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
