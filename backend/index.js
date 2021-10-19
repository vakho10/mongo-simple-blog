const mongoose = require('mongoose');
const express = require('express');

const app = express()
app.use(express.json());

const port = 3000

mongoose.connect('mongodb://localhost:27017/my-blog-db');

const PostsModel = mongoose.model('posts', new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    createDate: { type: Date, required: true }
}));

// [GET] posts (order by create time descending)
app.get('/api/posts', async (req, res) => {
    const result = await PostsModel.find().sort({ createDate: -1 });
    res.json(result);
})

// [POST] posts
app.post('/api/posts', async (req, res) => {
    const createdEntry = await PostsModel.create(req.body);
    res.json(createdEntry);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
