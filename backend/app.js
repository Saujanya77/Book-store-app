import express from "express";
const app = express();
import cors from 'cors'
const port = 1000;
import bookRoute from "./routes/bookRoutes.js"
import './connection/connection.js';
app.use(cors());
app.use(express.json());

app.use("/api/v1",bookRoute);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})