const Blog = require('../models/blogs');

exports.list = (req, res) => {
    Blog.find(req.query).exec((err, blogs) => {
        if (err) {
            res.status(500).send(err);
        }
        if(blogs.length === 0) {
            res.send('Blogs not found')
        } else {
            res.send(JSON.stringify(blogs))
        }
    });
};

exports.get = (id, res) => {
    Blog.findById(id).exec((err, blog) => {
        if (err) {
            res.status(500).send(err);
        }
        if(blog === null) {
            res.send('Blog not found')
        } else {
            res.send(JSON.stringify(blog))
        }
     });
};

exports.create = (req, res) => {
    let image_dest = [];
    req.files.forEach(file => {
        image_dest.push(file.path);
    });
    const newBlog = new Blog({
        ...req.body,
        images: image_dest,
        created: Date.now()
    });
    newBlog.save((err) => {
        if(err) {
            res.status(400).send('Unable to save Blog');
        } else {
            res.send('Blog saved successfully!');
        }
    });
};

exports.update = (id, req, res) => {
    let image_dest = [];
    req.files.forEach(file => {
        image_dest.push(file.path);
    });
    const updateBlog = {
        ...req.body,
        images: image_dest,
        updated: Date.now()
    };
    Blog.findByIdAndUpdate(id, updateBlog).exec((err) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send('Blog updated successfully!');
    })
};

exports.delete = (id, res) => {
    console.log(`Deleting Blog ${id}`);
    Blog.findByIdAndDelete(id).exec((err) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send('Blog deleted successfully!');
    })
};