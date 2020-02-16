const express = require('express');
const router =  express.Router();

//Welcome page
router.get('/', (req,res) => res.send('Hello world'));

module.exports = router;