const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./DB/connection");
const app = new express();
app.use(morgan('dev'));
app.use(cors());

const feedbackRoute = require('./Routes/Feedbackroute')

app.use('/feedback', feedbackRoute)




app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`); });
