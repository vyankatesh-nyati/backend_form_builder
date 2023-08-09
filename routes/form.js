const express = require("express");

const formSchema = require("../model/form");

const formController = require("../controllers/form");

const router = express.Router();

// create new form
router.post("/create-new-form", formController.createForm);

// fetch form
router.get("/:id", formController.getFormById);

module.exports = router;
