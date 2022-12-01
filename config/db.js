const mysql=require("mysql")

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"957327",
    database:"demo"
});

db.connect(function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected");
    }
})


module.exports=db