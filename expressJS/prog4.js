import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let students = [
  { id: 1, name: 'Alice', course: 'Mathematics' },
  { id: 2, name: 'Bob', course: 'Computer Science' },
  { id: 3, name: 'Charlie', course: 'Physics' }
];

// Helper to generate unique IDs
let nextId = 4;

app.get('/students', (req, res) => {
  res.status(200).send(students);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).send({ message: 'Student not found' });
  }

  res.status(200).send(student);
});

app.post('/students', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).send({ message: 'Name and course are required' });
  }

  const newStudent = { id: nextId++, name, course };
  students.push(newStudent);

  res.status(201).send({ message: 'Student added successfully', student: newStudent });
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).send({ message: 'Student not found' });
  }

  if (name) student.name = name;
  if (course) student.course = course;

  res.status(200).send({ message: 'Student updated successfully', student });
});

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).send({ message: 'Student not found' });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).send({ message: 'Student deleted successfully', student: deletedStudent });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
