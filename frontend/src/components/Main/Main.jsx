import React from "react";
import "./main.css";
import main_img from "../Assests/home_page.jpeg";
import lightning from "../Assests/lightning_emoji.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main-left">
        <h2>
          Next-Gen Tech Just Dropped{" "}
          <img src={lightning} alt="lightning" height={50} width={50} />
        </h2>
        {/* <div className="main-left-icon">
          <img src={lightning} alt="lightning" height={50} width={50} />
        </div> */}
        <div className="main-left-paragraph">
          <p>
            Explore the freshest electronics
            <p>from smartwatches to laptops—all in one place.</p>
          </p>
        </div>
        <div className="main-latest-button">
          <button>Browse New Arrivals</button>
        </div>
      </div>
      <div className="main-right">
        <img src={main_img} alt="MainImage" width={500} height={500} />
      </div>
    </div>
  );
};

export default Main;
