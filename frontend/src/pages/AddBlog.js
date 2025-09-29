import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/blogs/add", { title, content, category, image })
            .then(res => {
                alert("Blog added!");
                setTitle(""); setContent(""); setCategory(""); setImage("");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
                <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
                <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;
