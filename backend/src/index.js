const express = require("express");
const PORT = 8080;
const { stream } = require("./utils/logger.js");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined", { stream }));
app.use(function (req, res, next) {
  if (isDisableKeepAlive) {
    res.set("Connection", "close");
  }
  next();
});
app.use(routes);

let isDisableKeepAlive = false;

const server = app.listen(PORT, () => {
  process.send("ready");
  console.log(`this server listening on ${PORT}`);
});

process.on("SIGINT", function () {
  isDisableKeepAlive = true;

  server.close(function () {
    console.log("server closed");
    process.exit(0);
  });
});
