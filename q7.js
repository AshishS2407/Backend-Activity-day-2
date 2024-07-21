const express = require('express');
const app = express();

let user= []

function logClientIP(req, res, next) {
  const clientIP = req.ip;
  console.log(`Client IP: ${clientIP}`);
  next(); 
}

app.use(logClientIP);


app.get('/', (req, res) => {
  res.send('Welcome to our website!');
});

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
