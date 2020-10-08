import React from "react";
import { useHistory } from "react-router-dom";

function FormUser({ inputChange, state }) {
  const history = useHistory();

  const { firstName, lastName, email } = state;

  const nextForm = (e) => {
    e.preventDefault();
    history.push("/details");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <form>
            <input
              onChange={inputChange("firstName")}
              type="text"
              className="form-control"
              placeholder="firstName"
              value={firstName}
            />
            <br />
            <input
              onChange={inputChange("lastName")}
              type="text"
              className="form-control"
              placeholder="lastName"
              value={lastName}
            />
            <br />
            <input
              onChange={inputChange("email")}
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
            />
            <br />
            <button onClick={nextForm} className="btn btn-warning form-control">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
