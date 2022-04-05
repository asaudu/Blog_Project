import { useState, useEffect } from "react";
//import Form from "./form";

function PosList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/posts")
        .then((response) => response.json())
        .then(posts =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            // for (let index in students){
            //    if( index !== "3"){
            //        setStudents(students);
            //    }
            // }; 
            setPosts(posts)      
        })
        
    }, []);

    
    //Users/tpl_1121_1/BlogApp/client/src/components/PostList.js
    // const addStudent = (newStudent) => {
    //     //console.log(newStudent);
    //     //postStudent(newStudent);
    //     setStudents((students) => [...students, newStudent]);
    // }


    return (
      <div className="posts">
        <h2> List of Posts </h2>
        <ul>
            {posts.map(post =>
                <li key={post.id}> <button>Edit</button> <button>Delete</button> <strong>Title:</strong> {post.title} <strong>Date:</strong> {post.date} <strong>Blog Post:</strong> {post.post_content} <strong>Published By: </strong>{post.author} <strong>Category:</strong> {post.category_type}</li>)} <br/>
        </ul>
        {/* <Form addStudent={addStudent} /> */}
      </div>
    );
  }
  
  export default PosList;