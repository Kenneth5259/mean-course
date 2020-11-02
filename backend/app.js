//KennethCarroll DqmdSELOEJgVDRif

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
// mongodb+srv://KennethCarroll:DqmdSELOEJgVDRif@meancourse.gaph8.mongodb.net/demo?retryWrites=true&w=majority

const app = express();
mongoose.connect(/*'mongodb+srv://KennethCarroll:' + process.env.MONGO_ATLAS_PW + 'meancourse.gaph8.mongodb.net/demo?retryWrites=true&w=majority'*/'mongodb+srv://KennethCarroll:DqmdSELOEJgVDRif@meancourse.gaph8.mongodb.net/demo?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully Connected to Database');
  })
  .catch(() => {
    console.log('Connection Fail!');
  });

app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(path.join('Images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);


module.exports = app;
