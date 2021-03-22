const express = require("express");
const path = require("path");

const db = require("./db/database");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const { port } = require("./config");

//ROUTES
const homeRouter = require("./routes/home.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(expressLayouts);

//ROUTES
app.use("/", homeRouter);

app.use((req, res) => {
    res.status(404).render("pages/error", {
      err: { message: "HTTP ERROR 404. This page does not exist" },
      title: "Error | Mach Fuenf einfach",
    });
  });
  
  app.listen(port, () =>
    console.log(`Server is listening on localhost:${port}\n`)
  );
  