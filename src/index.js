import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Health Check");
});

app.listen(PORT, () => {
  console.log(`🔥 server listening at http://localhost:${PORT}`);
});
