import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Manasseh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Kinyua', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Denis', id: 3 }
    ]);
  return (
    <div className="home">
    </div>
  )
}

export default Home
