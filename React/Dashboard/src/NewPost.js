import React from 'react'

const NewPost = ({handleSubmit,posttitle,setposttitle,postbody,setpostbody}) => {
  return (
    <main className='NewPost'>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
        required
        autoFocus
        id="postTitle"
        type="text"
        placeholder='type title'
        value={posttitle}
        onChange={(e)=>setposttitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
        id="postBody"
        required
        placeholder='type body'
        value={postbody}
        onChange={(e)=>setpostbody(e.target.value)}
        />
       <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
