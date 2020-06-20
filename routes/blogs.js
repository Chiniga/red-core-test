const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blogs');
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

router.get('/', (req, res) => {
    blogs.list(req, res);
});

router.post('/', upload.array('images'), (req, res) => {
    blogs.create(req, res);
});

router.get('/:id', (req, res) => {
    blogs.get(req.params.id, res);
});

router.put('/:id', upload.array('images'), (req, res) => {
    blogs.update(req.params.id, req, res);
});

router.delete('/:id', (req, res) => {
    blogs.delete(req.params.id, res);
});

module.exports = router;
