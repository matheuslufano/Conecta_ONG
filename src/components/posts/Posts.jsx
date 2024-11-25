import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
    const fakeData = () => [
        {
          title: "Lorem ipsum dolor sit amet",
          date: new Date().toDateString(),
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias quisquam, nihil autem hic error obcaecati non tempore culpa esse id fugit minima tempora atque, iste sed maxime cumque vitae.",
        },
        {
          title: "Titulo teste",
          date: "1 hour ago",
          content: "Sei lá... Vai ter alguna coisa aqui",
        },
        {
          title: "Lorem ipsum dolor sit amet",
          date: "1 hour ago",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias quisquam, nihil autem hic error obcaecati non tempore culpa esse id fugit minima tempora atque, iste sed maxime cumque vitae.",
        },{
          title: "Lorem ipsum dolor sit amet",
          date: "1 hour ago",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias quisquam, nihil autem hic error obcaecati non tempore culpa esse id fugit minima tempora atque, iste sed maxime cumque vitae.",
        },{
          title: "Lorem ipsum dolor sit amet",
          date: "1 hour ago",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias quisquam, nihil autem hic error obcaecati non tempore culpa esse id fugit minima tempora atque, iste sed maxime cumque vitae.",
        },{
          title: "Lorem ipsum dolor sit amet",
          date: "1 hour ago",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias quisquam, nihil autem hic error obcaecati non tempore culpa esse id fugit minima tempora atque, iste sed maxime cumque vitae.",
        },
      ];
    return (
        <div className="posts">
      {fakeData().map((post, index) => {
        return (
          <div className="post" key={index}>
            <img
              src="./image copy 2.png"
              alt="postImg"
              className="postImg"
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
              </div>
              <span className="postTitle">{post.title}</span>
              <hr />
              <span className="postDate">{post.date}</span>
              <p className="postDesc">{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
    )
}