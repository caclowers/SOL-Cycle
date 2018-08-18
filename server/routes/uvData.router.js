const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
   console.log('id', req.body);
})


router.post('/', (req, res) => {
   console.log('id', req.body);
})


router.put('/:id', (req, res) => {
   console.log('id', req.body);
})


router.delete('/:id', (req, res) => {
   console.log('id', req.body);
})

module.exports = router;