const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! this is v2 of node part so be with it");
});

app.get("/home", (req,res) =>{
    res.send("this is home page")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
