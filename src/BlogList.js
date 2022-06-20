import React from 'react'

const BlogList = ({blogs, title, handleDelete}) => {

  return (
    <div className='blog-list'>
        <h3>{title}</h3>
      {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written By: { blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}
    </div>
  )
}

export default BlogList
