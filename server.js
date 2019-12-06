const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://admin:3213AAA@ds229771.mlab.com:29771/heroku_8chlrn63"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// 5!fSgWQqXh3NhXp
// react-practice

// {
//     "_id": "heroku_8chlrn63.react-practice",
//     "user": "react-practice",
//     "db": "heroku_8chlrn63",
//     "roles": [
//         {
//             "role": "dbOwner",
//             "db": "heroku_8chlrn63"
//         }
//     ]
// }
