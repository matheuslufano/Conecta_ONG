import Post from "../post/Post"
import dados from '../dados';
import "./posts.css"

export default function Posts() {

    return (
    <div className="posts">
      {dados.map((post, index) => {
        return (
          console.log(post),
          <div className="post" key={index}>
            <div className="postunico">
              <a rel="stylesheet" style={{ textDecoration: "none", color: "inherit" }} href="/post">
              <img
                src={post.image}
                alt={post.title} // Usando o título como texto alternativo
                className="postImg"
              />
              <div className="postInfo">
                <div className="postCats">
                </div>
                <span className="postDate">{post.date}</span>
                <span className="postTitle">{post.title}</span>
                <p className="postDesc">{post.content}</p>
              </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
    )
}