const express = require("express");
const path = require("path");
const db = require("./db/database");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const { port } = require("./config");

const homeRouter = require("./routes/home.js");


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(expressLayouts);

app.use("/", homeRouter);

app.use((req, res) => {
    res.status(404).render("pages/error", {
      err: { message: "HTTP ERROR 404. This page does not exist" },
      title: "Error | Aphy's Limited Task",
    });
  });
  
  app.listen(port, () =>
    console.log(`Server is listening on localhost:${port}\n`)
  );
  