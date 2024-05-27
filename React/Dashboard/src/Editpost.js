import React from 'react'
import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
const Editpost = ({posts,handleedit,editposttitle,editpostbody,seteditposttitle,seteditpostbody}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            seteditposttitle(post.title);
            seteditpostbody(post.body);
        }
    }, [post, seteditposttitle, seteditpostbody])

    return (
        <main className="NewPost">
            {editposttitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editposttitle}
                            onChange={(e) => seteditposttitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editpostbody}
                            onChange={(e) => seteditpostbody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleedit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editposttitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default Editpost