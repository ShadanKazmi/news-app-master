require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require("./routes/user");
const commentRoute = require("./routes/comment");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    credentials: true,
  };


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({extended:false,useNewUrlParser: true, useUnifiedTopology: true}))
mongoose.connect(process.env.MONGO_URL)
.then(e => console.log("MongoDB Connected"));

app.use('/user',userRoute);
app.use('/comments',commentRoute);
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(PORT,() => {
    console.log("Server Started at ", PORT);
})
