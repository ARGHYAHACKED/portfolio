const express = require("express");
const Contact = require("../models/contact"); // Import the model
const router = express.Router();

// Create a new contact entry
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create new contact document
    const newContact = new Contact({ name, email, message });
    
    // Save to MongoDB
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

module.exports = router;
