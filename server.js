const express = require("express");
const app = express();
const path = require("path");

const hostname = "127.0.0.1";
const port = 3003;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "game.html"));
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));
