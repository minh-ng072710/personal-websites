module.exports=function(app,multer){
    app.get("/",(req,res)=>{
        res.render("Home")
    });
    app.post("/custumersendemail",(req,res)=>{
        
    })
    app.get("/test",(req,res)=>{
        res.render("index")
    });

}