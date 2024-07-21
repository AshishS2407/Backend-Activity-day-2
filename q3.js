const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function handleReviewSubmission(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const review = { title, content };

  console.log('Review submitted:', review);

  res.status(201).json({ message: 'Review submitted successfully', review });
}

app.post('/reviews', handleReviewSubmission);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
