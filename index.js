const express = require("express");
const app = express();

app.use(require("./src/routes/mainRoutes"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));


const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

