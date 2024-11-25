// backend/routes/issues.js
import express from "express";
import Issue from "../models/Issue.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { studentName, studentId, problemType, description, department } =
      req.body;

    // Create a new issue instance with the provided data
    const newIssue = new Issue({
      studentName,
      studentId,
      problemType,
      description,
      department, // This should be passed from the form
    });

    // Save the new issue to the database
    await newIssue.save();

    res
      .status(201)
      .json({ message: "Issue submitted successfully", issue: newIssue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit issue" });
  }
});

export default router;
