import React from "react";
import "./CSS/About.css";
import about_image from "../components/Assests/about_us.png";

const About = () => {
  return (
    <div className="about-us">
      <h1>About US</h1>
      <div className="about">
        <div className="about-left">
          <img src={about_image} alt="about us" width={500} />
        </div>
        <div className="about-right">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          vitae nam suscipit pariatur distinctio impedit in repellendus sequi
          nihil reiciendis praesentium ipsam, maxime eveniet sapiente cumque
          numquam necessitatibus nemo illum.
        </div>
      </div>
      <div className="admin-btn">
        <button>Admin Panel</button>
      </div>
    </div>
  );
};

export default About;
