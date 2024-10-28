// BlogList.js
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../Context/BlogContext';
import './BlogList.css';

const BlogList = () => {
    const { posts } = useContext(BlogContext);

    useEffect(() => {
        console.log("Received posts in BlogList.js:", posts);
    }, [posts]);

    if (!posts || !Array.isArray(posts)) {
        return <p>No posts available.</p>;
    }

    return (
        <div className="blog-list-container">
            <h2>Blog Posts</h2>
            {posts.length === 0 ? (
                <p>No blog posts yet. Start by creating one!</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}...</p>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
