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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            vitae nam suscipit pariatur distinctio impedit in repellendus sequi
            nihil reiciendis praesentium ipsam, maxime eveniet sapiente cumque
            numquam necessitatibus nemo illum.
          </p>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error
            delectus tempora, sit culpa ipsa possimus excepturi illum rem neque,
            nulla expedita deleniti, quis inventore est totam perferendis vero
            dignissimos?
          </p>
        </div>
      </div>
      <div className="about-why-chose-us">
        <h2>Why Chose Us</h2>
        <div className="about-why-format-main">
          <div className="about-chose-details">
            <h4>Quality Assuarance</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempora quo iste.
            </p>
          </div>
          <div className="about-chose-details">
            <h4>Convinience</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempora quo iste.
            </p>
          </div>
          <div className="about-chose-details">
            <h4>Customer Service</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempora quo iste.
            </p>
          </div>
        </div>
      </div>
      <div className="admin-btn">
        <button>Admin Panel</button>
      </div>
    </div>
  );
};

export default About;
