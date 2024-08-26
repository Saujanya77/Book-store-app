import { Router } from "express";
import bookModel from "../models/bookModel.js";
const router = Router();

//POST REQUEST
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ "message": "book added successfully" });
        });
    } catch (error) {
        console.log(error)
    }
})

//GET REQUEST
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
})

//GET SINGLE BOOK
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
})

//UPDATE BOOKS BY ID
router.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, url, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            url,
            price,
        });
        book = await book.save().then(() => res.json({ "message": "Saved" }));
    } catch (error) {
        console.log(error)
    }
});

//DELETE BOOK

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id)
            .then(() => res.status(201).json({ "message": "Book Deleted" }));
    } catch (error) {
        console.log(error);
    }
});

export default router;
