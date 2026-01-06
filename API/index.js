require("dotenv").config();
const express = require("express");
const cors = require("cors"); // ← NUEVO
const supabase = require("./bd-conection");
const taskRoutes = require("./routes/task.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const authRoutes = require("./routes/auth.routes");
const aiRoutes = require("./routes/ai.routes");
const swaggerDocument = YAML.load("./openapi.yaml");
const rateLimiter = require("./middlewares/rateLimiter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", rateLimiter, authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/ai", aiRoutes);
app.use("/", taskRoutes);

const PORT = 3000;

// Iniciar el servidor -----------------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log("API escuchando en puerto 3000");
});

module.exports = app;
