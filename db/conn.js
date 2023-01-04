var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Yogi_1234:Yogi_1234@cluster0.hsfxq.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    err ? console.log(`connection error:  ${err}`) : console.log("successful");
  }
);
// var db = mongoose.connection;
// console.log(db)
var Productschema = mongoose.Schema({
  ShoesImage: [],
  ProductName: String,
  Price: Number,
  Quantity: Number,
  Description: String,
  ShoesSize: [],
  Gender: String,
});

var shoes = mongoose.model("shoes", Productschema, "shoes");
// var createData = async () => {
//   try {
//     // to enter multiple data
//     // var result = await lappy.insertMany([
//     //   { name: "pavalion", price: 5445, catagory: "laptop" },
//     //   { name: "pavalion", price: 5445, catagory: "laptop" }]
//     // to find and remove data all at once
//     // var findone = await lappy.remove({
//     //   catagory: "laptop",
//     //   acknowledged: true,
//     // });
//     // console.log(findone);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createData();
module.exports = shoes;
