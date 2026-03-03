const express = require("express")
const router = express.Router();

const {createOrder} = require("../controller/paymentController")

router.post("/createOrder", createOrder)

module.exports = router;