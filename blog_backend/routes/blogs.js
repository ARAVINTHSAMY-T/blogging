const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog');

// Add new blog
router.post('/add', async (req, res) => {
    const { title, content, category, image } = req.body;
    try {
        const blog = new Blog({ title, content, category, image });
        await blog.save();
        res.json({ message: "Blog added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all blogs
router.get('/all', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
