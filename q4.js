const express = require ("express")
const app = express ()
const PORT = 3000;

app.use(express.json())

app.get('/user/:id' , (req,res) => {

  const id = req.params.id
  res.json({message: `welcome User with User id :${id}`})
}) 


app.listen (PORT, () => {

  console.log("running at port 3000")
})
