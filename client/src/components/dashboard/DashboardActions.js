import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = ({ _id }) => {
  return (
    <div className="dash-buttons">
      <Link to={`/profile/${_id}`} className="btn">
        <i className="fas fa-user-circle text-primary" /> View Profile
      </Link>
      <Link to="/edit-profile" className="btn">
        <i className="fas fa-user-edit text-primary" /> Edit Profile
      </Link>
      <Link to="/posts" className="btn">
        <i className="fas fa-sticky-note text-primary" /> New Post
      </Link>
    </div>
  );
};

export default DashboardActions;
