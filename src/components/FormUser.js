import React from "react";
import { useHistory } from "react-router-dom";

function FormUser({ inputChange, state }) {
  const history = useHistory();

  const { firstName, lastName, email } = state;

  const nextForm = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      !email.includes("@")
    ) {
      history.push("/");
    } else {
      history.push("/details");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <h3 className="text-center">Step 1</h3>
          <form className="mt-4">
            <input
              onChange={inputChange("firstName")}
              type="text"
              className={
                firstName === ""
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="firstName"
              value={firstName}
            />
            <br />
            <input
              onChange={inputChange("lastName")}
              type="text"
              className={
                lastName === ""
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="lastName"
              value={lastName}
            />
            <br />
            <input
              onChange={inputChange("email")}
              type="text"
              className={
                email === "" || !email.includes("@")
                  ? "form-control alert-warning"
                  : "form-control alert-success"
              }
              placeholder="email"
              value={email}
            />
            <br />
            <button onClick={nextForm} className="btn btn-primary form-control">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
