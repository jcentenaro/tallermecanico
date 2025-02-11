const index = (req, res) => {
    res.render("index")
};

const services = (req, res) => {
    res.render("services")
};

const contact = (req, res) => {
    res.render("contact")
};

module.exports = {
    index,
    services,
    contact
};
