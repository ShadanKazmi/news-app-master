const { Schema, Model, model } = require('mongoose')
const express = require('express')

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        articleId:{
            type: String,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'userInfo',
            required: true,
        },
    },
        { timestamps: true }
)

const Comment = model('comment', commentSchema);

module.exports = Comment;