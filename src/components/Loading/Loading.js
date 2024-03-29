import React from "react";

const Loading = () => {
  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
