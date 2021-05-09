import React from "react";

const Header = ({ onToggle, checkBoolean }) => {
  return (
    <div className="row my-4">
      <div className="col-12 col-md-6 mx-auto d-flex justify-content-between">
        <h1>Task Tracker</h1>
        {checkBoolean ? (
          <button
            className="btn btn-sm btn-danger px-3"
            onClick={() => onToggle()}
          >
            Close
          </button>
        ) : (
          <button
            className="btn btn-sm btn-success px-3"
            onClick={() => onToggle()}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
