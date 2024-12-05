import "./singlePost.css";
import { Dialog, DialogProps } from "@mui/material";

interface iPost extends DialogProps {
  title: string;
  content: string;
  date: string;
  image: string;
  author?: string;
  onClose: () => void;
}

export default function SinglePost(props: iPost) {
  const { title, content, date, image, author, open, onClose } = props;
  return (
    <Dialog 
      sx={{ "& .MuiDialog-paper": { borderRadius: 4 }, backdropFilter: "blur(5px)" }}
        maxWidth={"lg"}
        fullWidth
        open={open}
        onClose={onClose}>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src={image}
            alt={title}
            className="singlePostImg"
            style={{
              height: '500px',
              objectFit: 'cover',
              borderRadius: 7.5,
             }}
          />
          <h1 className="singlePostTitle">
            {title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{author || "Unknown"}</b>
            </span>
            <span className="singlePostDate">{date || "Unknown date"}</span>
          </div>
          <p className="singlePostDesc" style={{ textAlign: "justify" }}>
            {content}
          </p>
        </div>
      </div>
    </Dialog>
  );
}

