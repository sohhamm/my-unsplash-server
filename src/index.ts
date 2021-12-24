import "reflect-metadata";
import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { photoRoutes } from "./routes/index";
import { connectDB } from "./db";

// load up env variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 9000;

// security headers
app.use(helmet());
// to parse json req.body
app.use(express.json());
// to parse url form encoded data in req.body
app.use(express.urlencoded({ extended: true }));

// health check route
app.get("/", (_, res) => {
  res.send("Health Check");
});

// * all routes
app.use("/api/photos", photoRoutes);

// main function
(async () => {
  try {
    await connectDB();
    console.log("🚀 connected to the database...");
    app.listen(PORT, () => {
      console.log(`🔥 server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("😞 DB connection failed");
    console.error(err);
  }
})();
