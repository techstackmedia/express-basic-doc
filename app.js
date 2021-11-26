const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`__dirname/`);
});

app.post("/", (req, res) => {
  res.send("Got a post request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});
