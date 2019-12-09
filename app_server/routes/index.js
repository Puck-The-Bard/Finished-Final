var express = require('express');
var router = express.Router();
const ctrlTodo = require('../controllers/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.PORT);
  res.render('index', { title: 'Todo' });
});

/* doing arrivals the server-side (Express and Pug) way */
router.get('/todo', ctrlTodo.TodoCalls);
//router.post('/todo/results', ctrlTodo.vatsimAirportSelection);

router
.get('/angularPage', ctrlTodo.TodoAngular)

module.exports = router;
