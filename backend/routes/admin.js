// backend/routes/admin.js

import express from "express";
import Issue from "../models/Issue.js";

const router = express.Router();

// Fetch issues by department
router.get("/issues", async (req, res) => {
  try {
    // Optionally, you can pass a department query parameter to filter
    const department = req.query.department; // Check for department filter in query params
    const filter = department ? { department } : {};

    const issues = await Issue.find(filter);
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: "Error fetching issues" });
  }
});

export default router;
