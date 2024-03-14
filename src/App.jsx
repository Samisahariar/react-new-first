import { useState } from "react";
import Header from "./components/header/Header";
import { useEffect } from "react";
import Blogs from "./components/blogs/Blogs";
import Boolmarks from "./components/boolmarks/Boolmarks";


const App = () => {

  const [blogs, setBlogs] = useState([]);
  const [bookmark, setbookmark] = useState([])

  useEffect(() =>{
    fetch('../blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  const handleBookMark = ({blog}) =>{
    console.log(blog)
    const newarray = [...bookmark, blog]
    setbookmark(newarray)
  }

  const markAsReadContainer = (id) =>{
    const newArray = bookmark.filter(data => data.id !== id);
    setbookmark(newArray)
  }

  return (
    <div>
      <Header></Header>
      <div className="md:flex w-[80%] mx-auto mt-10">
        <Blogs blogs={blogs} handleBookMark={handleBookMark} markAsReadContainer={markAsReadContainer}></Blogs>
        <Boolmarks bookmarks={bookmark}></Boolmarks>
      </div>
    </div>
    
  );
};

export default App;