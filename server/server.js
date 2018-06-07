const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() ); // Maybe?

const songRouter = require('./modules/routes/song-router.js');
app.use('/song', songRouter);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, ()=> {
   console.log("Server up on port: ", PORT);
})