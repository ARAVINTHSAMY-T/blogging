const express = require('express');
const router = express.Router();
const User = require('./models/User');

// Signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.json({ error: "User already exists" });

        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.json({ error: "Invalid credentials" });

        res.json({ username: user.username, token: "dummy-jwt-token" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
