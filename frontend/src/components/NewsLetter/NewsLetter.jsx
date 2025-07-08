import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {

  const submitHandler = (event) => {
    event.preventDeafult();
  }

  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our news letter and stay updated.</p>
      <form onSubmit={submitHandler}>
        <div>
          <input type="email" placeholder="Your Email ID" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
