const mongoose = require('mongoose');

// MongoDB connection string
const uri = "mongodb+srv://***:***@cluster0.mk5m7wr.mongodb.net/";

// Database connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
