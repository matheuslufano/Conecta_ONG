import "./singlePost.css";
import dados from "../dados";

export default function SinglePost() {
    // Acesse o item do array pelo índice desejado (exemplo: índice 0)
    const post = dados[0];

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src={post.image}
                    alt={post.title} // Usando o título como texto alternativo
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>{post.author || "Unknown"}</b>
                    </span>
                    <span className="singlePostDate">{post.date || "Unknown date"}</span>
                </div>
                <p className="singlePostDesc" style={{textAlign:"justify"}}>
                    {post.content}
                </p>
            </div>
        </div>
    );
}
