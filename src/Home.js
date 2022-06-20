import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // const [name, setName] = useState('Manasseh');

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data)
                setIsPending(false)
            })
        }, 1000);
    }, []);

  return (
    <div className="home">
        {isPending && <div>Loading.........</div>}
        {blogs && <BlogList blogs={blogs} title='My Blogs' />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Manasseh')} title="Manasseh's Blogs" /> */}
    </div>
  )
}

export default Home
