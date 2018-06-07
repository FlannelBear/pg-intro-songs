const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   console.log('Handling GET for /song');
   res.send('Woof!');
});

router.post();

router.put();

router.delete();


module.exports = router;