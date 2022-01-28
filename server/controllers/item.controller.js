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

var post = function(req,res){
  Item.find({email : req.body.email}) 
    if(userData.length>0){
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

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { find , post};
