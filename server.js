import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("EMAIL:", process.env.EMAIL);
console.log("RECIPIENT:", process.env.RECIPIENT_EMAIL);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form submitted by:", name, email);
  console.log("Sending to:", process.env.RECIPIENT_EMAIL);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Contact Message — Canada Trust Construction</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });
    console.log("Email sent successfully to:", process.env.RECIPIENT_EMAIL);
    res.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));