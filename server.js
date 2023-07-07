const express = require("express");
const app = express();
const connectDB = require("./config/db");
const invoicesRoutes = require("./routes/invoices");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

// morgan is logger so when someone hits a route  in backend we can actually see http verb, status code etc.
// run in dev mode.
const morgan = require("morgan");

const port = 5000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// connect to mongodb.
connectDB();

//this will allow to accept json data in the body.
app.use(express.json());

app.use("/api/invoices", invoicesRoutes);

app.get("/", async function (req, res) {
  res.send("GET request to homepage");
});

app.use(notFound, errorHandler);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
