import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Manasseh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Kinyua', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Manasseh', id: 3 },
    ]);

    // const [name, setName] = useState('Manasseh');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log(blogs);
    }, []);

  return (
    <div className="home">
        <BlogList blogs={blogs} title='My Blogs' handleDelete={handleDelete} />
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Manasseh')} title="Manasseh's Blogs" /> */}
    </div>
  )
}

export default Home
