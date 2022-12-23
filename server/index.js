import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js"

dotenv.config();


const app = express();
const port = process.env.PORT || 8000;
app.get("/", (req,res) => {
    res.send("helloo!!");
})

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD );



DefaultData();
app.listen(port, () => console.log(`server is running successfully at ${port}`)); 

