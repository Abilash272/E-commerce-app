const router = require('express').Router();

router.route('/').get(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

// Add routes for creating, updating, and deleting products here

module.exports = router;
