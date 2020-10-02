const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: 'post-' },
    userId: { type: Schema.Types.ObjectId, ref: 'user-' },
    comment: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    likes: [
        {
            user: { type: Schema.Types.ObjectId, ref: 'user-' }
        }
    ],
    replies: [
        {
            user: { type: Schema.Types.ObjectId, ref: 'user-' },
            reply: { type: String, required: true },
            name: { type: String },
            avatar: { type: String },
            date: { type: Date, default: Date.now }
        }
    ],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('comment-', CommentSchema);