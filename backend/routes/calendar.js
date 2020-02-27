const path = require('path');
const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+"/../dist/index.html"));
})

router.post('/', (req, res) => {
	res.render('dashboard');
})

router.put('/', (req, res) => {
	res.render('dashboard');
})

router.delete('/', (req, res) => {
	res.render('dashboard');
})

router.get('/', (req, res) => {
	res.render('./dist/index.html');
})

module.exports = router;