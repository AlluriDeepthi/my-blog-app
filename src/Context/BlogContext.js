// BlogContext.js
import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    return (
        <BlogContext.Provider value={{ posts, setPosts }}>
            {children}
        </BlogContext.Provider>
    );
};
