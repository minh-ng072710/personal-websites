//express
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static("Public"));

app.listen(process.env.PORT || 3000)
 
//monogodb
const mongoose = require('mongoose');

async function MGDB(){
    await mongoose.connect('mongodb+srv://giaminh:VBznHeJlNXCwSBy4@cluster0-zjg82.gcp.mongodb.net/personal_website?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },(err)=>{
          if(err){
              console.log("Connect to mongoose Failed. Error code: "+err)
          }else{
              console.log("Connect to mongoose succeed!")
          }
      });

} 
MGDB()
require("./Routes/Personal")(app)