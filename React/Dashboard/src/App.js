import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Index from "./Index.css"
import { Route,Routes, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts";
import Editpost from "./Editpost";
import windowsize from "./hooks/useWindowsize"
function App() {
  const [posts,setPosts]=useState([])
  const navigate=useNavigate();
  const [posttitle,setposttitle]=useState("");
  const [postbody,setpostbody]=useState("");
  const [search,setsearch]=useState("");
  const [searchRes,setsearchres]=useState([]);
  const[editposttitle,seteditposttitle]=useState("");
  const[editpostbody,seteditpostbody]=useState("");
  const {width} =windowsize();
  const handleedit=async (id)=>
  {
    const date=format(new Date(),"MMMM dd,yyyy pp");
    const newpos={id:`${id}`,title:editposttitle,datatime:date,body:editpostbody};
   try{
    const uplis=await api.put(`/posts/${id}`,newpos);
    const res=posts.map((post)=>((post.id).toString()===id?{...uplis}:post));
    seteditposttitle('');
    seteditpostbody('');
    setPosts(res);
    navigate("/");
   } catch(err)
   {
    console.log(err.massage);
   }
  }
  const handleDelete=async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  useEffect(()=>
  {
    const fetchpost=async ()=>
    {
      try{
       const data= await api.get("/posts"); // instead of useing faetch we use this because it maintain the errors directly it faster than fetch
       setPosts(data.data);  // it directly convert into the json file we simply get it by data.data
      }catch(err)
      {
        if(err.data)
        {
          console.log("failed to open")
          console.log(err.data.data);
          console.log(err.data.status);
        }
        else{
          console.log(err.message);
        }
      }
    }
    fetchpost();
  },[])
  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setsearchres(filteredResults.reverse());
  }, [posts, search])
  const handleSubmit=async (e)=>
  {
     e.preventDefault();
     const id=posts.length ? posts.length+1:1;
     const date=format(Date(),"MM dd,yyyy");
     const newpost={id:`${id}`,title:posttitle,datetime:date,body:postbody};
     try{
      const newdata=await api.post("/posts",newpost);
      console.log(newdata.data);
      const uplis=[...posts,newdata.data];
     console.log(uplis);
     setPosts(uplis);
     setposttitle("")
     setpostbody("");
     navigate('/');
     } catch(err)
     {
    
     }

  }
  return (
    <div className="App">
      <Header title={"React Js Blogs"}
      width={width}/>
      <Nav 
      search={search}
      setsearch={setsearch}/>
      <Routes>
          <Route  path="/" element={<Home 
                  posts={searchRes}/>} />

          <Route  path="/post" element={<NewPost
         handleSubmit={handleSubmit}
          posttitle={posttitle}
          setposttitle={setposttitle}
          postbody={postbody}
          setpostbody={setpostbody} />} />

          <Route path="/edit/:id" element={<Editpost 
          posts={posts}
          handleedit={handleedit}
          editposttitle={editposttitle}
          editpostbody={editpostbody}
          seteditposttitle={seteditposttitle}
          seteditpostbody={seteditpostbody}/>}/>

          <Route  path="/post/:id" element={<PostPage posts={posts} 
          handleDelete={handleDelete}
           />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/*" element={<Missing />}/>
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
