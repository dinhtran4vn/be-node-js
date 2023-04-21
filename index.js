const express = require("express");
var path = require("path");
const morgan = require('morgan');
const app = express();
const port = 3030;


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "Hello34!!" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});