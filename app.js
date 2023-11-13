const express = require('express');
const app = express();
const path =require('path');
const dirPath = path.join(__dirname,"./public/index.html");
console.log(dirPath)
app.use(express.urlencoded({extended:true}));

const data=[];
app.get("/",(req,res)=>{
    res.sendFile(dirPath)

})
app.get("/users",(req,res)=>{
    res.send(data)
})

app.post("/submit",(req,res)=>{
   res.redirect("/users");
   data.push(req.body);
   console.log(data)

})


app.get("/about",(req,res)=>{
    res.send("About!")
})



app.listen(2000, ()=>{
    console.log("Server!")
})