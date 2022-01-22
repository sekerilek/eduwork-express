const router = require("express").Router();

router.get("/", (req, res) => {
  // res.json({
  //   status: "success",
  //   message: "welcome to expess",
  // });
  res.sendFile("./index.html", { root: __dirname });
});

router.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

router.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

router.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});
module.exports = router;
