const express = require('express');
const router = express.Router();
const db = require('../db/database.js');

router.get("/", (req, res) => {
    db.any(
      `SELECT user_id, last_name, first_name, id_user, day, start_time, end_time FROM users INNER JOIN schedules ON user_id = id_user`
    )
      .then((todolist) => {
        res.render("pages/home", {
          todolist: todolist,
          title: "Home | Aphy's personal Diary"
        });
      })
      .catch((err) => res.render("pages/error", {
          err: err,
          title: "Error | Aphy's personal Diary"
      }));
  });
  
  module.exports = router;