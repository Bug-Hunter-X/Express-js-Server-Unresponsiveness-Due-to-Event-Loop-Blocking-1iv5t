const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  // Simulate an asynchronous operation using async/await
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});