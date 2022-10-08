const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const app = express();


const Role = db.role;

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


db.sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jwt test application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// initial();