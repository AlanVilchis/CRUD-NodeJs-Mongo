// define schema
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    image: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});
module. exports = mongoose.model("User", userSchema)