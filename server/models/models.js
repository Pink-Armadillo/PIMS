const mongoose = require('mongoose');
require('dotenv').config();
//Create a .env file and set a variable called MONGO_URI to your mongo URI
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'scrumadillo',
  })
  .then((data) => console.log('Connected to Mongo DEE BEE'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//Schema for technology card.
const cardSchema = new Schema({
  name: String,
  url: String,
  completed: Boolean,
  todo: [
    {
      taskName: String,
      details: String,
      completed: Boolean,
    },
  ],
});

const Card = mongoose.model('card', cardSchema);

//Schema for board. Board is assigned to a user by username and is stored and retrieved on user login.
const boardSchema = new Schema({
  current: Number,
  username: String,
  cards: [
    {
      name: String,
      url: String,
      completed: Boolean,
      todo: [
        {
          taskName: String,
          details: String,
          completed: Boolean,
        },
      ],
    },
  ],
});
const Board = mongoose.model('board', boardSchema);

//basic user schema. board_id is unused in the current state of the app.
const userSchema = new Schema({
  username: String,
  password: String,
  board_id: {
    type: Schema.Types.ObjectId,
    ref: 'board',
  },
});
const User = mongoose.model('user', userSchema);
module.exports = { Card, User, Board };
