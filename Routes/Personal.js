module.exports=function(app){
    app.get("/",(req,res)=>{
        res.render("Home")
    });
    app.post("/custumersendemail",(req,res)=>{
        
    })
}