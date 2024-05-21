import React from "react";
import "./Profile.css";
import avatar from "../assests/avatar.jpg";
import bg from "../assests/background-2.jpg";
import { GoGlobe } from "react-icons/go";
import { MdDeveloperMode } from "react-icons/md";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="introduction">
          <img src={avatar} alt="Profile" className="profile-picture" />
          <div className="profile-description">
            <div className="identifier">
              <h1 className="profile-title">
                Abhay Pratap Singh, Software Engineer
              </h1>
              <p className="profile-location">UP, India</p>
            </div>
            <div className="profile-about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl ut aliquet ultricies, nunc mauris tincidunt nunc,
                ut lacinia nunc nunc auctor nunc. Sed euismod, nisl ut aliquet
                ultricies, nunc mauris tincidunt nunc, ut lacinia nunc nunc
                auctor nunc.
              </p>
            </div>

            <div className="buttons">
              <button className="contact-btn">Contact</button>
              <button className="connection-btn">Connections &nbsp; 54</button>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <div className="avatar">
              <GoGlobe />
            </div>
            <div className="detail">
              <h3>Engineer</h3>
              <p>Company A</p>
              <p>August 2021 - Present</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="avatar">
              <MdDeveloperMode />
            </div>
            <div className="detail">
              <h3>Frontend Developer</h3>
              <p>Company B</p>
              <p>August 2021 - Present</p>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-item">
            <div
              className="image"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3NzfGVufDB8fDB8fHww)`,
              }}
            ></div>
            <div className="title">Project-1</div>
          </div>
          <div className="project-item">
            <div
              className="image"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww')`,
              }}
            ></div>
            <div className="title">Project-2</div>
          </div>{" "}
          <div className="project-item">
            <div
              className="image"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=400')`,
              }}
            ></div>
            <div className="title">Project-3</div>
          </div>{" "}
          <div className="project-item">
            <div
              className="image"
              style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1408476227/photo/business-and-technology-concept-communication-network.jpg?s=612x612&w=0&k=20&c=SSgjJ7gHYl-oXZjRMBXmpxfiCWTizjkWyifPkbyAri4=')`,
              }}
            ></div>
            <div className="title">Project-4</div>
          </div>{" "}
          <div className="project-item">
            <div
              className="image"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=400')`,
              }}
            ></div>
            <div className="title">Project-5</div>
          </div>
        </div>

        <div className="profile-education">
          <h2>Education</h2>
          <div className="education-item">
            <div className="avatar">
              <img src={require("../assests/iiitlogo.png")} alt="iiit logo" />
            </div>
            <div className="detail">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>University A</p>
              <p>2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
