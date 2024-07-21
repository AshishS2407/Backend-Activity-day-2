const express = require ("express")

const PORT = 3000

const app = express ();

let maintenanceMode = true;

function Maintenance (req,res) {

    if (maintenanceMode) {
        res.json({message :'Service Unavailable'})
    } else {
        next();
        }
    }

    app.use(Maintenance)

    app.get('/', (req,res) => {
        res.send('Welcome to Application')
    })

app.listen(PORT, ()=>{
    console.log("running a Port 3000")
})