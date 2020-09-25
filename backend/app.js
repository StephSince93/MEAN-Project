const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const app = express();
require('dotenv').config()

// const pw = process.env.MONGO_ATLAS_PW;
// mongoose.connect(`mongodb://stemadmin:${encodeURIComponent(pw)}@10.0.0.57:27017/admin`,{ useNewUrlParser: true })

mongoose.connect(`${process.env.BASE_URL}/node-angular?retryWrites=true&w=majority`,{ useNewUrlParser: true })
.then(() =>{
  console.log('Connected to server');
}).catch((e) =>{
  console.log('Connection failed' + e);
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

// define Schema
// var BookSchema = mongoose.Schema({
//   name: String,
//   price: Number,
//   quantity: Number
// });

// compile schema to model
//var Book = mongoose.model('Book', BookSchema, 'bookstore');

// a document instance
//var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });

// save model to database
// book1.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to bookstore collection.");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods','*');

  next();
})

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
