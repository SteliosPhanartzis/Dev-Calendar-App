const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
	res.render('dashboard');
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