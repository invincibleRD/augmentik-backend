const mongoose = require("mongoose");

const app = require("./index");
const DB =  "mongodb+srv://rishi:rishi@cluster0.0zb2jqc.mongodb.net/admin1"
mongoose
    .connect(DB, {
        useNewUrlParser: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connect with db");
    });
const port = 3000;
app.listen(port, () => {
    console.log("server is running....");
});
