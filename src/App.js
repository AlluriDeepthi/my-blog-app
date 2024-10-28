// App.js
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import { BlogContext } from './Context/BlogContext';
import './components/Navbar.css'; 

function App() {
    const { posts, setPosts } = useContext(BlogContext);

    const handleCreatePost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        console.log("Updated posts in App.js after creating a new post:", posts);
    };

    useEffect(() => {
        console.log("App.js mounted");
        return () => {
            console.log("App.js unmounted");
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/create" element={<CreatePost onCreatePost={handleCreatePost} />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
