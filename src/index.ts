import express from "express";
import { join } from "path";

console.log("Thanks for using TPG!");

const app = express();
const port = 3000;

app.use(express.json());

const router = express.Router();

router.get("/", (_req, res, next) => {
    const options = {
        root: join("public"),
    };

    return res.sendFile("index.html", options, (err) => {
        if (err) {
            next(err);
        }
    });
});

app.get("/check", (_req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
