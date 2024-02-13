// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import sequelize from "./config.js";
import { Book } from "./models/books.js"; //Not used after creating routes
import booksRouter from "./routes/books-route.js";
import usersRouter from "./routes/users-route.js";

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/books", booksRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
