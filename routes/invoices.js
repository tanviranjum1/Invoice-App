const express = require("express");
const router = express.Router();
const invoicesControllers = require("../controllers/invoices-controllers.js");

router.get("/", invoicesControllers.getInvoices);

router.get("/:id", invoicesControllers.getInvoiceById);

router.post("/", invoicesControllers.createInvoice);

router.patch("/:id", invoicesControllers.editInvoiceById);

router.delete("/:id", invoicesControllers.deleteInvoiceById);

module.exports = router;
