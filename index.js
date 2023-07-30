const path = require('path');
const express = require("express");
var cors = require("cors");
const fs = require('fs');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const VariableFinal = require("./models/variables");
const Data = require('./controllers/Variables');
app.set('view engine', 'ejs');
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
/* UTILS */



// app.use('/', (req, res) => {
//   res.status(200).json({
//     status: "Success",
//     message: "connection is up"
//   })
// })
app.use('/test', async (req, res) => {
  console.log("HI")
  try {
    const name = req.body.name;
    const variables = new VariableFinal({ name });
    await variables.save();
    res.status(200).json({
      status: "Success",
      message: "data is saved in Database",
      data: variables
    })
  } catch (error) {
    console.log(error)
  }
})
app.use('/variables', Data.getVariable);


app.get("/admin", Data.getData);

app.post("/admin", Data.updateData);
module.exports = app;
