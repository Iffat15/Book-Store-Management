import express, { response } from 'express';
import mongoose from 'mongoose';
import { PORT, DB_URL } from './config/config.js';  // Ensure correct path
// import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors'
const app = express();

app.use(express.json())
app.use(cors())

// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods : ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-type'],
//     })
// )
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to Book Store')
})

app.use('/books', booksRoute);


mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));


// app.post('/books',async(req,res) => {
//     try{
//         if(!req.body.title || !req.body.author){
//             return res.status(400).send({
//                 message : 'Send all the required fields'
//             })
//         }
//         const newBook = {
//             title : req.body.title,
//             author : req.body.author,
//         };
//         const book = await Book.create(newBook);
//         return res.status(201).send(book);
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500)
//     }
// });

