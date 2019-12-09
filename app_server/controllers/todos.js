const request = require('request');
const use_this_port = process.env.PORT || '3000';
const apiOptions = {
  server: 'http://localhost:' + use_this_port
};


const TodoAngular = (req, res, render) => {
   res.render('todoAngular', 
  {
      

  }
)};


  
const renderTodos = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
      message = 'API lookup error';
      responseBody = [];
    } else {
      if (!responseBody.length) {
        message = 'No results for this airport';
      }
    }
    let myNames = []; 

    responseBody.forEach(element => {
      myNames.push(element.name);
      
    });
    res.render('todos', 
        {
            myList: responseBody,
            mynames: myNames

        }
    );
};
const ids = [
  1,
  2,
  3,
  4,
];
let id = ids[Math.floor(Math.random()*ids.length)];

const TodoCalls = (req, res) => {
  const path = `/api/listInfo/${id}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, {statusCode}, body) => {
      let data = [];
      if (statusCode === 200 && body.length) {
          data = body;
      }
      renderTodos(req, res, data);
    }
  );
};

  module.exports = {
    TodoCalls,
    TodoAngular
  };