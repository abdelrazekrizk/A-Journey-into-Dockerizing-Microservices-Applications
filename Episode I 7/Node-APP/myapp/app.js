// Import the necessary modules.
const express = require('express');
const app = express();

// Define the port on which the server will listen.
const port = 3000;

// Define the routes.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});