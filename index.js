var Express = require("express");
var shoes = require("./db/conn");
var app = Express();
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// using body parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", (req, res, next) => {
  res.send("mongo is running");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/addShoes", async (req, res, next) => {
  try {
    console.log(req.body);
    var {
      ShoesImage,
      ProductName,
      Price,
      Quantity,
      Description,
      ShoesSize,
      Gender,
    } = req.body;
    const Image = ShoesImage.find((shoes) => shoes.base64);
    // const BOLB = URL.createObjectURL(Image);
    // console.log(""Image.base64);
    // console.log(req.file);
    var result = await shoes.create({
      ShoesImage: Image,
      ProductName,
      Price,
      Quantity,
      Description,
      ShoesSize,
      Gender,
    });
    console.log(result)
  } catch (err) {
    console.log(err);
  }
});

app.get("/manShoes", async (req, res, next) => {
  try {
    var manShoes = await shoes.findOne({ Gender: "male" });
    res.send(manShoes);
    console.log(manShoes);
  } catch (err) {
    console.log("error");
  }
});

app.get("/womanShoes", async (req, res, next) => {
  try {
    var womanShoes = await shoes.findOne({ Gender: "female" });
    res.send(womanShoes);
    console.log(womanShoes);
  } catch (err) {
    console.log("error");
  }
});
app.get("/kidShoes", async (req, res, next) => {
  try {
    var kidShoes = await shoes.findOne({ Gender: "kid" });
    res.send(kidShoes);
    console.log(kidShoes);
  } catch (err) {
    console.log("error");
  }
});
app.get("/childShoes", async (req, res, next) => {
  try {
    var childShoes = await shoes.findOne({ Gender: "child" });
    res.send(childShoes);
    console.log(childShoes);
  } catch (err) {
    console.log("error");
  }
});
app.get("/allShoes", async (req, res, next) => {
  try {
    var allShoes = await shoes.find({});
    res.send(allShoes);
    console.log(allShoes);
  } catch (err) {
    console.log(err);
  }
});
const port = process.env.PORT;
app.listen(5000, (req, res, next) => {
  console.log("listening on port  " + port);
});
