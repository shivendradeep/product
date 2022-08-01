const { response } = require('express');
var express=require('express');
var app=express();
var http = require('http');

app.get("/",function(req,resp){
  //resp.sendFile("public/empdata.html",{root:__dirname});
  resp.sendFile("/product.html",{root:__dirname});
})
app.listen(9000, '0.0.0.0', () => {
    console.log('server started on port 9000')
  })
