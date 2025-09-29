import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const { id } = useParams(); // blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/all`)
      .then(res => {
        const selected = res.data.find(b => b._id === id);
        setBlog(selected);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      {blog.image && <img src={blog.image} alt={blog.title} style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto 20px', borderRadius: '12px' }} />}
      <h2 style={{ textAlign: 'center', color: '#667eea' }}>{blog.title}</h2>
      <p style={{ textAlign: 'center', color: '#764ba2', fontWeight: '500' }}>{blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}</p>
      <p style={{ lineHeight: '1.7', color: '#444', textAlign: 'justify' }}>{blog.content}</p>
      <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '20px', padding: '10px 18px', background: 'linear-gradient(90deg, #667eea, #764ba2)', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>← Back to Home</Link>
    </div>
  );
};

export default Post;
