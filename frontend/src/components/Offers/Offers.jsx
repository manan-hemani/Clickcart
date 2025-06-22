import React from "react";
import "./Offers.css";
import offer_image from "../Assests/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Members Only Deals</h1>
        <h3>Tech You Won’t Find Elsewhere</h3>
        <p>
          Unlock unbeatable prices on must-have gadgets, only for our exclusive
          members.
        </p>
        <div className="offers-left-button">
          <button>Grab the Deal</button>
        </div>
      </div>
      <div className="offers-right">
        <img src={offer_image} alt="offer" height={500} width={500} />
      </div>
    </div>
  );
};

export default Offers;
