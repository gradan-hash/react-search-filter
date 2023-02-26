const express = require("express");

const cors = require("cors");
const Users = require("./users");

const app = express();

app.use(cors());

app.get("/", (req, res) => {

  //in mong:
  // const users = User.find({$regex : q})
  const { q } = req.query;
  const keys = ["first_name", "last_name", "email"];

 const search=(data)=>{
return data.filter((items)=>keys.some((key)=>items[key].toLowerCase().includes(q)))
 }
  res.json(search(Users).splice(0, 5));
});



app.listen(8700, (req, res) => {
  console.log("server running: up and well");
});
