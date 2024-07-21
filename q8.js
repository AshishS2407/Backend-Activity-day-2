const express = require('express');
const path = require('path');
const app = express();

const PORT = 3003;

app.get ('/', (req,res) => {

    res.sendFile(path.join(__dirname , 'q8.html'))

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
