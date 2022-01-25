const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server: http://localhost:3000")
);
