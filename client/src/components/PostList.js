import { useState, useEffect } from "react";
//import Form from "./form";

function PosList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/students")
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
      <div className="students">
        <h2> List of Posts </h2>
        <ul>
            {posts.map(post =>
                <li key={post.id}> {post.firstname} {post.lastname}</li>)}
        </ul>
        {/* <Form addStudent={addStudent} /> */}
      </div>
    );
  }
  
  export default PosList;