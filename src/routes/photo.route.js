import express from "express";
import { items } from "../constants/index.js";

const router = express.Router();

// get initial photo list

router.get("/photo", (req, res) => {
  //if no photos in db then send random urls

  res.json({ name: "soham" });
});

router.post("/photo", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ status: "success" });
});

export { router };
