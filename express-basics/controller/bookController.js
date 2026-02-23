const Book = require("../models/Book")

exports.createBook = async (req, res, next) => {
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book)
    }catch(err){
        next(err)
    }
}