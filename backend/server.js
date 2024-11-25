import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import issueRoutes from "./routes/issues.js";
import adminRoutes from "./routes/admin.js";
import { authRoutes } from "./routes/auth.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Use the issue routes
app.use('/api/issues', issueRoutes);

// Use the admin routes for administrators
app.use('/api/admin', adminRoutes);

// Use the auth routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {

  tls: true,  // Explicitly enable TLS
  tlsAllowInvalidCertificates: true,  // Allow invalid certificates temporarily (for testing only)
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Simple route to check if the server is working
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
