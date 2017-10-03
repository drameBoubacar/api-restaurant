import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Account = news({
    email: String,
    password: String
});

modules.exports = mongoose.model('Account', Account);
