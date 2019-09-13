import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { deletePost } from "../../actions/post";

import Spinner from "../layout/Spinner";

const Notes = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const postRow = posts.map(post => (
    <tr key={post._id}>
      <td>{post.name}</td>
      <td className="hide-sm">Hello</td>
      <td className="hide-sm">{post.text}</td>
      <td>
        <Moment format="YYYY/MM/DD">{post.date}</Moment>
      </td>
      <td>
        <button onClick={() => deletePost(post._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ));
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h2 className="my-2">Notes</h2>
      <table className="table">
        <thead>
          <tr className="hide-sm">
            <th>From</th>
            <th>Title</th>
            <th>Type</th>
          </tr>
          <tr />
        </thead>
        <tbody>{postRow}</tbody>
      </table>
    </Fragment>
  );
};

Notes.propTypes = {
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost }
)(Notes);
