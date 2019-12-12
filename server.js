const express = require('express');
const port = 3000;
const app = express();
const path = require("path");

app.use('/', express.static(path.join(__dirname, "src", "assets")));
app.use('/', express.static(path.join(__dirname, "src", "public")));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});