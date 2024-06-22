import express from "express";
import path from "path";
import {read, write} from "./lib/store";

const app = express();
const port = 3000;

async function increment() {
    const value = await read();
    const newValue = value + 1;
    return write(newValue);
}

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/increment", function (req, res, next) {
    increment()
        .then((result) => {
            res.json({result});
        })
        .catch((error) => {
            next(error);
        });
});

app.listen(port, () => {
    console.log(`Sandbox listening on http://localhost:${port}`);
});
