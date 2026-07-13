const { message } = require('statuses')
const bookModel = require('../Models/BookSchema.cjs')

exports.GetAllBook = async (req, res) => {
    try {
        const GetAllBook = await bookModel.find()
        res.status(200).json({
            message: "All books retrieved successfully",
            data: GetAllBook
        })
    } catch (error) {
        res.send({
            message: "Server Error"
        })
        console.log(error)
    }
}

// Get Book By ID 
exports.GetBook = async (req, res) => {
    try {
        const Book = await bookModel.findById(req.params.id)
        if (!Book) {
            return res.status(404).json({
                message: "Book not found",
                data: null
            })
        }
        return res.status(200).json({
            message: "the book retrieved successfully",
            data: Book
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })
        console.log(error)
    }
}

exports.createBook = async (req, res) => {
    try {
        const CreateBook = await bookModel.create(req.body)
        res.status(200).json({
            message: "Book created successfully.",
            data: CreateBook
        })
    } catch (error) {
        res.send({
            message: "Server Error"
        })
        console.log(error)
    }
}

exports.UpdateBook = async (req, res) => {
    try {
        let { name, Description, Price } = req.body
        const UpdatedBook = await bookModel.findByIdAndUpdate(req.params.id, { name, Description, Price }, { returnDocument: "after" })
        res.status(200).json({
            message: "Book Updated Successfuly",
            data: UpdatedBook
        })


    } catch (error) {
        res.send({
            message: "Server Error"
        })
        console.log(error)
    }
}

exports.DeleteBook = async (req, res) => {
    try {
        const DeleteBook = await bookModel.findByIdAndDelete(req.params.id)
        if (!DeleteBook) {
            return res.status(404).json({
                message: "Book not found."
            });
        }
        res.status(200).json({
            message: "Book deleted successfully",
            data: DeleteBook
        })
    } catch (error) {
        res.send({
            message: "Server Error"
        })
        console.log(error)
    }
}