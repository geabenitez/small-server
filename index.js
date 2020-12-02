const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Ola k ase?");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
