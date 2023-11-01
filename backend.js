const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Game running at http://localhost:${port}`);
});