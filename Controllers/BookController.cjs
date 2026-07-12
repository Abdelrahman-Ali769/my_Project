const bookModel = require('../Models/BookSchema.cjs')

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