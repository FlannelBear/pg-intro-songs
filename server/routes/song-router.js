const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   console.log('Handling GET for /song');
   res.send('Woof!');
});

router.post('/', (req, res)=> {
   console.log('Handling POST for /song', req.body);
   res.sendStatus(201);
});

router.put('/', (req, res)=> {
   console.log('Handling PUT for /song');
   res.sendStatus(200);
});

router.delete('/', (req, res)=> {
   console.log('Handling DELETE for /song');
   res.sendStatus(200);
});


module.exports = router;