import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import {BlogContext} from '../Context/BlogContext';

const EditPost = () => {
  const { id } = useParams();
  const { blogs, dispatch } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const blog = blogs.find(blog => blog.id === parseInt(id));
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [id, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { id: parseInt(id), title, content };
    dispatch({ type: 'EDIT_BLOG', payload: updatedBlog });
    navigate(`/blog/${id}`); // Replace history.push with navigate
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
