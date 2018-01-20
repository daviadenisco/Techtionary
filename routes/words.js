const app = require('express').Router();
const knex = require("../db");

/* RESTful words */
// representational state transfer

// This if for the httpie request, for the command line
/* http --json \ GET 'http://localhost:8000/todos' */
// WHAT IS FINDWORDS?
app.get("/", (req, res) => { findWords(req).then(words => res.json(words)); });

app.get('/new', (req, res) => {

});

// displays the newly added word
/* http --json \ GET 'http://localhost:8000/todos/1' */
app.get("/:id", (req, res) => { findWord(req).then(words => res.json(words[0])); });


// This if for the httpie request, for the command line
/* http --json \ POST 'http://localhost:8000/todos' \ title='A Short Title' description='A short description.' */
// save to db, confirm it is save, then get the id of the new row in that table and then tell browser to redirect to app.get(':id', (req, res)=>{});
app.post("/", (req, res) => { createTodo(req).then(todos => res.json(todos[0])); });

/* http --json \ PATCH 'http://localhost:8000/todos/1' \ title='COOOL!' description='WOOT!' */ app.patch("/:id", (req, res) => { updateTodo(req).then(todos => res.json(todos[0])); });


// ******* NEW ********
/* http --json \ DELETE 'http://localhost:8000/todos/1' */
// deletes a word
 app.delete("/:id", (req, res) => { destroyTodo(req).then(() => res.sendStatus(204)); });

// ******* NEW ********
/** HELPER FUNCTIONS ****/

// CREATE A todo function createTodo({ body: { title, description } }) { return knex("todos") .returning("*") .insert({ title, description }); }

// Find all function findTodos() { return knex('todos'); }

// Find one function findTodo({params: { id }}) { return knex('todos').where('id', id); }

// Update function updateTodo({ params: { id }, body: { title, description }, }) { return knex('todos') .where('id', id) .returning('*') .update({title, description}); }

module.exports = app;
