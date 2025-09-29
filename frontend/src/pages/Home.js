import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs/all")
            .then(res => setBlogs(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Home Blogs</h2>
            {blogs.length === 0 && <p>No blogs yet. Add a blog to see it here.</p>}
            {blogs.map(blog => (
                <div key={blog._id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.category}</p>
                    <Link to={`/post/${blog._id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
