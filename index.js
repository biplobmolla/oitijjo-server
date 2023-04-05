import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000/");
});
