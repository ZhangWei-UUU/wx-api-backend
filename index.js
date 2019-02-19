const express = require('express');
const app = express();
var checkToken = require('./router/checkToken');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const order = require("./router/order");
const partners = require("./router/partners");
const product = require("./router/product");
const weixin = require("./router/weixin");

const authentication = require('./router/authentication');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use('/logistic',logistic);
app.use('/qrcode',qrcode);
app.use('/login',login);


app.listen(3010, () => console.log('Now node.js instance is running, listening on port 3010!'))