const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Maybe?

const PORT = 5000 || process.env.PORT;

app.listen(PORT, ()=> {
   console.log("Server up on port: ", PORT);
})