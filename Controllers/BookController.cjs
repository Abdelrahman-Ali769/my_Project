const BookModel = require('../Model/BookModel.cjs');

// ================= Read All Books =================
exports.ReadBooks = async (req, res) => {
    try {

        if (!req.user || req.user.role !== "Admin") {
            return res.status(403).json({
                message: "You don't have permission to perform this action."
            });
        }

        const books = await BookModel.find();

        return res.status(200).json({
            message: "All books retrieved successfully.",
            data: books
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};


// ================= Create Book =================
exports.CreateBook = async (req, res) => {
    try {

        if (!req.user || req.user.role !== "Admin") {
            return res.status(403).json({
                message: "You don't have permission to perform this action."
            });
        }

        const book = await BookModel.create(req.body);

        return res.status(201).json({
            message: "Book created successfully.",
            data: book
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};


// ================= Delete Book =================
exports.DeleteBook = async (req, res) => {
    try {

        if (!req.user || req.user.role !== "Admin") {
            return res.status(403).json({
                message: "You don't have permission to perform this action."
            });
        }

        const deletedBook = await BookModel.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found."
            });
        }

        return res.status(200).json({
            message: "Book deleted successfully.",
            data: deletedBook
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};