const about = (req, res) => {
    res.render("about", {
        currentRoute: "/about",
        layout: "layouts/layout",
        title: "Quienes somos",
        titulo: "Quien sos"
    });
};
const booking = (req, res) => {
    res.render("booking", {
        currentRoute: "/booking",
        layout: "layouts/layout",
        titulo: "Formulario de contacto",
        title: "Formulario de contacto"
    });
};
const contact = (req, res) => {
    res.render("contact", {
        currentRoute: "/contact",
        layout: "layouts/layout",
        titulo: "Formulario de contacto",
        title: "Taller Mecánico Ariel - Especialistas en cambios de distribución"
    });
};
const index = (req, res) => {
    res.render("index", {
        currentRoute: "/",
        titulo: "Taller Mecánico Ariel - Especialistas en cambios de distribución",
        title: "Taller Mecánico Ariel - Especialistas en cambios de distribución",
        ciudad: "Parque Chas",
        canonical: "https://www.tallermecanicoariel.com.ar"
    });
};
const services = (req, res) => {
    res.render("services", {
        currentRoute: "/services",
        titulo: "Taller Mecánico Ariel - Especialistas en cambios de distribución",
        ciudad: "Parque Chas",
        canonical: "https://www.tallermecanicoariel.com.ar"
    });
};
const team = (req, res) => {
    res.render("team", {
        currentRoute: "/team",
        layout: "layouts/layout",
        title: "Título de Equipo",
        titulo: "Título de Equipo"
    });
};
const testimonial = (req, res) => {
    res.render("testimonial", {
        currentRoute: "/testimonial",
        layout: "layouts/layout",
        titulo: "Título de Testimonial",
        title: "Taller Mecánico Ariel - Especialistas en cambios de distribución"
    });
};
const success = (req, res) => {
    res.render("success", {
        currentRoute: "/success",
        layout: "layouts/layout",
        titulo: "Título de Testimonial",
        title: "Título de Testimonial"
    });
};

module.exports = {
    about,
    booking,
    contact,
    index,
    services,
    team,
    testimonial,
    success
};
