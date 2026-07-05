const BookModel = require('../Model/BookModel.cjs')

// Api Read All Books 
exports.ReadBooks = async function (req, res) {
    try {
        const Books = await BookModel.find()
        res.json({ message: "All Books Are avaliable to Read ", data: Books })
    } catch (error) {
        console.log(error)
    }
}

// Api Create Book 
exports.CreateBook = async function (req, res) {
    try {
        const CreateBook = await BookModel.create(req.body)
        res.json({ message: " Book Created Successfuly ", data: CreateBook })
    }
    catch (error) {
        console.log(error)
    }

}

//Api delete Book By ID

exports.DeleteBook = async function (req, res) {
    try {
        await BookModel.findByIdAndDelete(req.params.id)
        res.json({ message: " Book Deleted Successfuly", data: [] })
    }
    catch (error) {
        console.log(error)
    }
}