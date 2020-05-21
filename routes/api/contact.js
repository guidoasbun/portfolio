const express = require('express');
const router = express.Router();

// @route  GET api/contact
// @desc   Test route
//@access  Public
router.get('/', (req, res) => res.send('Contact Route'))

// @route  POST api/contact
// @desc   Test route
//@access  Public
router.post('/', (req, res) => res.send('Post Route'))



module.exports = router 