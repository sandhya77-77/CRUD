const db = require('./db')
async function InsertDetails(Username,password,email,phoneNumber){
    console.log(Username,password,email,phoneNumber);
    try{
let responce=await new Promise((Sucess,Failed)=>{
    const sqlquery=`insert into users(username,password,email,phonenumber) values('${Username}','${password}','${email}',${Number.parseInt(phoneNumber)})`
  
    db.query(sqlquery,(err,res)=>{
        if(err){
            Failed(err.message)
        }
        else{
            Sucess(res)
        }
    })  
})
return responce
    }
    catch(err){
        console.log(err);
    }   
}
async function GetDetails(){
try{
let responce=await new Promise((Sucess,Failed)=>{
    const sqlquery=`select * from users`
    db.query(sqlquery,(err,res)=>{
        if(err){
            Failed(err.message)
        }
        else{
            Sucess(res)
        }
    })
})
return responce
}
catch(err){
console.log(err);
}
}
async function GetUserId(id){
    console.log(id);
    try{
        let responce=await new Promise((Sucess,Failed)=>{
const sqlquery=`select * from users where id=${Number.parseInt(id)}`
db.query(sqlquery,(err,res)=>{
    if(err){
        Failed(err.message)
          }
    else{
        Sucess(res)
        }
        })
        })
        return responce
    }
    catch(err){
        console.log(err);
    }
}
async function DeleteId(id){
    console.log(id);
    try{
        let responce=await new Promise((Sucess,Failed)=>{
const sqlquery=`delete from users where id=${Number.parseInt(id)}`
db.query(sqlquery,(err,res)=>{
    if(err){
        Failed(err.message)
          }
    else{
        Sucess(res)
        }
        })
        })
        return responce
    }
    catch(err){
        console.log(err);
    }
}
async function UpdateDetails(Username,password,email,phoneNumber,id){
    console.log(typeof(id));
    try{
let responce=await new Promise((Sucess,Failed)=>{
    const sqlquery=`update users set username='${Username}',password='${password}',email='${email}',phonenumber=${Number.parseInt(phoneNumber)} where id=${Number.parseInt(id)}`
    console.log(sqlquery);
    db.query(sqlquery,(err,res)=>{
        if(err){
            Failed(err.message)
        }
        else{
            Sucess(res)
        }
    })  
})
return responce
    }
    catch(err){
        console.log(err);
    }   
}
async function UpdatePasswod(Username,password,id){
    console.log(typeof(Username,password));
    try{
let responce=await new Promise((Sucess,Failed)=>{
    const sqlquery=`update users set username='${Username}',password='${password}'where id=${Number.parseInt(id)}`
    console.log(sqlquery);
    db.query(sqlquery,(err,res)=>{
        if(err){
            Failed(err.message)
        }
        else{
            Sucess(res)
        }
    })  
})
return responce
    }
    catch(err){
        console.log(err);
    }   
}
module.exports={InsertDetails,GetDetails,GetUserId,UpdateDetails,DeleteId,UpdatePasswod}