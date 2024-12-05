import dados from '../dados';
import { Box, Grid } from "@mui/material";
import SinglePost from "../singlePost/SinglePost";
import { useState } from "react";

export default function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenPost = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {selectedPost && (
        <SinglePost
          title={selectedPost.title}
          content={selectedPost.content}
          date={selectedPost.date}
          image={selectedPost.image}
          author={selectedPost.author}
          open={Boolean(selectedPost)}
          onClose={handleClosePost}
        />
      )}
      <Grid container spacing={2} className="posts" sx={{ py: 10}}>
        {dados.map((post, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Box
              sx={{ cursor: "pointer", 
                border: '1px solid #ddd', 
                borderRadius: 5, 
                overflow: 'hidden', 
                transition: 'transform 0.2s', 
                '&:hover': { transform: 'scale(1.05)' } 
              }}
              onClick={() => handleOpenPost(post)}
            >
              <div className="postunico" style={{ padding: '1rem', textAlign: 'center' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="postImg"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid #ddd' }}
                />
                <div className="postInfo" style={{ padding: '1rem' }}>
                  <div className="postCats">
                  </div>
                  <span className="postDate" style={{ fontSize: '0.875rem', color: '#666' }}>{post.date}</span>
                  <span className="postTitle" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                    <a rel="stylesheet" style={{ textDecoration: "none", color: "inherit" }} href="#">
                      {post.title}
                    </a>
                  </span>
                  <p className="postDesc" style={{ fontSize: '1rem', color: '#555', marginTop: '0.5rem' }}>
                    {typeof post.content === 'string' ? post.content.substring(0, 100) : "Content not available"}
                  </p>
                </div>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

