const { Router } = require('express');
const { tes, tes2 } = require('../controllers/testerController.js');

const rutaTester = Router();

rutaTester.get('/', async (req, res) => {
    const test = tes()
    res.status(200).json({ mensaje: test });
});

rutaTester.post('/postRuta', async (req, res) => {
    const test = tes2()
    res.status(200).json({ mensaje: test });
});

module.exports = rutaTester;