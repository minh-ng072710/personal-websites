//express
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static("Public"));

app.listen(process.env.PORT || 3000)
 

//body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

//multer
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()  + "-" + file.originalname)
    }
});  
var upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if(file.mimetype=="image/bmp" || file.mimetype=="image/png"){
            cb(null, true)
        }else{
            return cb(new Error('Only image are allowed!'))
        }
    }
}).single("avatar");


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
require("./Routes/Personal")(app,multer)