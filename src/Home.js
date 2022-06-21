import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const [name, setName] = useState('Manasseh');

    

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading.........</div>}
        {blogs && <BlogList blogs={blogs} title='My Blogs' />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Manasseh')} title="Manasseh's Blogs" /> */}
    </div>
  )
}

export default Home
