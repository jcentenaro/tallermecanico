const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");
const nodemailer = require("nodemailer");
const pool = require("../config/db"); // Importa la conexión a la base de datos
require("dotenv").config();

// Ruta para procesar el formulario de contacto
router.post("/enviar", async (req, res) => {
    const { Name, LastName, Email, phone, Subject, Message } = req.body;

    // Validar datos (opcional, pero recomendado)
    if (!Name || !LastName || !Email || !Subject || !Message) {
        console.error("Error: Campos requeridos faltantes");
        return res.status(400).render("error", {
            title: "Error en el formulario",
            message: "Por favor, completa todos los campos requeridos.",
            titulo: "Error",
        });
    }

    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Configurar los detalles del correo
    const mailOptions = {
        from: `"${Name} ${LastName}" <${Email}>`,
        to: "testeoformularios+taller@gmail.com",
        bcc: "juancentenaro@gmail.com",
        subject: "Mensaje Site Peluquería para Perros",
        text: `Nombre: ${Name}\nEmail: ${Email}\nTeléfono: ${phone}\nAsunto:\n${Subject}\nMensaje:\n${Message}`,
        html: `
            <p><strong>Nombre:</strong> ${Name} ${LastName}</p>
            <p><strong>Email:</strong> ${Email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Asunto:</strong> ${Subject}</p>
            <p><strong>Mensaje:</strong> ${Message}</p>
        `,
        replyTo: Email,
    };

    try {
        // Insertar los datos en la base de datos
        const [result] = await pool.query(
            `INSERT INTO form_submissions (name, last_name, email, phone, subject, message)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [Name, LastName, Email, phone, Subject, Message]
        );
        console.log("Datos guardados en la base de datos:", { id: result.insertId });

        // Enviar el correo
        await transporter.sendMail(mailOptions);
        console.log("Correo enviado exitosamente");

        // Renderizar la vista de éxito
        res.status(200).render("success", {
            currentRoute: "/success",
            titulo: "Taller Mecánico Ariel - Especialistas en cambios de distribución",
            title: "Mensaje Enviado",
            mensaje: "Mensaje Enviado",
            message: "Mensaje Enviado",
            ciudad: "Ciudad de Mensaje Enviado",
            tituloabout: "Taller Mecánico Ariel - Especialistas en cambios de distribución",
            zona: "Zona de Mensaje Enviado",
        });
    } catch (error) {
        console.error("Error al procesar el formulario:", {
            message: error.message,
            stack: error.stack,
            code: error.code,
            response: error.response,
        });

        // Renderizar una vista de error
        res.status(500).render("error", {
            title: "Error al enviar",
            message: "Hubo un problema al enviar tu mensaje o guardar los datos. Intenta nuevamente más tarde.",
            titulo: "Error",
        });
    }
});

// Otras rutas
router.get("/about", controller.about);
router.get("/booking", controller.booking);
router.get("/contact", controller.contact);
router.get("/", controller.index);
router.get("/services", controller.services);
router.get("/team", controller.team);
router.get("/testimonial", controller.testimonial);
router.get("/success", controller.success);
router.get("/terminos_y_condiciones", (req, res) => {
    res.render("terminos_y_condiciones", {
        layout: "layouts/layout.ejs",
        titulo: "Términos y Condiciones",
        ciudad: "CABA Norte",
        zona: "De CABA Norte a San Isidro",
    });
});

module.exports = router;