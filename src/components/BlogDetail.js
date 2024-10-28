import React, { useContext } from 'react';
import {BlogContext} from '../Context/BlogContext';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    <div>
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <Link to={`/edit/${blog.id}`}>Edit Post</Link>
        </>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetail;
