import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BlogProvider } from './Context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BlogProvider>
                <App />
            </BlogProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
