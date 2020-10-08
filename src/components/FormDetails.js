import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormDetails({ inputChange, state }) {
  const history = useHistory();

  const toConfirm = (e) => {
    e.preventDefault();
    history.push("/confirm");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <form>
            <input
              onChange={inputChange("profession")}
              type="text"
              className="form-control"
              placeholder="profession"
              value={state.profession}
            />
            <br />
            <input
              onChange={inputChange("workStatus")}
              type="text"
              className="form-control"
              placeholder="workStatus"
              value={state.workStatus}
            />
            <br />
            <input
              onChange={inputChange("phone")}
              type="text"
              className="form-control"
              placeholder="phone"
              value={state.phone}
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
