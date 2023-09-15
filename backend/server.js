import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const server = http.createServer(app);

// Express App Config
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Serve the frontend build directory (adjust the path as needed)
  app.use(express.static(path.join(__dirname, "frontend", "build"))); // Use __dirname here
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "http://127.0.0.1:5173",
      "http://localhost:5173",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

import { fplRoutes } from "./api/fpl/fpl.routes.js";
import { setupSocketAPI } from "./services/socket.service.js";

// API routes
app.use("/api", fplRoutes);

// Serve the frontend index.html for all routes
app.get("/*", (req, res) => {
  // Send the index.html from the frontend build directory
  res.sendFile(path.join(frontend, "frontend", "build", "index.html"));
});

import { logger } from "./services/logger.service.js";
const port = process.env.PORT || 3030;
server.listen(port, () => {
  logger.info("Server is running on port: " + port);
});
