import { useState } from "react";
import { FaVideo, FaPlus } from "react-icons/fa";
import { MdAddPhotoAlternate, MdEvent } from "react-icons/md";
import "./CreatePost.css";

const CreatePost = ({ setPostData }) => {
  const [showForm, setShowForm] = useState(false);

  const startCreatingPost = function (e) {
    setShowForm(true);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const newPost = {
      name: e.target.name.value,
      postMessage: e.target.postMessage.value,
      url: e.target.postUrl.value,
      postTime: new Date(),
    };

    console.log(newPost);

    setPostData((posts) => [...posts, newPost]);

    setShowForm(false);
  };

  return (
    <div className="create-post">
      {showForm ? (
        <div className="post-form">
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter your Name ..."
            />
            <textarea
              type="text"
              name="postMessage"
              id="postMessage"
              placeholder="Write Something to Post ..."
            />
            <input
              type="url"
              name="postUrl"
              id="urls"
              placeholder="Image url for attachment"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <>
          <div className="text-post post" onClick={startCreatingPost}>
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
        </>
      )}
    </div>
  );
};

export default CreatePost;
