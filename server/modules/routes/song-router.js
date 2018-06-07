const express = require('express');
const router = express.Router();

const pool = require('../pool/pool');

router.get('/', (req, res)=>{
   console.log('Handling GET for /song');
   // Query to be sent through the pool to our db
   const queryText = 'SELECT * FROM songs';
   // 
   pool.query(queryText).then((result)=> {
      res.send(result.rows);
   }).catch((error)=> {
      console.log('Error for GET from /song: ', error);
      res.sendStatus(500)
   });
});

router.post('/', (req, res)=> {
   console.log('Handling POST for /song', req.body);
   res.sendStatus(201);
});

router.put('/', (req, res)=> {
   console.log('Handling PUT for /song');
   res.sendStatus(200);
});

router.delete('/:id', (req, res)=> {
   console.log('Handling DELETE for /song');
   const id = req.params.id;
   const queryText = 'DELETE FROM songs WHERE id = $1';
   pool.query(queryText, [1]).then((result)=> {
      console.log('Deleted from /song', id);
      res.sendStatus(200);
   }).catch((error)=> {
      console.log('Error handling DELETE for /song', error);
      res.sendStatus(500);
   });
});


module.exports = router;