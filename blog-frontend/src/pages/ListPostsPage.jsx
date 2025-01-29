import { useEffect, useState } from 'react';
import axios from 'axios';

const ListPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data); // Update posts with the fetched data
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="list-posts-page">
      <h2>All Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            {/* Use imageUrl for the image field */}
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPostsPage;
