import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    const token = 'IGQVJVMkxpZAU9PSHoydTdCZAjlYTy1CZAE1iMWJCNWo3M0tGRzREVXZAyNENMNTZA2ZA0JjcWtuYmJndEJqUXhWWERQQW1ua2tvZAzBFZAGxpR3dRdUFzZA1pHYUVvY3NrVGxKZA1VTVGZABdjhkSE5UbUFBeUlGeTRqc1hmOHptSEUw';
    const limit = 8;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=${limit}`;

    try {
      const response = await axios.get(url);
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
    }
  };

  return (
    <div className="instagram-feed">
      {posts.map((post, index) => (
        <a key={index} href={post.permalink} target="_blank" rel="noopener noreferrer">
          <img src={post.thumbnail_url || post.media_url} alt={post.caption} />
        </a>
      ))}
      <a
        className="instagram-view-more"
        href="https://www.instagram.com/bang-olufsen"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}
      >
        View more on Instagram
      </a>
    </div>
  );
};

export default InstagramFeed;
