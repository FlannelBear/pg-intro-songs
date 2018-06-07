// Pool of connections to our database.
// Holds database connections for others.
// Keeps us DRY.

// Requires
const pg = require('pg');
// Create shortcut for Pool creation
const POOL = pg.Pool;
// Name Database
const DATABASE_NAME = 'joshuaevans';
// Config object
const config = {
   database: DATABASE_NAME,   // name of database
   host: 'localhost',         // To which where we will connect
   port: 5432,                // Default port the db is listening to
   max: 10,                   // Max connections in the pool for our database
   idleTimeoutMillis: 30000   // limit of 30 seconds to connect
};
// Make the db pool
const pool = new POOL(config);// Instantiate a new instance of the Pool class using the config data defined above
// Connect pool to db
pool.on('connect', (client)=>{
   console.log(`Connected to database: ${DATABASE_NAME} from ${client}`);
});
// Handle errors when connecting to the db (Also id waiting too long)
pool.on('error', (err, client)=>{
   console.log(`Error connecting to database: ${DATABASE_NAME} from ${client}. Err: ${err}`);
   process.exit(-1); // THIS ENDS THE PROCESS FOR THE CONNECTION SO THAT IT CAN BE USED BY SOMEONE ELSE
                     // The -1 indicates what? 
});
module.exports = pool;