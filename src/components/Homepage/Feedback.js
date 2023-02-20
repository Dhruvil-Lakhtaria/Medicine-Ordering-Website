import React from "react";

function Feedback() {
  const validate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <h2>Feedback Form</h2>
      <div id="error_message"></div>
      <form id="myform">
        <div className="input_field">
          <input type="text" placeholder="First Name" id="fname" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Last Name" id="lname" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Phone" id="phone" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Email" id="email" />
        </div>
        <div className="input_field">
          <textarea placeholder="Your Feedback" id="yourfeedback"></textarea>
        </div>
        <div className="btn">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Feedback;
