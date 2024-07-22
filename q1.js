const express = require ("express")
 
const app = express ()

app.get ('/', (req,res) => {
    res.send("Welcome to the online store")
})

app.get ('/products' ,(req,res) =>{
    res.send("Here are the products")
})

app.get ('/checkout', (req,res) => {
    res.send("Checkout complete")
})

app.listen(3000, () => {
    console.log("Running at port 3000")
})