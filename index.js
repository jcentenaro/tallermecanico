const express = require("express");
const app = express();

app.use(require("./src/routes/mainRoutes"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));

// Manejo de error de página no existente. 
app.use((req, res, next) => {
    // res.status(404).send("La página que está buscando no existe");
    res.status(404).render("404", { 
        layout: "layouts/layouttyc", 
        titulo: "Error 404", 
        ciudad: "CABA", 
        zona: "Error 404" });
});

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

