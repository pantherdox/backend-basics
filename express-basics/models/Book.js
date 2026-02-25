const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
   title: {
    type: String,
    required: [true, "Title is required"],
    minLength: 5,
    maxLength: 20
   },
   author: {
    type: String,
    required: true
   },
   price: {
    type: Number,
    required: true,
    min: 0,
    max: 100
   }
})

module.exports = mongoose.model("Book", bookSchema)