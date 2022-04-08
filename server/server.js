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

app.get('/api/signup', cors(), async (req, res) => {
    
    try{
        const { rows: signup } = await db.query('SELECT * FROM signup');
        res.send(signup);
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
        [newPost.title, newPost.date, newPost.post_content, newPost.category_type, newPost.author]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

//post request for Signup table
app.post('/api/signup', cors(), async (req, res) => {
    const newSignup = { username: req.body.username, email: req.body.email }
    console.log([newSignup.username, newSignup.email]);
    const result = await db.query(
        'INSERT INTO signup(username, email) VALUES($1, $2) RETURNING *',
        [newSignup.username, newSignup.email]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});
/*
update for a specific post
         1st arg       2nd arg     3rd arg
app.put('URL:postId', cors(), async (req, res)) => {
//wanna grab the id so create a vriable
const postId = req.params.postId;
//create the object u will use
const updatePost = { req.body or the long form }
//now construct the query per sql syntax
const query = `UPDATE posts SET title=$1, date=$2, post_content=$3, category_type=$4, author=$5 WHERE id = ${postId} RETURNING *`;
//console log to be sure it's coming through
console.log(query);
//now to define how the values will come in, should be an array
const values = [updatePost.title, updatePost.date, updatePost.post_content, updatePost.category_type, updatePost.author];
//create the error handling and promise handling
try{
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
//e is important so u can see the errors that come thru
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
    }
}
*/
// Put request - Update request
app.put('/api/posts/:postId', cors(), async (req, res) =>{
    const postId = req.params.postId;
    const updatePost = { id: req.body.id, title: req.body.title, date: req.body.date, post_content: req.body.post_content, category_type: req.body.category_type, author: req.body.author }
    //console.log(req.params);
    // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
    console.log(postId);
    console.log(updatePost);
    const query = `UPDATE posts SET title=$1, date=$2, post_content=$3, category_type=$4, author=$5 WHERE id = ${postId} RETURNING *`;
    console.log(query);
    const values = [updatePost.title, updatePost.date, updatePost.post_content, updatePost.category_type, updatePost.author];
    try{
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
    }
});

// delete request
app.delete('/api/posts/:postId', cors(), async (req, res) =>{
    const postId = req.params.postId;
    //console.log(req.params);
    await db.query('DELETE FROM posts WHERE id=($1)', [postId]);
    res.send({ status: "Successful delete!" });
    //res.status(200).end();

});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});