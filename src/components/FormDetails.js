import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormDetails({ inputChange, state }) {
  const history = useHistory();

  const { profession, workStatus, phone } = state;

  const toConfirm = (e) => {
    e.preventDefault();

    if (profession === "" || workStatus === "" || phone === "") {
      history.push("/details");
    } else {
      history.push("/confirm");
    }
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
              className={
                profession === ""
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="profession"
              value={profession}
            />
            <br />
            <input
              onChange={inputChange("workStatus")}
              type="text"
              className={
                workStatus === ""
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="workStatus"
              value={workStatus}
            />
            <br />
            <input
              onChange={inputChange("phone")}
              type="text"
              className={
                phone === ""
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="phone"
              value={phone}
            />
            <br />
            <Link to="/" className="btn btn-secondary form-control">
              Back
            </Link>
            <button
              onClick={toConfirm}
              className="btn btn-primary form-control mt-3"
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
