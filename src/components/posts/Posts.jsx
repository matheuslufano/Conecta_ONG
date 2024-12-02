import Post from "../post/Post"
import dados from '../dados';
import { useState } from "react";
import "./posts.css"

export default function Posts() {

  return (
    <div className="posts">
      {dados.map((post, index) => {
        return (
          console.log(post),
          <div className="post" key={index}>
            <div className="postunico">
              <img
                src={post.image}
                alt={post.title}
                className="postImg"
                // onClick={() => {
                //   window.location.href = `/post/${post.id}`;
                // }}
              />
              <div className="postInfo">
                <div className="postCats">
                </div>
                <span className="postDate">{post.date}</span>
                <span className="postTitle">
                  <a rel="stylesheet" style={{ textDecoration: "none", color: "inherit" }} href="/post">
                  {post.title}
                  </a>
                </span>
                <p className="postDesc">{post.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}