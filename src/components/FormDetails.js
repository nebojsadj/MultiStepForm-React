import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormDetails({ inputChange, state }) {
  const history = useHistory();

  const { profession, workStatus, phone } = state;

  const toConfirm = (e) => {
    e.preventDefault();
    history.push("/confirm");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <h3 className="text-center">Step 2</h3>
          <form className="mt-4">
            <input
              onChange={inputChange("profession")}
              type="text"
              className="form-control"
              placeholder="profession"
              value={profession}
            />
            <br />
            <input
              onChange={inputChange("workStatus")}
              type="text"
              className="form-control"
              placeholder="workStatus"
              value={workStatus}
            />
            <br />
            <input
              onChange={inputChange("phone")}
              type="text"
              className="form-control"
              placeholder="phone"
              value={phone}
            />
            <br />
            <Link to="/" className="btn btn-secondary form-control">
              Back
            </Link>
            <button
              onClick={toConfirm}
              className="btn btn-warning form-control mt-3"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormDetails;
