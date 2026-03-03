const transporter = require("../config/mail")

exports.sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    })

    res.json({message: "Email sent successfully"})
}