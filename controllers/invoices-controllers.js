const Invoice = require("../model/Invoice.js");

const asyncHandler = require("express-async-handler");

const getInvoices = asyncHandler(async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

const getInvoiceById = asyncHandler(async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);

    res.json(invoice);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

const editInvoiceById = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  let invoice;
  try {
    invoice = await Invoice.findById(invoiceId);
  } catch (err) {
    res.status(404).json({ error: "invoice not found to edit" });
  }

  invoice.content = req.body.content;

  try {
    const editedinvoice = await invoice.save();
    res.status(200).json(editedinvoice);
  } catch (err) {
    console.log("Server error", err);
  }
});

const deleteInvoiceById = asyncHandler(async (req, res) => {
  Invoice.findByIdAndRemove(req.params.id)
    .then((invoice) => res.json({ mgs: "invoice removed aaaaa" + invoice }))
    .catch((err) => res.status(404).json({ error: "invoice not found" }));
});

const createInvoice = asyncHandler(async (req, res) => {
  const {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    total,
    clientAddress,
    senderAddress,
    items,
  } = req.body;

  const createdInvoice = new Invoice({
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    total,
    clientAddress,
    senderAddress,
    items,
  });

  try {
    const invoice = await createdInvoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error" + invoice);
  }
});

exports.getInvoices = getInvoices;
exports.getInvoiceById = getInvoiceById;
exports.createInvoice = createInvoice;
exports.editInvoiceById = editInvoiceById;
exports.deleteInvoiceById = deleteInvoiceById;
