const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logistic = require("./router/logistic");
const qrcode = require("./router/qrcode");
const login = require("./router/login");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use('/',(req,res)=>{
    res.send({success:true,message:"ping   successfully"})
})
app.use('/logistic',logistic);
app.use('/qrcode',qrcode);
app.use('/login',login);
app.use('/',login);

app.listen(3011, () => console.log('微信后端API服务器已启动，端口3011请运维人员做好准备!'))