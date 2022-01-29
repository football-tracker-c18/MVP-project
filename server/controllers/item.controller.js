// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
var find = function (req, res) {
  Item.find({email : req.body.email})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var post = async function(req,res){
  var result = await Item.find({email : req.body.email})
    if(result.length>0){
      res.send("you already have an acount")
    }else{
      Item.insertMany({
            name : req.body.name,
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone
      })
    }
}
var login = async function(req,res){
  var result = await Item.find({name : req.params.name,playnumber:req.params.playnumber})
  if(result !== null){
    res.send(result)
  }else{
    res.send("you don't have an acount you need to sign up first")
  }
}


var postPlayer = async function (req,res){ 
  if(req.params.playname && req.params.playnumber && req.params.playpos){
   
    var data = await Item.find({playnumber : req.params.playnumber})
    
    if(data.length === 0){
      var result = await Item.insertMany({name : req.body.name , password : req.body.password , playname : req.params.playname,
        playnumber : req.params.playnumber,
        playposition : req.params.playpos
      })
      
      if(result.length > 0){
        var playerData = await Item.find({playnumber : req.params.playnumber})
        
        if(playerData !== null){
          res.send(playerData)
        }
      }
    }
   
  }else{
    res.send("you need to put all information about the player")
  }
  
  

}


var gk = async function(req,res){
  var result = await Item.find({playposition:"GK"})
  if(result.length>0){
    res.send(result)
  }
  else{
    res.send("")
  }
}

var def = async function(req,res){
  
  var result = await Item.find({playposition:"LB"})
  var r1 = await Item.find({playposition:"CB"})
  var r2 = await Item.find({playposition:"FB"})
  var data = result.concat(r1,r2)
  if(data.length>0){
    res.send(data)
  }
  else{
    res.send("")
  }
}

var mid = async function(req,res){
  var result = await Item.find({playposition:"DM"})
  var r1 = await Item.find({playposition:"LM"})
  var r2= await Item.find({playposition:"RM"})
  var r3= await Item.find({playposition:"OM"})
  var data = result.concat(r1,r2,r3)
  if(data.length>0){
    res.send(data)
  }
  else{
    res.send("")
  }
}
var atk = async function(req,res){
  var result = await Item.find({playposition:"FC"})
  if(result.length){
    res.send(result)
  }
  else{
    res.send("")
  }
}

var del = async function(req,res){
  var delet = await Item.findOneAndDelete({playnumber:req.body.playnumber})
  if(delet){
    console.log(delet)
  }
  else{
    res.send("")
  }
}


// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { find , post, login,postPlayer,gk,def,mid,atk,del};
