const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema ({
        title: { type: String, required: true },
        author: { type: String, required: true },
        body: { type: String, required: true },
        created: { type: Date, required: true },
        updated: { type: Date, required: false },
        images: { type: Array, required: false },
});

module.exports = mongoose.model('Blog', Blog)
