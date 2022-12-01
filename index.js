const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const User = require("./config/Users");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is runing");
});
app.get("/api/getuserdata", (req, res) => {
  User.GetDetails().then((data) => {
    res.send(data);
  });
});
app.post("/api/update",(req,res)=>{
    console.log(typeof(req.body.Id));
    User.UpdateDetails(
        req.body.UserName,
        req.body.Password,
        req.body.Email,
        req.body.PhoneNumber,
        req.body.Id
    ).then((data)=>{
        res.json({isSucess:true})
    })
    });
    app.post("/api/Passwordupdate",(req,res)=>{
        console.log(typeof(req.body.UserName,req.body.Password));
        User.UpdatePasswod(
            req.body.UserName,
            req.body.Password,
            req.body.Id
        ).then((data)=>{
            res.json({isSucess:true})
        })
        });
    

app.post("/api/postdata", (req, res) => {
    console.log(req.body.UserName,
        req.body.Password,
        req.body.Email,
        req.body.PhoneNumber);
  User.InsertDetails(
    req.body.UserName,
    req.body.Password,
    req.body.Email,
    req.body.PhoneNumber
  
  ).then((data) => {
    res.json({ isSucess: true });
  });
});

app.post("/api/login", (req, res) => {
    console.log(req.body.UserName,req.body.Password);
  User.GetDetails().then((data) => {
    data.forEach((user) => {
      if (user.username === req.body.UserName) {
        if (user.password === req.body.Password) {
          User.GetUserId(user.id).then((data2) => {
            console.log(user.id);
            res.json({ isSucess: true, logindata: data2 });
          });
        } else {
          res.json({ isSucess: false });
        }
      }
    });
  });
});
app.post("/api/userbyid", (req, res) => {
    console.log(req.body.Id);
  User.GetUserId(req.body.Id).then((data) => {
    console.log(data);
    res.json({ isSucess: true, userdata: data});
  });
});
app.post("/api/DeleteUser", (req, res) => {
    console.log(req.body.Id);
  User.DeleteId(req.body.Id).then((data) => {
    res.json({ isSucess: true, userdata: data});
  });
});

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
