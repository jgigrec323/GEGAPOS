const express = require('express');
const sequelize = require("./config/database");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

sequelize.authenticate().then(() => {
    app.listen(PORT, () => {
        console.log("Connected & Running on " + PORT)
    })
}).catch(err => {
    throw err;
})