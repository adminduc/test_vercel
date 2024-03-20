const express = require("express");
const app = express();
const port = 3000; // Cổng server

// Định tuyến cho route "/"
app.get("/", (req, res) => {
  res.send(`Hello, World! ${process.env.PORT}`); // Gửi "Hello, World!" về cho client
});

app.listen(3000, () => {
  console.log("Running on port 3000.");
});
// Export the Express API
module.exports = app;