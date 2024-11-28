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
            <a rel="stylesheet" style={{ textDecoration: "none", color: "inherit" }} href="/post">
            <img
              src={post.image}
              alt={post.title} // Usando o título como texto alternativo
              className="postImg"
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">Projeto</span>
              </div>
              <span className="postTitle">{post.title}</span>
              <hr />
              <span className="postDate">{post.date}</span>
              <p className="postDesc">{post.content}</p>
            </div>
            </a>
          </div>
        );
      })}
    </div>
    )
}