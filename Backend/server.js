const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');

const routes = require('./api');
require('dotenv').config();
const PORT = process.env.PORT || 3001; // Step 1

//----------------------------------------- END OF IMPORTS---------------------------------------------------
const urlMongo="mongodb+srv://noCountry:1234equipo@nocountry.uwoxl.mongodb.net/test"

mongoose.connect(
  urlMongo || 'mongodb://localhost/mern_youtube',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3001", // <-- location of the react app were connecting to
    credentials: true,
  })
);


//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
// app.listen(PORT, () => {
//   console.log("Server Has Started");
// });

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

/////////////////////
app.use(morgan('tiny'));
app.use('/api', routes);


