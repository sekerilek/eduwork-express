const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);

app.listen(process.env.port || 3000);
