const mongoose = require('mongoose');

// MongoDB connection string
const uri = "mongodb+srv://saeedjamalifashi1989:ExPtCLv2E6JMMt2N@cluster0.mk5m7wr.mongodb.net/";

// Database connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
