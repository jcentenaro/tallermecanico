const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.set("layout", "layouts/layout");

const mainRoutes = require("./src/routes/mainRoutes");
app.use("/contacto", mainRoutes); // Si mainRoutes incluye rutas para /contacto
app.use(mainRoutes); // Rutas principales

app.use((req, res) => {
  res.status(404).render("404", {
    layout: "layouts/layout",
    titulo: "Error 404",
    currentRoute: "/testimonial",
    title: "Página no encontrada",
    ciudad: "CABA",
    zona: "Error 404",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));