var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // knex('words').then((words))
  res.render('index', {definitions: words});
});

router.get('/test', (req, res) => {
  knex('words').then((rows) => {
    res.format({
      'application/json': () => res.json(rows),
      'default': () => res.sendStatus(406)
    });
  });
});

module.exports = router;
