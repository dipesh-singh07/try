import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running"
    })
})


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});

