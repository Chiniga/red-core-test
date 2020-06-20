const express = require('express');
const app = express();
const blogs = require('./routes/blogs');
const db = require('./db');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use('/blogs', blogs);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
