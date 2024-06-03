import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("rooms from user");
  })

export default router