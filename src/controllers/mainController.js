const about = (req, res) => {
    res.render("about")
};
const booking = (req, res) => {
    res.render("booking")
};
const contact = (req, res) => {
    res.render("contact")
};
const index = (req, res) => {
    res.render("index")
};
const services = (req, res) => {
    res.render("services")
};
const team = (req, res) => {
    res.render("team")
};
const testimonial = (req, res) => {
    res.render("testimonial", {
        title: "Título de Testimonial"});
};
const success = (req, res) => {
    res.render("success")
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
