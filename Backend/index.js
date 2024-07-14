const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());
mongoose.connect()