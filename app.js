const express = require("express");
const bodyParser=require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Hii mridul")
});
app.get("/about",function(req,res){
    res.send("Me pagal hu");
})
app.get("/calculator",function(req,res){
    res.sendFile(__dirname +"/index.html")
})
app.post("/calculator", function (req, res) {
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    res.send("Mera paisa kidar hai. Tere paise le itne huye " + sum);
});


app.listen(3000,function(req,res){
    console.log("I am listening to server");
})
