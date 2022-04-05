import { useState } from 'react';
import PosList from '../components/PostList';

const Posts = (props) => {

    const categories = ["Solo Trip", "Group Trip", "Family", "Business"];

    const [post, setPost] = useState({
        title: "",
        date: "",
        post_content: "",
        category_type: "",
        author: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleTitleChange = (event) => {
        const title = event.target.value;
        setPost((post) => ({ ...post, title }));

    }

    const handleDateChange = (event) => {
        const date = event.target.value;
        setPost((student) => ({ ...student, date }));

    }

    const handlePostContentChange = (event) => {
        const post_content = event.target.value;
        setPost((student) => ({ ...student, post_content }));

    }

    const handleAuthorChange = (event) => {
        const author = event.target.value;
        setPost((post) => ({ ...post, author }));

    }

    //A function to handle the post request
    const newPost = (newwPost) => {
        return fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newwPost)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addPost(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newPost(post);
        
    };
return (
    <div>
        <h1>Welcome to the blog! Looking forward to creating posts!</h1>
        <PosList />
    <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Post Title</label>
                <input
                    type="text"
                    id="add-post-title"
                    placeholder="Post title"
                    required
                    value={post.title}
                    onChange={handleTitleChange}

                /> <br/>
                <label>Date</label>
                <input
                    type="date"
                    id="date"
                    required
                    value={post.date}
                    onChange={handleDateChange}

                /> <br/>
                <label>Post Content</label>
                <textarea
                    type="text"
                    id="add-post-content"
                    placeholder="Drop your concert experience here"
                    required
                    value={post.post_content}
                    onChange={handlePostContentChange}
                /> <br/>
                <label>Author</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Username Here"
                    required
                    value={post.author}
                    onChange={handleAuthorChange}

                /> <br/>
                <label>Category</label>
                <select>
                    <option value="{post.category_type}">Select Category</option>
                    {categories.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select> <br/>
                <button type="submit">Publish</button>
            </fieldset>
        </form>
    </div>
);
};

export default Posts;
