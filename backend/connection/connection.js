import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://mayukh:sdmm0215@cluster0.skeo4.mongodb.net/Book-Store?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected"));

