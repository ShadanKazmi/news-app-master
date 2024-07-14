const express = require("express");
const mongoose = require('mongoose');
const { Router } = require("express");
const Comment = require('../model/comment');
const router = Router();
const app = express();

router.post('/', async (req, res) => {
    const { content, articleId, userId } = req.body;

    if (!content || !articleId || !userId) {
        return res.status(400).json({ error: 'Content, articleId, and userId are required.' });
    }

    try {
        const comment = new Comment({
            content,
            articleId,
            createdBy: userId,
        });

        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        console.error('Error saving comment:', error);
        res.status(500).json({ error: 'Server error' });
    }
})

router.get('/', async (req, res) => {
    const { articleId } = req.query;
    try {
        const comments = await Comment.find({ articleId }).populate('createdBy', 'firstName lastName');// Find comments based on articleId
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;