const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// load routes
// create a variable for the routes/words file
const words = require('./routes/words');
const index = require('./routes/index');


const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// setup middleware
app.use(express.static(__dirname + '/public'));

app.use(morgan('combined'));
// what does this do?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use("/", index);

// require the routes/words file
app.use('/', words);
app.listen(PORT, () => {
  console.log('Server listening on ', PORT);
})
