const express = require('express');
const router =  express.Router();

//Dashboard
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

//Login
router.get('/', (req, res) => {
	res.render('login');
})

router.post('/', (req, res) => {
	res.render('login');
})

//Logout
router.post('/', (req, res) => {
	res.render('logout');
})

//Register
router.get('/', (req, res) => {
	res.render('register');
})

router.post('/', (req, res) => {
	res.render('register');
})

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

//Schedule
router.get('/', (req, res) => {
	res.render('schedule');
})

module.exports = router;