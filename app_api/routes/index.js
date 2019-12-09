const express = require('express');
const router = express.Router();
const ctrlTodos = require('../controllers/todo');



router
  //based on https://flightaware.com/commercial/flightxml/explorer/#op_FlightInfo
  .route('/Listinfo/:name')
  .get(ctrlTodos.todos);

module.exports = router;