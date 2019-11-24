const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({it: 'has been changed'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
