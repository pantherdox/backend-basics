const Book = require("../models/Book")

//Create
exports.createBook = async (req, res, next) => {
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book)
    }catch(err){
        next(err)
    }
}

//Read - all
// exports.getAllBooks = async (req, res, next) => {
//     try{
//         const books = await Book.find();
//         res.status(200).json(books)
//     }catch(err){
//         next(err)
//     }
// }

exports.getAllBooks = async (req,res, next) => {
    try{
        const filters = {}

        if(req.query.author){
            filters.author = req.query.author
        }

        if(req.query.price){
            filters.price = req.query.price
        }

        const books = await Book.find(filters)

        res.status(200).json(books)
    }catch(err){

    }
}

//Read - by id
exports.getBookById = async(req, res, next) => {
    try{
        const id = req.params.id
        const book = await Book.findById(id);

        if(!book){
            return res.status(404).json({message: "Invalid id"})
        }

        res.status(200).json(book)
    }catch(err){
        next(err)
    }
}

//Update
exports.updateBook = async(req, res, next) => {
    try{
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )

        if(!book){
            return res.status(404).json({message: "Invalid id"})
        }

        res.status(200).json(book)
    }catch(err){
        next(err)
    }
}

//Delete
exports.deleteBook = async(req, res, next) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id)

        if(!book){
            return res.status(404).json({message: "Invalid id"})
        }

        res.status(204).send()
    }catch(err){
        next(err)
    }
}