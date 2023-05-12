const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./app/models");

const app = express();

// Environement Variable
const dotenv = require("dotenv");
dotenv.config();

var corsOption = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to youssef application." });
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/tutorialRoutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});