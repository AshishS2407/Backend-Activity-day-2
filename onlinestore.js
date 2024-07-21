const express = require('express');
const app = express();
const port = 3000;

function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); 
}

app.use(requestLogger);


app.get('/', (req, res) => {
  res.send('Welcome to the online store!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
