import "reflect-metadata";
import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { photoRoutes } from "./routes/index";
import { connectDB } from "./db";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 9000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Health Check");
});

app.use("/api/photo", photoRoutes);

(async () => {
  try {
    await connectDB();
    console.log("🚀 connected to the database...");
    app.listen(PORT, () => {
      console.log(`🔥 server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
