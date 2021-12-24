import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import typeorm from "typeorm";
import { photoRoutes } from "./routes/index";

const { createConnection } = typeorm;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Health Check");
});

app.use("/api/photo", photoRoutes);

(async () => {
  try {
    await createConnection();
    console.log("🚀 connected to the database...");
    app.listen(PORT, () => {
      console.log(`🔥 server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
