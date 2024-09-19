// Create web server
// Start server
// Listen for requests
// Create routes
// Create a comment
// Read all comments
// Read one comment
// Update a comment
// Delete a comment
// Stop server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.json(comments[id]);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id] = comment;
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});