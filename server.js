var express=require("express");
var bodyparser=require("body-parser");
var path=require("path");
var http=require("http");
var app=express();
const api=require('../server/routes/api');
var port=process.env.port||3000;

//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"dist")));
app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})
app.listen(port);
console.log("server running on port"+port);