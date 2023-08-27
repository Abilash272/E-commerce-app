// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create and save the new admin
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({ email, password: hashedPassword });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = router;
