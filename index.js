const express = require('express');

const app = express();

// Define a route that returns "Hello, the server is running!" on any request
app.get('*', (req, res) => {
  res.send('Hello, the server is running!');
});

// Start the server, listening on port 3000 by default
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});