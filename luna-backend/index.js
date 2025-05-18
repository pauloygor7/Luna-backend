const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");
const alertRoutes = require("./routes/alert");
const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/contacts", contactsRoutes);
app.use("/alert", alertRoutes);

dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

connectDB();
