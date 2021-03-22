const express = require('express');
const router = express.Router();
const db = require('../db/database.js');

router.get("/", (req, res) => {
    db.any('SELECT *  FROM todo => {
      .then((todolist) => {
        res.render("pages/home", {
          todolist: todolist,
          title: "Home | Mach Fuenf einfach"
        });
      })
      )
      .catch((err) => res.render("pages/error", {
          err: err,
          title: "Error | Mach Fuenf einfach"
      }));
  });
  
  router.post("/addgoal", (req, res) => {
    db.none("INSERT INTO )
    .catch((err) => res.render("pages/error", {
      err: err,
      title: "Error | Mach Fuenf einfach"
  }));
  }
  module.exports = router;