const express = require('express');
const app = express();
const PORT = 8000;

/*
  GET ALL WORDS
*/
app.get('/birds', (req, res) => {});

/*
  CREATE A WORD
*/
app.post('/birds', (req, res) => {});

/*
  FETCH A WORD
*/
app.get('/birds/:bird_id', (req, res) => {});

/*
  PATCH A WORD
*/
app.patch('/birds/:bird_id', (req, res) => {});

/*
  DELETE A WORD
*/
app.delete('/birds/:bird_id', (req, res) => {});

app.listen(PORT, () => console.log('Listening on', PORT))
