const express = require('express');
const router = express.Router();

// Define user routes
router.get('/users', (req, res) => {
  
  res.send('List of users');
});

module.exports = router;
