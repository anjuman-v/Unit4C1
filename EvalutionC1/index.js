const express = require("express");

const app = express();

app.use(logger); // logger() logger

app.get("/books", logger, logger, logger, (req, res) => {
  return res.send({ route: "/books", role: req.role });
});

app.get("/libreries", (req, res) => {
  return res.send({ route: "/libreries", role: req.role });
});

app.get("/authors", (req, res) => {
  return res.send({ route: "/authors", role: req.role });
});







// const books=require("express");
// const book=books();
// book.listen(4000, () => {
//     console.log("server running on port 4000")
// });
// book.get("/books",function(req,res){
//     res.json(["ikigai","The shinning","Abooks"])
// })

