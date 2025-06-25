const express = require('express');
const app = express();

app.use(express.json());

// In-memory array of books
let books = [
  { id: 1, title: 'Stranger', author: 'Albert Camus' },
  { id: 2, title: 'Metamorphosis', author: 'Franz Kafka' }
];

// Helper to generate unique IDs
let nextId = 3;

// GET /books - list all books
app.get('/books', (req, res) => {
//   let list = books.map(b => `ID: ${b.id}, Title: ${b.title}, Author: ${b.author}`).join('\n');
    res.send(books);
//   res.send(list || 'No books available.');
});


app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).send('Both title and author are required.');
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.send(`Book added: ID ${newBook.id}, Title "${newBook.title}", Author "${newBook.author}".`);
});

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).send(`Book with ID ${id} not found.`);
  }
  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  res.send(`Book with ID ${id} updated successfully.`);
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).send(`Book with ID ${id} not found.`);
  }
  const removed = books.splice(index, 1)[0];
  res.send(`Book deleted: ID ${removed.id}, Title "${removed.title}", Author "${removed.author}".`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Book manager app listening on port ${PORT}`);
});
