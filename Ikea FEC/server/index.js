const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../database/index.js')
const port = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname + './client')));

app.listen(port, ()=>{
  console.log(`successfully listening to ${port}!`)
})