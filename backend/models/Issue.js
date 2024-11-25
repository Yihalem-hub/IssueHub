// backend/models/Issue.js

import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  studentName: String,
  studentId: String,
  problemType: String,
  description: String,
  status: { type: String, default: "Pending" },
  department: String, // Add this field
  createdAt: { type: Date, default: Date.now },
});

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
