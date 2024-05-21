import { FaVideo, FaPlus } from "react-icons/fa";
import { MdAddPhotoAlternate, MdEvent } from "react-icons/md";
import "./CreatePost.css";

const Post = () => {
  return (
    <div className="create-post">
      <div className="text-post post">
        <p className="about-btn small-text">Start Writing a post</p>
        <button className="start-text-post">
          <FaPlus className="icon" />
          Start a post
        </button>
      </div>
      <div className="files-post post">
        <p className="about-btn small-text">Or Choose</p>
        <div className="media-icons">
          <button className="photo">
            <MdAddPhotoAlternate className="icon-media photo-icon" />
          </button>
          <button className="video">
            <FaVideo className="icon-media video-icon" />
          </button>
          <button className="event">
            <MdEvent className="icon-media event-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
