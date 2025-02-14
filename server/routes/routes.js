const express = require("express");
const router = express.Router();
const collection = require("../model/model");

router.post("/create", async (req, res) => {
  try {
    const { name, email, phone, message, category } = req.body;

    const result = new collection({
      name,
      email,
      phone,
      message,
      category,
    });
    await result.save();
    res.status(201).json({ result, message: "Request sent" });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error sending request" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await collection.findOneAndUpdate(id);
    if (!result) res.status(404).json({ message: "Message not found" });

    res.status(200).json({ message: "Message successfully updated", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/fetch", async (req, res) => {
  try {
    const result = await collection.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
