import mongoose from "mongoose";

let RestaurantSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema);