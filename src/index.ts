import express from "express";
console.log("Thanks for using TPG!");

const app = express();
const port = 3000;

app.use(express.json());
app.get("/test", (_req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
