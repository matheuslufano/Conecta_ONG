import "./post.css";

export default function Post() {
  return (
    <div className="post">
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
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim molestias quisquam, nihil autem hic error obcaecati 
        non tempore culpa esse id fugit minima tempora atque, 
        iste sed maxime cumque vitae.
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim molestias quisquam, nihil autem hic error obcaecati 
        non tempore culpa esse id fugit minima tempora atque, 
        iste sed maxime cumque vitae.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim molestias quisquam, nihil autem hic error obcaecati 
        non tempore culpa esse id fugit minima tempora atque, 
        iste sed maxime cumque vitae.
      </p>
    </div>
  );
}
