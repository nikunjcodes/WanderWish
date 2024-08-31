// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

// Connect to the database (if you have a database connection)
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Define API routes
app.use("/api", propertyRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
