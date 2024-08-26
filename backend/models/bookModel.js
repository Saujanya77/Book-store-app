import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: Number, required: true }
});

const bookModel = mongoose.model("books", bookSchema);

export default bookModel;