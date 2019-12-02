require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors([process.env.FRONT_URL, "www.amazon.fr"]));

server.use(express.json({ extended: true }));

const userRouter = require("./routes/user");
server.use("/users", userRouter);

const artistRouter = require("./routes/artist")
server.use("/", artistRouter)

server.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});
