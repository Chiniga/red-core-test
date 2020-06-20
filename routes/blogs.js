const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blogs');
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

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
