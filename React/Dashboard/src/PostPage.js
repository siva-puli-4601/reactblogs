import React from 'react'
import {Link,useParams } from "react-router-dom";
const PostPage = ({posts,handleDelete}) => {
    const {id}=useParams();
    const post=posts.find(post=> (post.id).toString()===id);
  return (
    <main className='PostPage'>
      <article>
     {post &&
     <>
     <h1>{post.titlt}</h1>
     <p className='postData'>{post.datetime}</p>
     <p className='postBody'>{post.body}</p>
     <Link to={`/edit/${id}`}><button >EDIT</button></Link>
     <button onClick={()=>handleDelete(post.id)}>Delete</button>
     </>
     }
     {!post && 
     <>
     <p> please move to main page</p>
     <Link to="/">Visit Main Page</Link>
     </>}
    
      </article>
    </main>
  )
}

export default PostPage
