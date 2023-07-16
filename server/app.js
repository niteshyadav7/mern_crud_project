import dotenv from "dotenv";
import express from "express";
import Connection from "./config/db.js"; //always use full name using extension.(.js/etc...)
import router from "./controllers/index.js";

const app = express();
app.use(express.json()); //this is used for the "POST" request =>as a body parser.
dotenv.config();
app.use("/", router);
Connection(process.env.DB_URL); //provide database it's url

try {
  app.listen(process.env.PORT || 8000, () => {
    console.log(
      `server running on ${process.env.HOST_NAME}:${process.env.PORT}`
    );
  });
} catch (err) {
  console.log(`Error occurs during server running`, err);
}
