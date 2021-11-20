const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken() {
  console.log(jwt.sign("Caritas", process.env.SECRET));
}

generateToken();
