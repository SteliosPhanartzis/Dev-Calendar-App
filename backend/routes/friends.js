const express = require('express');
const router =  express.Router();

//Friends
router.get('/', (req, res) => {
	res.render('friends');
})

router.post('/', (req, res) => {
	res.render('friends');
})

router.put('/', (req, res) => {
	res.render('friends');
})

router.delete('/', (req, res) => {
	res.render('friends');
})

module.exports = router;