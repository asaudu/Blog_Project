import { useState, useEffect } from "react";
import Posts from "../components/form";
//Users/tpl_1121_1/BlogApp/client/src/Pages/Posts.js

function PosList(props) {
  //initial state
  const [posts, setPosts] = useState([]);

  // a state for getting the post id
  const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8080/api/posts")
        .then((response) => response.json())
        .then((posts) => {
          setPosts(posts);
        });
    }, []);

//   const loadPosts = () => {
//     fetch("http://localhost:8080/api/posts")
//       .then((response) => response.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   };

//   useEffect(() => {
//     loadPosts();
//   }, []);

  // A function to handle the Delete functionality but this format didn't really work
  // const onDelete = (post) => {
  //     return fetch(`http://localhost:8080/api/posts/${post.id}`, {
  //         method: "DELETE"
  //     }).then((response) =>{
  //         //console.log(response);
  //         if(response.ok){
  //            loadPosts();
  //         }
  //     })
  // }

  const onDelete = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:8080/api/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleteResponse.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  //a function to grab the post id of the student that we want to edit
  const onEdit = (post) => {
    const editingId = post.id;
    console.log(editingId);
    setEditingPostId(editingId);
  };
  //handles part of the editing function but I don't think it's everything
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     updatePost(posts);
  //   };

  // A function to really update the student 
  const updatePost = (updatedpost) =>{

    //console.log("This is the update line 41", student);
    setPosts((posts) =>{
      const newlistPosts = [];
      for(let post of posts){
        if(post.id === updatedpost.id){
            newlistPosts.push(updatedpost);
        } else{
          newlistPosts.push(posts);
        }
      }
      return newlistPosts;
    })
    // This line is only to close the form! 
    setEditingPostId(null);
  }

  const addPost = (newPost) => {
    //console.log(newPost);
    //postStudent(newPost);
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div className="transparentBox">
      <div className="posts">
        <h2> List of Posts </h2>
        <ul>
          {posts.map((post) => {
            if (post.id === editingPostId) {
              return <Posts addPost={addPost} savePost={updatePost}/>;
            } else {
              return (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onEdit(post);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onDelete(post.id);
                    }}
                  >
                    Delete
                  </button>
                  <strong>Title:</strong> {post.title} <strong>Date:</strong>
                  {post.date} <strong>Blog Post:</strong> {post.post_content}
                  <strong>Published By: </strong>
                  {post.author} <strong>Category:</strong> {post.category_type}
                </li>
              );
            }
          })}
          <br />
        </ul>
        {/* <Form addStudent={addStudent} /> */}
      </div>
    </div>
  );
}

export default PosList;
