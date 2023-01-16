const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3002, () => {
  console.log("Servidor funcionando en el puerto", app.listen);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

