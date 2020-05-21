const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');

// @route  POST api/contact
// @desc   Test route
//@access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    res.send('Contact info sent...');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  GET api/contact
// @desc   Test route
//@access  Public
router.get('/', async (req, res) => {
  try {
    const contact = await Contact.find().sort({ date: -1 });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
