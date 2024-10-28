// CreatePost.js
import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = ({ onCreatePost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            const newPost = {
                id: Date.now(),
                title,
                content,
            };
            onCreatePost(newPost);
            setTitle('');
            setContent('');
            setMessage('Blog post created successfully!');
        } else {
            setMessage('Please fill in both fields.');
        }
    };

    return (
        <div className="create-post-container">
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit} className="create-post-form">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Create Blog Post</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default CreatePost;
