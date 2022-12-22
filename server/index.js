import express from "express";
import Connection from "./database/db.js";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req,res) => {
    res.send("helloo!!");
})

app.listen(port, () => console.log(`server is running successfully at ${port}`)); 