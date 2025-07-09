import React from "react";
import "./CSS/ContactUs.css";
import contact_img from "../components/Assests/contact_us.jpg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="contact-left">
          <img src={contact_img} alt="contactUs" width={500} />
        </div>
        <div className="contact-right">
          <div className="contact-details">
            <h3>Our Store</h3>
            <p>
              Balaji Ward, Jagdalpur <br />
              Chhattisgarh, India <br />
              494001
            </p>
            <br />
            <p>Phone No.: +91 9876543210</p>
            <p>
              Email:{" "}
              <a href="mailto:admin@clickcart.com">admin@clickcart.com</a>
            </p>
          </div>
          <div className="contact-details">
            <h3>Careers at ClickCart</h3>
            <p>Learn more about our teams and job openings.</p>
          </div>
          <button className="jobs-btn">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
