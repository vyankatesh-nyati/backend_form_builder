const express = require("express");

const responseController = require("../controllers/response");

const router = express.Router();

router.post("/add-response", responseController.addNewResponse);

router.get("/fetch-reponses", responseController.fetchAllReponse);

module.exports = router;
