const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const mainRoutes = require(path.join(__dirname, "/src/routes/mainRoutes"));
const contactRoutes = require("./src/routes/mainRoutes");

const methodOverride = require("method-override");

// Middleware para procesar formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Usar las rutas de contacto
app.use("/contacto", mainRoutes);
// habilito vista carpetat public
app.use(express.static(path.join(__dirname, "/public")));
// configuración del motor de vistas
app.set("view engine", "ejs");
//y le digo en carpeta están las vistats
app.set("views", path.join(__dirname, "/src/views"));
// LE DIGO QUE UTILICE LAYOUTS Y EN DONDE
app.use(expressLayouts);
app.set("layout", "layouts/layout");
// le pido a la app que use la constatnte que cargué arriba
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: false}));


app.use(mainRoutes);

// Manejo de error de página no existente. 
app.use((req, res, next) => {
    // res.status(404).send("La página que está buscando no existe");
    res.status(404).render("404", { 
        layout: "layouts/layout", 
        titulo: "Error 404",
        currentRoute: "/testimonial",
        title: "Página no encontrada",
        ciudad: "CABA", 
        zona: "Error 404" });
});

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));