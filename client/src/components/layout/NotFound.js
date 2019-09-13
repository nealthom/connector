import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className=" fas fa-exlamation-triangle" />Page Not Found
      </h1>
      <p className="large">Sorry, this page doesn't exist.</p>
    </Fragment>
  );
};

export default NotFound;
