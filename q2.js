const express = require ("express")

const app = express();

app.use(express.json())

let users =[];

function Validation (req,res,next) {

  const {email, password} = req.body 

  if (!email || !password) {
    res.status(400).json({ message: 'Email and passwrod required' })
  }
  next ()
}

function Registration (req,res,next) {

  const {email, password} = req.body

  users.push({email,password})

  res.status(201).json({ message: 'User registered successfully.' })
}

app.post ('/register', Validation, Registration)

app.listen (3009, () => {
  console.log("Running at port 3009")
})