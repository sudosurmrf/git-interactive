const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let selectedCommands = [];

// Get selected commands
app.get('/api/getSelectedCommands', (req, res) => {
  res.json(selectedCommands);
});

// Select a command
app.post('/api/selectCommand', (req, res) => {
  const { commandName } = req.body;
  if (!selectedCommands.includes(commandName)) {
    selectedCommands.push(commandName);
  }
  res.status(200).send();
});

// Clear all selected commands
app.post('/api/clearCommands', (req, res) => {
  selectedCommands = [];
  res.status(200).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
