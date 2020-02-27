const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+"/../dist/login.html"));
})

router.post('/', (req, res) => {
	res.render('login');
})

module.exports = router;