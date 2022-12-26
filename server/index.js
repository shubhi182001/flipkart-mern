import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js"
import cors from 'cors';
import router from "./routes/route.js";
import bodyParser from "body-parser";
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
const port = 8000;
app.use("/", router);
app.get("/", (req,res) => {
    res.send("helloo!!");
}) 

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD );



DefaultData();
app.listen(port, () => console.log(`server is running successfully at ${port}`)); 

