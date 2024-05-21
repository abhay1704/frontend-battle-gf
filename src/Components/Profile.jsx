import "./Profile.css";
import avtar from "../assests/avatar.jpg";
import bgImage from "../assests/background.jpg";

const Profile = () => {
  return (
    <div className="mini-profile-card">
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="profile-img">
        <img src={avtar} alt="avatar" className="profile-avatar" />
      </div>
      <div className="content">
        <h2 className="name">Random User</h2>
        <div className="about">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          asperiores minus saepe ea.
        </div>
      </div>
    </div>
  );
};

export default Profile;
