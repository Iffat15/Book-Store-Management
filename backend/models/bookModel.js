// import mongoose from "mongoose";

// const BookSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//         },
//         author: {
//             type: String,
//             required: true,
//         },
//     },
//     {
//         timestamps: true, // Adds createdAt and updatedAt timestamps
//     }
// );

// // Correct the model name from 'Cat' to 'Book'
// export const Book = mongoose.model('Book', BookSchema);
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
