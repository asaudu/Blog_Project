const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/posts', cors(), async (req, res) => {
    
    try{
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/posts', cors(), async (req, res) => {
    const newPost = { title: req.body.title, date: req.body.date, post_content: req.body.post_content, category_type: req.body.category_type, author: req.body.author }
    console.log([newPost.title, newPost.date]);
    const result = await db.query(
        'INSERT INTO posts(title, date, post_content, category_type, author) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [newPost.title, newPost.date]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});