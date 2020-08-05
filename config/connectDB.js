const mongoose = require("mongoose");
// require('dotenv/config');
async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
        console.log("Connected to DB")
    );
}
