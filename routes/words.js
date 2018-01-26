const app = require('express').Router();
const knex = require("../db");

/* RESTful words */
// representational state transfer

app.get("/", (req, res) => {
  findAllWords(req).orderByRaw('lower(word)').then(words =>
    res.format({
      'application/json': () => {
        res.json(words)
      },
      'text/html': () => {
        res.render('index', {definitions: words})
      }
    })

  );
});

app.get('/new', (req, res) => res.render('new'));

// localhost:8000/words
app.get("/browse", (req, res) => {
  findAllWords(req).then(words =>
    res.render('browse', {definitions: words})
  );
});

// this needs to come before /:id otherwise it's looking for an integer
// localhost:8000/words/seed
app.get("/seed", (req, res) => {
  seedDb();
  res.json({seeding: "completed"})
});

// http://localhost:8000/words/1
app.get("/definition/:id", (req, res) => {
  findWord(req).then(word =>
    res.render('definition', {definitions: word})
  );
});

// http://localhost:8000/words
// save to db, confirm it is save, then get the id of the new row in that table and then tell browser to redirect to app.get(':id', (req, res)=>{});
app.post("/", (req, res) => {
  addWord(req).then(words => {
    res.format({
      'application/json': () => res.json(words[0]),
      'text/html': () => res.redirect('/#words' + words[0].id)
    });
  })
});

// http://localhost:8000/words/1
app.patch("/:id", (req, res) => { updatewords(req).then(words => res.json(words[0])); });


// ******* NEW ********
// http://localhost:8000/words/1
// deletes a words
 app.delete("/:id", (req, res) => { destroywords(req).then(() => res.sendStatus(204)); });

// ******* NEW ********
/** HELPER FUNCTIONS ****/

// CREATE A words
function addWord({ body: { word, definition } }) { // whitelist the params we allow
  return knex("words").returning("*").insert({ word, definition });
}

// Find all
function findAllWords() {
  return knex('words');
}

// Find one
// findWord accepts
function findWord({params: { id }}) {
  return knex('words').where('id', id);
}

// Update
function updatewords({ params: { id }, body: { word, definition }, }) {
  return knex('words') .where('id', id) .returning('*') .update({ word, definition });
}

// Seed db
// Utilize your fucking migration file, idiot.
function seedDb() {
  knex.schema.dropTableIfExists('user')
  .then(function () {
  return knex.schema.createTable('user', function(table) {
      table.increments();
      table.string('name');
      table.string('email', 128);
      table.integer('age');
      table.string('role').defaultTo('admin');
      table.string('password');
      table.timestamps();
  });
  })
  .then(function() {
    let vocab = {
      "canonical":	"Authorized; recognized; accepted",
      "get":	"The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data.",
      "test script":	"A set of instructions to be performed on a system to ensure a system functions as expected.",
      "patch":	"The HTTP PATCH request method applies partial modifications to a resource."
    }

    for (word in vocab) {
      // word: word, definition: vocab[word] bc we need to tell it which data goes in which column of the table you stupid moron
      knex('words').insert({word: word, definition: vocab[word]}).then();
    }

  })
  .catch(function(error) {
  //Error handler
  });
}

module.exports = app;
