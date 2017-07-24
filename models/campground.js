var mongoose = require("mongoose");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String, 
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
   },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment"
        }
    ]
});

//compile into model to use methods of mongoose
module.exports = mongoose.model("Campground", campgroundSchema); //the name of our model becomes the name of our collection in mongo