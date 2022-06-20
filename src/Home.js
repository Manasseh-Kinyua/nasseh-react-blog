import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Manasseh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Kinyua', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Denis', id: 3 },
    ]);

  return (
    <div className="home">
        <h3>My Blogs</h3>
        <BlogList blogs={blogs} />
    </div>
  )
}

export default Home
